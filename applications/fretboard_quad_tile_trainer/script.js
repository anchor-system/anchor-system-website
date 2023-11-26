const valid_numbers = [1, 2, 3, 5, 7, 9, 10, 11]
const sample_size = 4

let situation = new Set(generate_n_unique_random_numbers(4, 12))

let correct_cells = new Set()

let right_guess = new Set()
let left_guess = new Set()
let top_guess = new Set()
let bottom_guess = new Set()

window.onload = function() {
    update_question_text()
    prepare_cells()
    hide_cell_contents()
}

/*
 * precondition:
 *  You've updated the situation
 */
function update_question_text() {
    document.getElementById("question").innerText = set_of_int_to_space_separated_string(situation)
}

function hide_cell_contents() {

    let table_cells = document.getElementsByTagName("TD");

    for (let i = 0; i < table_cells.length; i++) {
        let table_cell = table_cells.item(i);
        if (!table_cell.classList.contains("blank_cell")) {
            table_cell.innerText = "";
        }
    }

}


function remove_animation_classes(animation_end_object) {
    let el = animation_end_object.target
    let animation_classes = ["correct-answer", "correct-cell"]

    console.log(animation_classes)

    for (let i = 0; i < animation_classes.length; i++) {
        let animation_class = animation_classes[i]
        if (el.classList.contains(animation_class)) {
            el.classList.remove(animation_class)
        }
    }
}


function prepare_cells() {
    let table_cells = document.getElementsByTagName("TD");

    for (let i = 0; i < table_cells.length; i++) {
        let table_cell = table_cells.item(i);
        if (!table_cell.classList.contains("blank_cell")) {
            table_cell.onclick = function () {
                on_cell_click(table_cell)


                table_cell.addEventListener("webkitAnimationEnd", remove_animation_classes,false);
                table_cell.addEventListener("animationend", remove_animation_classes,false);
                table_cell.addEventListener("oanimationend", remove_animation_classes, false);
            }
        }
    }

}

function clear_guesses() {
    right_guess = new Set()
    left_guess = new Set()
    top_guess = new Set()
    bottom_guess = new Set()
    correct_cells = new Set()
}


function add_correct_answer_animation_classes() {
    let correct_cells_array = Array.from(correct_cells)
    for (let i = 0; i < correct_cells_array.length; i++) {
        let correct_cell = correct_cells_array[i];
        correct_cell.classList.remove("correct-cell")
        correct_cell.classList.add("correct-answer")
    }
}

function on_cell_click(table_cell) {

    let [section, cell_number_str] = table_cell.id.split("_")
    let cell_number = parseInt(cell_number_str)

    if (situation.has(cell_number)) {

        correct_cells.add(table_cell)
        table_cell.classList.add("correct-cell")

        let guess_section
        switch (section) {
            case "right":
                guess_section = right_guess
                break;
            case "left":
                guess_section = left_guess
                break;
            case "top":
                guess_section = top_guess
                break;
            case "bottom":
                guess_section = bottom_guess
                break;
            default:
        }

        guess_section.add(cell_number)

    }

    console.log(right_guess, situation)
    let fully_correct = sets_equal(right_guess, situation) &&  sets_equal(left_guess, situation) && sets_equal(top_guess, situation) && sets_equal(bottom_guess, situation)

    if (fully_correct) {
        situation =  new Set(generate_n_unique_random_numbers(4, 12))
        update_question_text()
        add_correct_answer_animation_classes()
        clear_guesses()
    }
}



