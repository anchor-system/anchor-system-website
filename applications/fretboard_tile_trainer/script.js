const valid_numbers = [1, 2, 3, 5, 7, 9, 10, 11]
const sample_size = 4

let situation_number = random_selection_from_array(valid_numbers)

function on_animation_end(animation_end_object) {
    let el = animation_end_object.target
    el.classList.remove("correct-answer")
}

function on_cell_click(table_cell) {
    let guess = parseInt(table_cell.id)
    if (guess_correct(guess)) {
        table_cell.classList.add("correct-answer");
        situation_number = random_selection_from_array(valid_numbers)
        document.getElementById("question").innerText = situation_number.toString()
    }
}

window.onload = function() {
    document.getElementById("question").innerText = situation_number.toString()
    let table_cells = document.getElementsByTagName("TD");
    for (let i = 0; i < table_cells.length; i++) {
        let table_cell = table_cells.item(i);
        if (!table_cell.classList.contains("blank_cell")) {

            table_cell.addEventListener("webkitAnimationEnd", on_animation_end,false);
            table_cell.addEventListener("animationend", on_animation_end,false);
            table_cell.addEventListener("oanimationend", on_animation_end, false);

            table_cell.onclick = function () {
                on_cell_click(table_cell)
            }
        }
    }
}

function guess_correct(guess) {
    return situation_number === guess
}


