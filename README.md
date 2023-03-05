# Drum Machine
This is a drum machine web application built using HTML, CSS, and JavaScript. It fulfills the user stories specified in the freeCodeCamp Drum Machine project.

## User Stories
    1. As a user, I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
    2. As a user, within #drum-machine I can see an element with a corresponding id="display".
    3. As a user, within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
    4. As a user, within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
    5. As a user, when I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
    6. As a user, when I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).
    7. As a user, when a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
## Audio Samples
- Heater 1
- Heater 2
- Heater 3
- Heater 4
- Clap
- Open-HH
- Kick-n'-Hat
- Kick
- Closed-HH
## Technologies Used
- TML
- CSS
- JavaScript
## Installation and Usage
1. Clone the repository or download the zip file.
2. Navigate to the project directory using a terminal or command prompt.
3. Open index.html in your browser.

Alternatively, you can visit the hosted version of the app at drum-machine-ai.netlify.app.

## Future Improvements
- Implement more audio samples.
- Add a volume control feature.
- Allow users to upload their own audio samples.
## License
This project is licensed under the MIT License. See the LICENSE file for more information.