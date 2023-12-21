import * as React from "react";
import './musicbumper.css';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { MdReplay } from "react-icons/md";
import { MdReplayCircleFilled } from "react-icons/md";

const AMPLITUDE_MAX = 255;

class Visualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            frequencyAmplitudes: Array.from(props.frequencyCount),
            context: null,
            isPlaying: false
        };

        this.pausePlay = this.pausePlay.bind(this);
        this.replay = this.replay.bind(this);
    }



    // Ensure this.audio has been set by ref callback
    componentDidMount() {
        // Wire up our audio
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.source = this.audioContext.createMediaElementSource(this.audioRef);
        this.volumeControl = this.audioContext.createGain();
        this.source.connect(this.audioContext.destination);
        this.source.connect(this.volumeControl);

        // Create our analyZer 🇺🇸
        this.analyzer = this.audioContext.createAnalyser();
        this.analyzer.fftSize = this.props.frequencyCount * 2;
        this.volumeControl.connect(this.analyzer);
        this.analyzer.connect(this.audioContext.destination);

        // Analyzer will know user's set volume
        this.volumeControl.gain.value = this.audioRef.volume;

        // Kick off our animation
        this.animate();
        console.log(this.audioContext);
        this.setState({
            context: this.audioContext
        });
    }

    // Constantly get frequency data from audio so that amplitude can be updated
    animate() {
        let frequencyData = new Uint8Array(this.props.frequencyCount);
        this.analyzer.getByteFrequencyData(frequencyData);

        // Without the "bind(this)" silliness, we'll lose the component's context
        requestAnimationFrame(this.animate.bind(this)); // lol

        // Trigger React render with updated frequencyData
        this.setState({
            frequencyAmplitudes: Array.from(frequencyData).map(amplitude => amplitude * 100 / AMPLITUDE_MAX)
        });
    }

    pausePlay() {
        console.log(this.state.context);
        let audioSource = document.getElementById("drbumper");

        if (this.state.context.state === 'running') {
            this.state.context.suspend();
            this.setState({
                isPlaying: false
            })

            audioSource.pause();
        }
        else if (this.state.context.state === 'suspended') {
            this.state.context.resume();
            this.setState({
                isPlaying: true
            })

            audioSource.play();
        }
    }

    replay() {
        let audioSource = document.getElementById("drbumper");
        audioSource.currentTime = 0;
    }

    convertFrequencyDataToBgColor() {

    }

    render() {
        let delay = 0;

        const bars = this.state.frequencyAmplitudes.map(val => {
            delay += 15;
            return <Bar amplitude={val} key={delay} aniDelay={delay} aniDur={((8 * 1000))} />
        }).reverse().concat(this.state.frequencyAmplitudes.map(val => {
            delay += 15;
            return <Bar amplitude={val} key={delay} aniDelay={delay} aniDur={((8 * 1000))} />
        }));

        const invertedBars = this.state.frequencyAmplitudes.map(val => {
            return <InvertedBar amplitude={val} key={val} />
        });

        return (
            <div id="visualizer">
                {/* <div id="controls"> */}
                {/* add 'controls' prop with no val to see controls */}
                <audio id='drbumper' loop={true} ref={element => this.audioRef = element} src={this.props.audioSource} autoPlay={false} crossOrigin="anonymous">
                </audio>
                {/* </div> */}

                {
                    this.state.isPlaying
                        ?
                        <div className="bars-wrapper">
                            <div id="bars" className="flip">
                                {bars}
                            </div>
                        </div>
                        :
                        <div className="not-playing">
                            <p>
                                - press play -
                            </p>
                        </div>
                }

                {/* 
                <div className="bars-wrapper">
                    <div id="bars" className="flip">
                        {bars}
                    </div>
                </div> */}

                <div id="controls">
                    <hr></hr>
                    <button onClick={this.pausePlay}>
                        {(
                            this.state.isPlaying ?
                                <FaPause />
                                :
                                <FaPlay />
                        )}
                    </button>

                    <button onClick={this.replay}>
                        <MdReplayCircleFilled />
                    </button>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

function Bar({ amplitude, aniDelay, aniDur }) {
    return <div className="bar" style={{ height: amplitude + '%', animationDelay: aniDelay + "ms", animationDuration: aniDur + "ms" }}></div>
}

function InvertedBar({ amplitude }) {
    return <div className="inverted-bar" style={{ height: ((amplitude <= 0) ? (100 - amplitude) : (100 - amplitude - 7)) + '%' }} ></ div >
}
function MusicBumper(props) {
    return (
        <div className="bumper-wrap">
            <Visualizer frequencyCount={32} audioSource={props.audioSource} />
        </div>
    );
}

export default MusicBumper;