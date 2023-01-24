let fretLine = document.getElementById("fret_line");
let locateText = document.getElementById("locate_text");
let numFoundText = document.getElementById("num_found");
let numSolvedText = document.getElementById("num_solved");

let stringAnchorInterval = -1
let locateAnchorInterval = -1
let chosenString = -1
let positionsFound = new Set()
let numQuestionsSolved = 0

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

function positionToAnchorInterval(x, y) {
    let stringOffset = x - chosenString
    let fretOffset = y - 1
    let anchorIntervalChange = stringOffset * 5 + fretOffset
    let guessedAnchorInterval = stringAnchorInterval + anchorIntervalChange
    return posMod(guessedAnchorInterval, 12)
}

function numPossible(origin, originAnchorInterval, locateAnchorInterval) {
    let x, y = origin

}

function generateSituation() {
    positionsFound = new Set()
    chosenString = Math.floor(Math.random() * 6);
    stringAnchorInterval = Math.floor(Math.random() * 12);
    locateAnchorInterval = Math.floor(Math.random() * 12);

    locateText.innerHTML = "LOCATE: " + locateAnchorInterval.toString()
    numFoundText.innerHTML = "NUM FOUND: " + positionsFound.size + "/" + numPositionsPossible(locateAnchorInterval)
    numSolvedText.innerHTML = "SOLVED: " + numQuestionsSolved


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

function numPositionsPossible(locateAnchorInterval) {
    let numPossible = 0
    for (let y = 0; y < keyMap.length; y ++) {
        for (let x = 0; x < keyMap[0].length; x++) {
            if (positionToAnchorInterval(x, y) === locateAnchorInterval) {
                numPossible += 1
            }
        }
    }
    return numPossible;
}

document.body.onkeydown = function(e){
    for (let y = 0; y < keyMap.length; y ++) {
        for (let x = 0; x < keyMap[0].length; x++) {
            let key = keyMap[y][x]
            if (e.key === key) {
                let correct = positionToAnchorInterval(x, y) === locateAnchorInterval
                if (correct) {
                    positionsFound.add(x.toString(10) + y.toString(10))
                    let enough = positionsFound.size === numPositionsPossible(locateAnchorInterval)
                    if (enough) {
                        numQuestionsSolved += 1
                        generateSituation()
                    }
                }

            }
            numFoundText.innerHTML = "NUM FOUND: " + positionsFound.size + "/" + numPositionsPossible(locateAnchorInterval)
        }
    }
}

generateSituation();
