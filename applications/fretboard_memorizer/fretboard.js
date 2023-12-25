let fretBoard = document.getElementById("fret_line");

let string
let fretPosition

// let nut = [4, 9, 2, 7, 11, 4];
let fretBoardSection = [
    [4, 9, 2, 7, 0, 5],
    [5, 10, 3, 8, 1, 6],
    [6, 11, 4, 9, 2, 7],
    [7, 0, 5, 10, 3, 8],
    [8, 1, 6, 11, 4, 9],
    [9, 2, 7, 0, 5, 10],
    [10, 3, 8, 1, 6, 11],
];

var shiftedFretboard;

function posMod(n, d) {
   return ((n % d) + d ) % d;
}

function showFretboard() {

    for (let row = 0 ; row < fretBoard.rows.length; row++) {
        for (let i = 0; i < 6; i ++) {
            let fretPos = fretBoard.rows[row].cells[i];
            fretPos.innerHTML = shiftedFretboard[row][i];
        }
    }
}

function clearFretboard() {
    for (let row = 0 ; row < fretBoard.rows.length; row++) {
        for (let i = 0; i < 6; i ++) {
            let fretPos = fretBoard.rows[row].cells[i];
            fretPos.innerHTML = "X";
        }
    }
}

function generateNRandomNumbersNoReplacement(N, max) {
    // 0 <= x < max
    let arr = [];
    while (arr.length < N){
        let r = Math.floor(Math.random() * max);
        if (arr.indexOf(r) === -1) {
            arr.push(r);
        }
    }
    return arr;
}

function isCorrect() {
    for (let row = 0; row < fretBoard.rows.length; row++) {
        for (let i = 0; i < fretBoard.rows[row].cells.length; i ++) {
            let cell = fretBoard.rows[row].cells[i];
            if (cell.innerHTML !== "X") {
                let interval = parseInt(cell.innerHTML, 10);
                return interval === shiftedFretboard[row][i];
            }
        }

    }
    return false // no input given all cells contained X
}

function generateSituation() {
    let now = new Date();
    let numStrings = 6
    let numFrets = 7
    let fullDaysSinceEpoch = Math.floor(now/8.64e7);

    string = Math.floor(Math.random() * numStrings)
    fretPosition = Math.floor(Math.random() * numFrets)

    let interval = Math.floor(fullDaysSinceEpoch % 12);
    shiftedFretboard = fretBoardSection.map(row => row.map(x => posMod(x + interval, 12)));

    selectText(fretBoard.rows[fretPosition].cells[string]);
}

generateSituation();

function selectText(element) {
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in element: Unsupported browser.");
    }
}

document.body.onkeydown = function(e){
    // Number 13 is the "Enter" key on the keyboard
    if (e.keyCode === 13 || e.key === " ") {
        e.preventDefault();
        if (isCorrect()) {
            clearFretboard()
            generateSituation();
        }
    } else if (e.key === "s") {
        e.preventDefault();
        showFretboard();
        console.log("down")
        selectText(fretBoard.rows[fretPosition].cells[string]);
    }

}
document.body.onkeyup = function(e){
    // Number 13 is the "Enter" key on the keyboard
    if (e.key === "s") {
        e.preventDefault();
        clearFretboard()
        selectText(fretBoard.rows[fretPosition].cells[string]);
    }
}
