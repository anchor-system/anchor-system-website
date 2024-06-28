document.addEventListener('DOMContentLoaded', function() {
    const keyboard = document.getElementById('keyboard');
    const keySignatureElement = document.getElementById('key-signature');
    const instructions = document.getElementById('instructions');

    const noteMap = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

    function selectRandomFlatOrSharp(note) {
        if (note.includes('/')) {
            const parts = note.split('/'); // Split note into parts
            const randomIndex = Math.floor(Math.random() * 2);
            return parts[randomIndex]; // Return either parts[0] or parts[1]
        } else {
            return note;
        }
    }

    const NUM_KEYS_PER_OCTAVE = 12; // Number of keys per octave
    const NUM_OCTAVES = 3; // Number of octaves to display

    const allIntervalCollectionsToPullFrom = [
        ["Major Scale", [0, 2, 4, 5, 7, 9, 11]],
        ["Minor Scale", [0, 2, 3, 5, 7, 8, 10]],
        ["Maj7", [0, 4, 7, 11]],
        ["Dom7", [0, 4, 7, 10]],
        ["Half-Dim7", [0, 3, 6, 10]],
        ["Dim7", [0, 3, 6, 9]],
        ["Min7", [0, 3, 7, 10]],
    ]

    // Array to store processed results
    var allNoteCollectionsToPullFrom  = [];
    let showKeyLabels = false;
    let useNumberKeyLabels = true;

    let currentNoteCollection = [];
    const use_note_of_the_day = true;

    // Loop over the array and process each element
    for (let i = 0; i < allIntervalCollectionsToPullFrom.length; i++) {
        const intervalCollectionItem = allIntervalCollectionsToPullFrom[i];
        const intervalCollectionName = intervalCollectionItem[0];
        const intervalCollection = intervalCollectionItem[1];

        var rootNotes;
        if (use_note_of_the_day) {
            rootNotes = [get_the_note_of_the_day()]
        } else {
            rootNotes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }

        const mappingOfNoteCollectionNameToNoteCollection = generateListOfNoteCollectionsForEachRootNoteFromAnIntervalCollection(intervalCollectionName, intervalCollection, rootNotes);
        allNoteCollectionsToPullFrom = allNoteCollectionsToPullFrom.concat(mappingOfNoteCollectionNameToNoteCollection );
    }



    function generateListOfNoteCollectionsForEachRootNoteFromAnIntervalCollection(intervalCollectionName, intervalCollection, rootNotes) {
        const noteCollectionForEachRootNote = [];

        for (let i = 0; i < rootNotes.length; i++) { // 12 notes in an octave
            const rootNote = rootNotes[i];
            const scaleName = `${selectRandomFlatOrSharp(noteMap[rootNote])} ${intervalCollectionName} `;
            console.log(scaleName);
             noteCollectionForEachRootNote.push([scaleName,intervalCollection.map(interval => (rootNote + interval) % 12)]);
        }
        return noteCollectionForEachRootNote;
    }

    function createKey(type, note, index) {
        const key = document.createElement('div');
        key.classList.add(type + '-key');
        key.dataset.index = index; // Use index as the data attribute
        key.innerHTML = `<div class="number">${useNumberKeyLabels ? note : noteMap[note]}</div>`;
        key.addEventListener('click', (event) => {
            event.stopPropagation();
            selectKey(index);
        });
        return key;
    }

    function createKeyboard() {
        const whiteKeyWidth = 40;
        const blackKeyWidth = 30;
        const numKeys = NUM_OCTAVES * NUM_KEYS_PER_OCTAVE;

        for (let i = 0; i < numKeys; i++) {
            const octave = Math.floor(i / NUM_KEYS_PER_OCTAVE) + 1;
            const note = i % NUM_KEYS_PER_OCTAVE;
            const keyType = noteMap[note].includes('/') ? 'black' : 'white';
            const key = createKey(keyType, note, i); // Use i as the data attribute
            keyboard.appendChild(key);

            if (keyType === 'black') {
                // Delayed calculation to ensure DOM update
                setTimeout(() => {
                    const whiteKeyIndex = i - 1 >= 0 ? i - 1 : i + 1; // Find the index of the neighboring white key
                    const usedKeyBehind = whiteKeyIndex === i - 1;
                    const whiteKey = document.querySelector(`[data-index="${whiteKeyIndex}"]`);
                    if (whiteKey) {
                        key.style.left = `${whiteKey.offsetLeft + (usedKeyBehind ?  1: -1) * (whiteKeyWidth *  .70)}px`;
                    }
                }, 0);
            }
        }
    }

    function pos_mod_12(n) {
       return ((n % 12 ) + 12) % 12
    }

    function updateLabelsUsingCurrentRoot() {
        const keys = keyboard.children; // Get all children of the keyboard element
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const index = parseInt(key.dataset.index);
            const note = index % 12;
            const currentRoot = currentNoteCollection[0];
            key.querySelector('.number').innerHTML = useNumberKeyLabels ? pos_mod_12(note - currentRoot) :  noteMap[pos_mod_12(note - currentRoot)];
        }
    }

    function selectKey(index) {
        const selectedKey = document.querySelector(`[data-index="${index}"]`);
        if (selectedKey) {
            selectedKey.classList.toggle('selected');
        }
    }

    function clearSelections() {
        document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    }

    function flashKeys(keys, colorClass) {
        keys.forEach(key => {
            key.classList.add(colorClass);
            setTimeout(() => key.classList.remove(colorClass), 500);
        });
    }

    function verifyGuess() {
        const selectedKeys = Array.from(document.querySelectorAll('.selected')).map(el => parseInt(el.dataset.index));
        const mappedKeyboard = mapKeyToEntireKeyboard(currentNoteCollection);
        const incorrectKeys = selectedKeys.filter(index => !mappedKeyboard.includes(index));
        const missingKeys = mappedKeyboard.filter(index => !selectedKeys.includes(index));

        console.log(selectedKeys, mappedKeyboard, currentNoteCollection);

        if (incorrectKeys.length === 0 && missingKeys.length === 0) {
            alert('Correct! You identified the notes correctly.');
            startNewRound();
        } else {
            const incorrectKeyElements = incorrectKeys.map(index => document.querySelector(`[data-index="${index}"]`));
            const missingKeyElements = missingKeys.map(index => document.querySelector(`[data-index="${index}"]`));

            flashKeys(incorrectKeyElements, 'flash-red');
            flashKeys(missingKeyElements, 'flash-yellow');
        }
    }

    function mapKeyToEntireKeyboard(scale) {
        const numKeys = NUM_OCTAVES * NUM_KEYS_PER_OCTAVE;
        let mappedKeys = [];
        for (let i = 0; i < numKeys; i++) {
            if (scale.includes(i % 12)) {
                mappedKeys.push(i);
            }
        }
        return mappedKeys;
    }

    function startNewRound() {
        clearSelections();
        console.log(allNoteCollectionsToPullFrom)
        const noteCollectionItem = allNoteCollectionsToPullFrom[Math.floor(Math.random() * allNoteCollectionsToPullFrom.length)];
        currentNoteCollection = noteCollectionItem[1]
        keySignatureElement.textContent = noteCollectionItem[0];
        updateLabelsUsingCurrentRoot();
    }

    function toggleNumbers() {
        showKeyLabels = !showKeyLabels;
        const numberElements = document.querySelectorAll('.number');
        numberElements.forEach(number => {
            number.style.display = showKeyLabels ? 'block' : 'none';
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent default spacebar scrolling behavior
            verifyGuess();
        } else if (event.key === 's') {
            toggleNumbers();
        }
    });

    createKeyboard();
    startNewRound();
});
