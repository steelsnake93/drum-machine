import { useEffect, useState } from "react";
import "./App.css";
import DrumPads from "./DrumPads";
import 'bootstrap/dist/css/bootstrap.min.css';

function DrumPad({drumPad, onPlay}) {
    const [activeKey, setActiveKey] = useState(false);
    // Add the audio clips to the HTML
    function handlePlaySound() {
        const audio = document.getElementById(drumPad.text);
        audio.currentTime = 0;
        audio.play();
        setActiveKey(drumPad.src);
        setTimeout(() => setActiveKey(false), 100);
        onPlay(drumPad.text);
    }
    // Implement the click and keyboard events
    useEffect(() => {
        function handleKeyDown(event) {
            if(event.key.toUpperCase() === drumPad.text) {
                handlePlaySound();
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
        }, [drumPad.text])

    return (
        <div
            className={`btn btn-primary drum-pad ${activeKey ? "active" : ""}`}
            onClick={handlePlaySound}
            id={drumPad.src}
        >
            {drumPad.text}
            <audio className="clip" id={drumPad.text} src={drumPad.src} />
        </div>
    );
}
// Display the associated audio clip
export default function App() {
    const [activeKey, setActiveKey] = useState("");

    function handlePlay(src) {
        setActiveKey(src);
    }
    // Set up the HTML structure
    return (
        <div className="main">
            <header className="p-5 bg-warning"></header>
        <div className="App">
            <div id="drum-machine">
                <div id="display">{activeKey}</div>
                <div className="drum-pads">
                    {DrumPads.map((drumPad) => (
                        <DrumPad key={drumPad.src} drumPad={drumPad} onPlay={handlePlay} />
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}