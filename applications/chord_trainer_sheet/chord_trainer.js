const FOUR_NOTE_QUALITIES = {
    "maj7": [0, 4, 7, 11],
    "min7": [0, 3, 7, 10],
    "dom7": [0, 4, 7, 10],
    "half-dim7": [0, 3, 6, 10],
    "dim7": [0, 3, 6, 9],
    "min-maj7": [0, 3, 7, 11],
    "maj6": [0, 4, 7, 9],
    "min6": [0, 3, 7, 9],
    // "aug7": [0, 4, 8, 10],
}

const NOTE_NUMBER_TO_STANDARD_NAME = [
    "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"
]

let fretLine = document.getElementById("fret_line");

let numCreated = 0;
let numAiPerAc = 10;
let anchorNoteNumber;
let anchorNoteName;
let rootNoteName;
let rootNoteNumber;
let chordQualityName;


function generateSituation() {

    if (numCreated % numAiPerAc === 0) {
        anchorNoteNumber = Math.floor(Math.random() * 12);
    }

    anchorNoteName = NOTE_NUMBER_TO_STANDARD_NAME[anchorNoteNumber];

    rootNoteNumber = Math.floor(Math.random() * 12);
    rootNoteName = NOTE_NUMBER_TO_STANDARD_NAME[rootNoteNumber];

    // Randomly chooses to use a sharp or flat
    if (rootNoteName.includes("/")) {
        rootNoteName = rootNoteName.split("/")[Math.floor(Math.random() * 2)];
    }

    if (anchorNoteName.includes("/")) {
        anchorNoteName = anchorNoteName.split("/")[Math.floor(Math.random() * 2)];
    }

    chordQualityName = Object.keys(FOUR_NOTE_QUALITIES)[Math.floor(Math.random() * Object.keys(FOUR_NOTE_QUALITIES).length)];


    numCreated += 1;

    return [anchorNoteName, rootNoteName, chordQualityName];
}

function createQuestionRow() {
    let anchorNoteName, rootNoteName, chordQualityName;

    let row = fretLine.insertRow(fretLine.rows.length);

    for (let i = 0; i < 2; i ++) {
        [anchorNoteName, rootNoteName, chordQualityName] = generateSituation();

        row.insertCell(3 * i)
        row.insertCell(3 * i + 1)
        row.insertCell(3 * i + 2)

        row.cells[3 * i].innerHTML = anchorNoteName;
        row.cells[3 * i + 1].innerHTML = rootNoteName + " " + chordQualityName;
        row.cells[3 * i + 2].innerHTML = "_________";

    }


}

for (let i = 0; i < 200; i++) {
    createQuestionRow();
}


