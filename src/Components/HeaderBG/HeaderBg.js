import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import "./headerbg.css";
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

import { useEffect, useRef } from 'react';

// const HeaderBg = () => {
//     const containerRef = useRef();

//     useEffect(() => {
//         // Scene
//         const scene = new THREE.Scene();
//         scene.background = new THREE.Color(0xFFFFFF);

//         // Camera
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         camera.position.z = 100;

//         // Renderer with AsciiEffect
//         const renderer = new THREE.WebGLRenderer();
//         const asciiEffect = new AsciiEffect(renderer);
//         asciiEffect.setSize(window.innerWidth, window.innerHeight);
//         containerRef.current.appendChild(asciiEffect.domElement);

//         // ASCII Material
//         const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

//         // ASCII Geometry
//         const geometry = new THREE.PlaneGeometry(10, 10, 32, 32);

//         // ASCII Landscape
//         const landscape = new THREE.Mesh(geometry, material);
//         scene.add(landscape);

//         // Animation
//         const animate = () => {
//             requestAnimationFrame(animate);

//             // Update logic here

//             asciiEffect.render(scene, camera);
//         };

//         animate();

//         // Handle window resize
//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             asciiEffect.setSize(window.innerWidth, window.innerHeight);
//         };

//         window.addEventListener('resize', handleResize);

//         // Clean up event listener on component unmount
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     // return <div ref={containerRef} />;

//     return (
//         <div ref={containerRef} className='p5-wrap'>

//         </div>
//     );
// }


function HeaderBg() {
    const refContainer = useRef(null);
    useEffect(() => {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Renderer with AsciiEffect
        const asciiEffect = new AsciiEffect(renderer);
        asciiEffect.setSize(window.innerWidth, window.innerHeight);
        refContainer.current.appendChild(asciiEffect.domElement);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current && refContainer.current.appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;


        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return (
        <div ref={refContainer} className='p5-wrap'>

        </div>
    );
}

// class HeaderBg extends Component {
//     constructor(props) {
//         super(props);
//         this.myRef = React.createRef();
//         this.scene = new THREE.Scene({ alpha: true });
//         this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
//         this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//         this.controls = new OrbitControls(this.camera, this.renderer.domElement);
//         this.angle = 0;
//         this.w = 24;
//         this.ma = Math.atan(Math.cos(Math.PI / 4));
//         this.maxD = Math.hypot(200, 200); // Use Math.hypot for distance
//         this.r = 0;
//     }

//     componentDidMount() {
//         if (typeof window !== 'undefined') {
//             this.camera.position.z = 1000; // Adjust the camera position
//             this.renderer.setSize(window.innerWidth, window.innerHeight);
//             this.myRef.current.appendChild(this.renderer.domElement);

//             this.createMeshes();
//             this.animate();
//         }
//     }

//     createMeshes() {
//         for (let z = 0; z < window.innerHeight; z += this.w) {
//             for (let x = 0; x < window.innerWidth; x += this.w) {
//                 let geometry = new THREE.BoxGeometry(this.w - 2, 1, this.w - 2);
//                 let material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
//                 let cube = new THREE.Mesh(geometry, material);
//                 cube.position.set(x - window.innerWidth / 2, 0, z - window.innerHeight / 2);
//                 this.scene.add(cube);
//             }
//         }
//     }

//     animate = () => {
//         requestAnimationFrame(this.animate);

//         this.scene.rotation.x = -Math.PI / 7;
//         this.scene.rotation.y = -this.r / 2;

//         this.scene.children.forEach((cube) => {
//             let d = cube.position.distanceTo(new THREE.Vector3(0, 0, 0));
//             let offset = THREE.MathUtils.mapLinear(d, 0, this.maxD, -Math.PI, Math.PI);
//             let a = this.angle + offset;
//             let h = Math.floor(THREE.MathUtils.mapLinear(Math.sin(a), -1, 1, 100, 300));
//             cube.scale.y = h;
//         });

//         this.angle -= 0.07;
//         this.r += 0.01;

//         this.renderer.render(this.scene, this.camera);
//     };

//     render() {
//         if (typeof window !== 'undefined') {
//             return (
//                 <div ref={this.myRef} className='p5-wrap'>

//                 </div>
//             );
//         } else {
//             return <div></div>;
//         }
//     }
// }

// import React, { Component } from 'react';
// import p5 from 'p5';
// import "./headerbg.css"

// class HeaderBg extends Component {
//     constructor(props) {
//         super(props);
//         this.myRef = React.createRef();
//     }

//     Sketch = (p) => {
//         let angle = 0;
//         let w = 24;
//         let ma;
//         let maxD;
//         let r = 0;

//         p.setup = () => {
//             p.createCanvas(350, 350, p.WEBGL);
//             ma = p.atan(p.cos(p.QUARTER_PI));
//             maxD = p.dist(0, 0, 200, 200);
//             p.rotateY(ma);
//         }

//         p.draw = () => {
//             p.clear();
//             // p.background(100, 100, 250);
//             p.ortho(-400, 400, -400, 400, 0, 1000);
//             p.rotateX(-p.QUARTER_PI);
//             p.rotateY(-r / 2);

//             for (let z = 0; z < p.height; z += w) {
//                 for (let x = 0; x < p.width; x += w) {
//                     p.push();
//                     let d = p.dist(x, z, p.width / 2, p.height / 2);
//                     let offset = p.map(d, 0, maxD, -p.PI, p.PI);
//                     let a = angle + offset;
//                     let h = p.floor(p.map(p.sin(a), -1, 1, 100, 300));
//                     p.translate(x - p.width / 2, 0, z - p.height / 2);
//                     p.normalMaterial();
//                     p.box(w - 2, h, w - 2);
//                     p.pop();
//                 }
//             }

//             angle -= 0.07;
//             r += 0.01;
//         }

//     }

//     componentDidMount() {
//         if (typeof window !== 'undefined') {
//             this.myp5 = new p5(this.Sketch, this.myRef.current);
//         }
//     }

//     render() {
//         if (typeof window !== 'undefined') {
//             return (
//                 <div ref={this.myRef} className='p5-wrap'>

//                 </div>
//             );
//         }
//         else {
//             return <div></div>;
//         }
//     }
// }

export default HeaderBg;
