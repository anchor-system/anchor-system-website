/*
 * USAGE:
 *  For any file that you want to use helpers with you need to make sure you load in helpers first
 *  <script type="text/javascript" src="javascript/helpers.js"></script>
 *  <script type="text/javascript" src="SCRIPT_THAT_REQUIRES_IT.js"></script>
 */

/*
 * SECTION: random
 */

/*
 * usage:
 * let x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 * let five_random_members = get_random_subarray(x, 5);
 */
function get_random_subarray(arr, size) {
    let shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

/*
 * generates a random number between 0 and max_number - 1 inclusive
 */
function random_number(max_number) {
    return Math.floor(Math.random() * max_number);
}


/*
 * generates n random numbers that are all unique, note the runtime of this function
 * is random as well.
 */
function generate_n_unique_random_numbers(n, max) {
    // 0 <= x < max
    let arr = [];
    while (arr.length < n){
        let r = Math.floor(Math.random() * max);
        if (arr.indexOf(r) === -1) {
            arr.push(r);
        }
    }
    return arr;
}

function random_selection_from_array(arr) {
    return arr[random_number(arr.length)]
}

/*
 * ENDSECTION: random
 */

/*
 * SECTION: sets
 */

function sets_equal(set_a, set_b) {
    return set_a.size === set_b.size && [...set_a].every((x) => set_b.has(x))
}
const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));


/*
 * SECTION: string functions
 */
function set_of_int_to_space_separated_string(set) {
    return array_of_int_to_space_separated_string(Array.from(set))
}

function array_of_int_to_space_separated_string(arr) {
    let comma_string = arr.toString()
    let string_array = comma_string.split(",")
    return string_array.join(" ")
}

/*
 * ENDSECTION: string functions
 */

/*
 * SECTION: music
 */

const note_map = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

function select_random_flat_or_sharp(note) {
    if (note.includes('/')) {
        const parts = note.split('/'); // Split note into parts
        const randomIndex = Math.floor(Math.random() * 2);
        return parts[randomIndex]; // Return either parts[0] or parts[1]
    } else {
        return note;
    }
}

const interval_collections = [
    ["major scale", [0, 2, 4, 5, 7, 9, 11]],
    ["minor scale", [0, 2, 3, 5, 7, 8, 10]],
    ["maj7", [0, 4, 7, 11]],
    ["min7", [0, 3, 7, 10]],
    ["dom7", [0, 4, 7, 10]],
    ["half-dim7", [0, 3, 6, 10]],
    ["dim7", [0, 3, 6, 9]],
    ["min-maj7" , [0, 3, 7, 11]],
    ["maj6", [0, 4, 7, 9]],
    ["min6", [0, 3, 7, 9]],
    // ["aug7", [0, 4, 8, 10]],
]

function pos_mod_12(n) {
    return ((n % 12 ) + 12) % 12
}

function get_day_of_the_year() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function get_the_note_of_the_day()  {
    return pos_mod_12(get_day_of_the_year())
}

function midi_to_dist_from_c4(midi_note_number) {
   return midi_note_number - 60;
}

/*
 * ENDSECTION: music
 */
