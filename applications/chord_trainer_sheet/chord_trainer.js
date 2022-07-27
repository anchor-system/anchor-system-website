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

    let row = fretLine.insertRow(fretLine.rows.length);

    row.insertCell(0)
    row.insertCell(1)
    row.insertCell(2)

    row.cells[0].innerHTML = anchorNoteName;
    row.cells[1].innerHTML = rootNoteName + " " + chordQualityName;
    row.cells[2].innerHTML = "_________";

    numCreated += 1;

}

for (let i = 0; i < 200; i++) {
    generateSituation();
}


