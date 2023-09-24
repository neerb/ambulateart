import React, { Component } from 'react';
import p5 from 'p5';

class WildFaces extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.face1 = {};
        this.face2 = {};
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(600, 400);
            p.frameRate(10); // Adjust the frame rate as needed

            // Initialize facial features for face 1
            this.face1.x = p.random(100, 300);
            this.face1.y = p.random(100, 300);
            this.face1.size = p.random(50, 150);
            this.face1.eyeOffset = this.face1.size / 4;
            this.face1.eyeSize = this.face1.size / 6;
            this.face1.mouthY = p.random(this.face1.y + this.face1.size / 3, this.face1.y + this.face1.size / 2);

            // Initialize facial features for face 2
            this.face2.x = p.random(300, 500);
            this.face2.y = p.random(100, 300);
            this.face2.size = p.random(50, 150);
            this.face2.eyeOffset = this.face2.size / 4;
            this.face2.eyeSize = this.face2.size / 6;
            this.face2.mouthY = p.random(this.face2.y + this.face2.size / 3, this.face2.y + this.face2.size / 2);
        };

        p.draw = () => {
            p.background(220);

            // Draw the first face with random features
            this.drawFace(p, this.face1.x, this.face1.y, this.face1.size, true);

            // Draw the second face with random features
            this.drawFace(p, this.face2.x, this.face2.y, this.face2.size, true);
        };

        // Helper function to draw a wild face
        this.drawFace = (p, x, y, size, laughing) => {
            // Draw the head
            p.fill(p.random(255), p.random(255), p.random(255));
            p.stroke(0);
            p.ellipse(x, y, size, size);

            // Draw the eyes
            p.fill(p.random(255), p.random(255), p.random(255));
            p.ellipse(x - size / 4, y - size / 4, size / 6, size / 6);
            p.ellipse(x + size / 4, y - size / 4, size / 6, size / 6);

            // Draw the mouth
            p.noFill();
            p.stroke(p.random(255), p.random(255), p.random(255));
            const mouthY = laughing ? y + size / 6 : y + size / 3;
            const mouthWidth = p.random(size / 3, size / 2);
            const mouthHeight = p.random(size / 6, size / 4);
            p.arc(x, mouthY, mouthWidth, mouthHeight, 0, p.PI);
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default WildFaces;
