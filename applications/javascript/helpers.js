/*
 * For any file that you want to use helpers with you need to make sure you load in helpers first
 *  <script type="text/javascript" src="javascript/helpers.js"></script>
 *  <script type="text/javascript" src="SCRIPT_THAT_REQUIRES_IT.js"></script>
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

function random_selection_from_array(arr) {
    return arr[random_number(arr.length)]
}

function array_of_int_to_space_separated_string(arr) {
    let comma_string = arr.toString()
    let string_array = comma_string.split(",")
    return string_array.join(" ")
}

