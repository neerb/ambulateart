import React, { Component } from 'react';
import p5 from 'p5';

class TimesTables extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        let points = 200; // Amount of points around the circle's perimeter: increase for a finer, more detailed image, lower for the opposite
        let angleInc;
        let angle = 0;
        let radius;
        let times = 1;
        let width = 400;
        let height = 400;

        p.setup = () => {
            p.createCanvas(width, height);
            angleInc = p.floor(360 / points);
            radius = width / 2.5;
            times = 0; // 7919;///sqrt(2);
            p.frameRate(24);
        }

        p.draw = () => {
            p.background(51);
            p.text(times, 30, 30);
            p.translate(width / 2, height / 2); // Translate to center times table
            p.noFill();
            p.ellipse(0, 0, radius * 2, radius * 2); // Draws circle around times table

            let index = 0;

            // Continues to loop until we have completely drawn a times table
            while (angle <= 360) {
                p.stroke(255);
                p.strokeWeight(0.5);

                // Conversion from polar to Cartesian coordinates
                let x = p.cos(p.radians(angle)) * radius;
                let y = p.sin(p.radians(angle)) * radius;

                p.point(x, y);

                let num = p.floor(index * times);

                // Conversion from polar to Cartesian coordinates
                let nextX = p.cos(p.radians(angleInc * num)) * radius;
                let nextY = p.sin(p.radians(angleInc * num)) * radius;

                // Draws a line from the current coordinate to the newly calculated coordinate (polar)
                p.line(x, y, nextX, nextY);

                angle += p.floor(angleInc);
                index++;
            }

            angle = 0;

            times += 0.0125;
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

export default TimesTables;
