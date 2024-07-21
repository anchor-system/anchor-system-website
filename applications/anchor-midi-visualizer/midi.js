function empty_midi_message_callback(midi_message) {

}

class Midi {
    constructor(midi_message_callback = empty_midi_message_callback) {
        this.request_midi_access();
        this.midi_message_callback = midi_message_callback;
    }

    request_midi_access() {
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess()
                .then(
                    // midi access success
                    (system_midi_data) => {
                    this.midi_inputs = system_midi_data.inputs;
                    this.midi_inputs_array = Array.from(this.midi_inputs.values());
                    console.log("we have identified the following midi inputs:")
                    console.log(this.midi_inputs_array)
                } ,
                    // midi access failure
                    () => {
                        alert("Could not access your MIDI devices.");
                    }
                );
        } else {
            alert("Web MIDI API is not supported in this browser.");
        }
    }

    list_midi_inputs() {
        this.midi_inputs.forEach((value, index) => {
            console.log(`Index: ${index}, Value: ${value}`);
        });
    }

    select_midi_input_by_index(index) {
        this.select_midi_input(this.midi_inputs_array[index]);
    }

    select_midi_input(midi_input) {
        this.selected_midi_input = midi_input;
        this.selected_midi_input.onmidimessage = this.midi_message_callback;
    }
}