document.addEventListener('DOMContentLoaded', () => {
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess()
            .then(onMIDISuccess, onMIDIFailure);
    } else {
        alert("Web MIDI API is not supported in this browser.");
    }

    const rootNoteSelect = document.getElementById('root-note');
    const settingsModal = document.getElementById('settings-modal');
    const toggleSettingsModal = document.getElementById('toggle-settings');
    const closeSettingsModal = document.getElementById('close-modal');

    toggleSettingsModal.addEventListener('click', () => {
        settingsModal.style.display = 'block';
    });

    closeSettingsModal.addEventListener('click', () => {
        settingsModal.style.display = 'none';
    });

    rootNoteSelect.addEventListener('change', () => {
        rootNote = parseInt(rootNoteSelect.value, 10);
        // Update root note here if needed
    });
});

let rootNote = 0; // Default root note is C
let midiInput = null;
let activeNotes = new Map(); // Map to store active notes and their labels

function onMIDISuccess(midiAccess) {
    const inputs = midiAccess.inputs;

    // Display MIDI inputs
    const selectedInputDiv = document.getElementById('selected-input');
    selectedInputDiv.innerHTML = '<h2>Select MIDI Input:</h2>';

    inputs.forEach(input => {
        const inputOption = document.createElement('div');
        inputOption.textContent = input.name;
        inputOption.classList.add('midi-input');
        inputOption.addEventListener('click', () => {
            midiInput = input;
            selectMIDIInput(input);
        });
        selectedInputDiv.appendChild(inputOption);
    });

    // Listen for MIDI messages
    inputs.forEach(input => {
        input.onmidimessage = getMIDIMessage;
    });
}

function onMIDIFailure() {
    alert("Could not access your MIDI devices.");
}

function getMIDIMessage(message) {
    const [command, note, velocity] = message.data;

    if (command === 144 && velocity > 0 && midiInput !== null) { // Note on
        const anchoredNote = midi_to_anchored_representation(note, rootNote);
        displayNoteLabel(anchoredNote, velocity);
        activeNotes.set(note, anchoredNote); // Store active note
    } else if (command === 128 || (command === 144 && velocity === 0)) { // Note off
        const label = activeNotes.get(note);
        if (label) {
            const noteElements = document.querySelectorAll(`.note[data-label="${label}"]`);
            noteElements.forEach(element => {
                element.remove(); // Remove note label from DOM immediately
            });
            activeNotes.delete(note); // Remove note from active notes
        }
    }
}

function midi_to_anchored_representation(midiNote, root) {
    const adjustedNote = midiNote - 60;
    const anchoredNote = adjustedNote - root;

    const octave = Math.floor(anchoredNote / 12);
    const noteInOctave = ((anchoredNote % 12) + 12) % 12;

    let label = noteInOctave;

    if (octave > 0) {
        label += "'".repeat(octave);
    } else if (octave < 0) {
        label += ",".repeat(Math.abs(octave));
    }

    return label.toString();
}

function displayNoteLabel(label, velocity) {
    const noteDisplay = document.getElementById('note-display');
    const noteElement = document.createElement('div');

    noteElement.textContent = label;
    noteElement.classList.add('note');
    noteElement.dataset.label = label;
    noteElement.style.fontSize = `${velocity * 0.2}em`;

    noteDisplay.appendChild(noteElement);
}

function selectMIDIInput(selectedInput) {
    const midiInputs = document.querySelectorAll('.midi-input');
    midiInputs.forEach(input => {
        input.classList.remove('selected');
    });

    selectedInput.classList.add('selected');
}
