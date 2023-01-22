let fretLine = document.getElementById("fret_line");
let locateText = document.getElementById("locate_text");

let stringAnchorInterval = -1
let locateAnchorInterval = -1
let chosenString = -1

let keyMap =
    [
        ["r", "t", "y", "u", "i", "o"],
        ["f", "g", "h", "j", "k", "l"],
        ["v", "b", "n", "m", ",", "."]
    ]


function posMod(n, d) {
   return ((n % d) + d ) % d;
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
    let numFound = 0;
    for (let i = 0; i < fretLine.rows[0].cells.length; i ++) {
        let cell = fretLine.rows[0].cells[i];
        if (cell.innerHTML !== "X") {
            let interval = parseInt(cell.innerHTML, 10);
            if (interval !== shiftedNut[i]) {
                return false;
            }
            numFound += 1
        }
    }
    return numFound >= 2;
}

function guessedPositionToAnchorInterval(x, y) {
    let stringOffset = x - chosenString
    let fretOffset = y - 1
    let anchorIntervalChange = stringOffset * 5 + fretOffset
    let guessedAnchorInterval = stringAnchorInterval + anchorIntervalChange
    return posMod(guessedAnchorInterval, 12)
}

function generateSituation() {
    chosenString = Math.floor(Math.random() * 6);
    stringAnchorInterval = Math.floor(Math.random() * 12);
    locateAnchorInterval = Math.floor(Math.random() * 12);

    locateText.innerHTML = "LOCATE: " + locateAnchorInterval.toString()


    for (let i = 0; i < 6; i ++) {
        let fretPos = fretLine.rows[0].cells[i];
        if (i === chosenString)  {
            fretPos.innerHTML = stringAnchorInterval.toString();
            fretPos.classList.add("inverted");
        } else {
            fretPos.innerHTML = "X";
            fretPos.classList.remove("inverted");
        }
    }
}

document.body.onkeydown = function(e){

    for (let y = 0; y < keyMap.length; y ++) {
        for (let x = 0; x < keyMap[0].length; x++) {
            let key = keyMap[y][x]
            if (e.key === key) {
                let correct = guessedPositionToAnchorInterval(x, y) === locateAnchorInterval
                if (correct) {
                    generateSituation()
                }
            }
        }
    }
}

generateSituation();
