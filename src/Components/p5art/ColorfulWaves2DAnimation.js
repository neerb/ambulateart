import React, { Component } from 'react';
import p5 from 'p5';

class ColorfulWave2DAnimation extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.angle = 0;
    }

    Sketch = (p) => {
        let wave = [];

        p.setup = () => {
            p.createCanvas(400, 200);
            p.noFill();
            for (let x = 0; x <= p.width + 100; x += 10) {
                let y = p.random(100, 200) * p.sin(p.radians(x));
                wave.push(y);
            }
        }

        p.draw = () => {
            p.background(0);

            for (let i = 0; i < wave.length - 1; i++) {
                p.stroke(i % 255, 255 - (i % 255), (i * 2) % 255);
                p.line(i * 10, p.height / 2 + wave[i], (i + 1) * 10, p.height / 2 + wave[i + 1]);
            }

            this.angle += 1;
            for (let x = 0; x <= p.width + 100; x += 10) {
                let y = p.noise(p.radians(x + this.angle)) * 100;
                wave[x / 10] = y;
            }
        }
    }

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return (
            <div ref={this.myRef}>

            </div>
        );
    }
}

export default ColorfulWave2DAnimation;
