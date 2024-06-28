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

function pos_mod_12(n) {
    return ((n % 12 ) + 12) % 12
}

function get_the_note_of_the_day()  {
    const now = new Date();
    const fullDaysSinceEpoch = Math.floor(now/8.64e7);
    return (fullDaysSinceEpoch % 12)
}

/*
 * ENDSECTION: music
 */
