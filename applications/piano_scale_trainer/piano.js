/**
 * This class allows for the drawing of a simple 2d piano with a variable number of octaves
 * it allows you to select notes which can make them green, as well as having labels on each
 * of the notes
 *
 * It requires that the helpers.js file is included before this file is included
 * and it also requries that there is a div with the class 'keyboard' in the index file where this is included.
 * It also relies that the html file uses the piano.css file as well
 *
 * You can define a custom callback function which gets run whenever someone clicks a key on the keyboard
 * the callback takes a single integer representing that index of the keyboard which is pressed
 * which is a linear mapping starting from the lowest key on the keyhboard to the highest starting from zero.
 */

function empty_keyboard_key_callback(key_index) { };

class Piano {
    constructor(num_octaves, show_key_labels, use_number_key_labels, keyboard_key_callback = empty_keyboard_key_callback) {
        this.num_octaves = num_octaves;
        this.num_keys = num_octaves * 12;
        this.show_key_labels = show_key_labels ;
        this.use_number_key_labels = use_number_key_labels;
        this.keyboard_key_callback = keyboard_key_callback;

        this.current_anchor = 0;
        this.c4_index = this.num_octaves % 2 === 0 ? this.num_keys / 2 : ((this.num_octaves + 1) * 12) / 2;

        this.keyboard_element = document.getElementById('keyboard');
        if (this.keyboard_element == null)  {
            console.error("unable to locate keyboard, make sure you have a div with an id of 'keyboard'");
        } else {
            this.create_html_keyboard()
        }
    }

    // precondition: there exists a div with an id of "keyboard"
    create_html_keyboard() {
        const whiteKeyWidth = 40;
        const blackKeyWidth = 30;

        for (let i = 0; i < this.num_keys; i++) {
            const octave = Math.floor(i / 12) + 1;
            const note = i % 12;
            const keyType = note_map[note].includes('/') ? 'black' : 'white';
            const key = this.create_keyboard_key(keyType, note, i); // Use i as the data attribute
            this.keyboard_element.appendChild(key);

            if (keyType === 'black') {
                // Delayed calculation to ensure DOM update
                setTimeout(() => {
                    const whiteKeyIndex = i - 1 >= 0 ? i - 1 : i + 1; // Find the index of the neighboring white key
                    const usedKeyBehind = whiteKeyIndex === i - 1;
                    const whiteKey = document.querySelector(`[data-index="${whiteKeyIndex}"]`);
                    if (whiteKey) {
                        key.style.left = `${whiteKey.offsetLeft + (usedKeyBehind ? 1 : -1) * (whiteKeyWidth * .70)}px`;
                    }
                }, 0);
            }
        }
    }

    create_keyboard_key(type, note, index) {
        const key = document.createElement('div');
        key.classList.add(type + '-key');
        key.dataset.index = index; // Use index as the data attribute
        const label = this.show_key_labels ? (this.use_number_key_labels ? note : note_map[note]) : "";
        key.innerHTML = `<div class="number">${label}</div>`;
        key.addEventListener('click', (event) => {
            event.stopPropagation();
            this.keyboard_key_callback(index);
        });
        return key;
    }

    change_anchor_note(new_anchor) {
        this.current_anchor = new_anchor;
        this.update_labels_using_current_anchor();
    }

    update_labels_using_current_anchor() {
        const keys = this.keyboard_element.children; // Get all children of the keyboard element
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const index = parseInt(key.dataset.index);
            const note = index % 12;
            const currentRoot = this.current_anchor;
            const label = this.show_key_labels ? (this.use_number_key_labels ? pos_mod_12(note - currentRoot) : note_map[pos_mod_12(note - currentRoot)]) : "";
            key.querySelector('.number').innerHTML = label;
        }
    }

    select_key_on_keyboard(index) {
        const selectedKey = document.querySelector(`[data-index="${index}"]`);
        if (selectedKey) {
            selectedKey.classList.add('selected');
        }
    }

    deselect_key_on_keyboard(index) {
        const selectedKey = document.querySelector(`[data-index="${index}"]`);
        if (selectedKey) {
            selectedKey.classList.remove('selected');
        }
    }

    clear_selected_keys() {
        document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
    }

    get_currently_selected_keys() {
        return Array.from(document.querySelectorAll('.selected')).map(el => parseInt(el.dataset.index));
    }

    // this uses X*'s rather than X's
    note_collection_to_used_keys_on_keyboard(note_collection) {
        let mappedKeys = [];
        for (let i = 0; i < this.num_keys; i++) {
            if (note_collection.includes(i % 12)) {
                mappedKeys.push(i);
            }
        }
        return mappedKeys;
    }

}