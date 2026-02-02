// // // // Basic Setup
// // // const scene = new THREE.Scene();
// // // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // // const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// // // renderer.setSize(window.innerWidth, window.innerHeight);
// // // document.getElementById('canvas-container').appendChild(renderer.domElement);

// // // const particleCount = 5000;
// // // const geometry = new THREE.BufferGeometry();
// // // const positions = new Float32Array(particleCount * 3);
// // // const colors = new Float32Array(particleCount * 3);

// // // // Initial Random Cloud
// // // for (let i = 0; i < particleCount * 3; i++) {
// // //     positions[i] = (Math.random() - 0.5) * 10;
// // // }

// // // geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
// // // const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: false, color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending });
// // // const points = new THREE.Points(geometry, material);
// // // scene.add(points);

// // // camera.position.z = 5;

// // // // --- Core Math Templates ---
// // // const templates = {
// // //     sphere: () => {
// // //         const phi = Math.random() * Math.PI * 2;
// // //         const costheta = Math.random() * 2 - 1;
// // //         const u = Math.random();
// // //         const theta = Math.acos(costheta);
// // //         const r = 3 * Math.pow(u, 1 / 3);
// // //         return { x: r * Math.sin(theta) * Math.cos(phi), y: r * Math.sin(theta) * Math.sin(phi), z: r * Math.cos(theta) };
// // //     },
// // //     heart: () => {
// // //         const t = Math.random() * Math.PI * 2;
// // //         const x = 16 * Math.pow(Math.sin(t), 3);
// // //         const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
// // //         return { x: x / 10, y: y / 10, z: (Math.random() - 0.5) * 2 };
// // //     },
// // //     saturn: () => {
// // //         if (Math.random() > 0.4) { // The Planet
// // //             const p = templates.sphere();
// // //             return { x: p.x * 0.5, y: p.y * 0.5, z: p.z * 0.5 };
// // //         } else { // The Rings
// // //             const angle = Math.random() * Math.PI * 2;
// // //             const radius = 2.5 + Math.random() * 1.5;
// // //             return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius * 0.2, z: Math.sin(angle) * radius };
// // //         }
// // //     },
// // //     flower: () => {
// // //         const u = Math.random() * Math.PI * 2;
// // //         const v = Math.random() * Math.PI;
// // //         const petals = 5;
// // //         const r = 2 + Math.sin(petals * u) * 0.5;
// // //         return { x: r * Math.sin(v) * Math.cos(u), y: r * Math.sin(v) * Math.sin(u), z: r * Math.cos(v) };
// // //     }
// // // };

// // // // --- Particle Management ---
// // // let targetPositions = new Float32Array(particleCount * 3);

// // // function setTarget(shape) {
// // //     for (let i = 0; i < particleCount; i++) {
// // //         const p = templates[shape]();
// // //         targetPositions[i * 3] = p.x;
// // //         targetPositions[i * 3 + 1] = p.y;
// // //         targetPositions[i * 3 + 2] = p.z;
// // //     }
// // // }

// // // // Initial Target
// // // setTarget('sphere');

// // // // Cycle Shapes
// // // setInterval(() => {
// // //     const shapes = Object.keys(templates);
// // //     const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
// // //     setTarget(randomShape);
// // // }, 3000);

// // // // --- In your Animate Loop ---
// // // function animate() {
// // //     requestAnimationFrame(animate);

// // //     const currentPositions = geometry.attributes.position.array;
// // //     for (let i = 0; i < currentPositions.length; i++) {
// // //         // Smoothly move current position toward target position
// // //         currentPositions[i] += (targetPositions[i] - currentPositions[i]) * 0.05;
// // //     }
// // //     geometry.attributes.position.needsUpdate = true;

// // //     points.rotation.y += 0.001;
// // //     renderer.render(scene, camera);
// // // }
// // // animate();

// // // // Handle Window Resize
// // // window.addEventListener('resize', () => {
// // //     camera.aspect = window.innerWidth / window.innerHeight;
// // //     camera.updateProjectionMatrix();
// // //     renderer.setSize(window.innerWidth, window.innerHeight);
// // // });

// // // Basic Setup
// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.getElementById('canvas-container').appendChild(renderer.domElement);

// // const particleCount = 6000; // Total particles
// // const geometry = new THREE.BufferGeometry();
// // const positions = new Float32Array(particleCount * 3);
// // const colors = new Float32Array(particleCount * 3);

// // // Assign Colors and Initial Positions
// // for (let i = 0; i < particleCount; i++) {
// //     // Random positions
// //     positions[i * 3] = (Math.random() - 0.5) * 10;
// //     positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
// //     positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

// //     // Color logic
// //     const color = new THREE.Color();
// //     if (i < 3000) color.setHex(0xffaa00);      // Sun: Orange/Yellow
// //     else if (i < 5500) color.setHex(0x2266ff); // Earth: Blue
// //     else color.setHex(0xaaaaaa);               // Moon: Grey

// //     colors[i * 3] = color.r;
// //     colors[i * 3 + 1] = color.g;
// //     colors[i * 3 + 2] = color.b;
// // }

// // geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
// // geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// // // IMPORTANT: Set vertexColors to true
// // const material = new THREE.PointsMaterial({ 
// //     size: 0.04, 
// //     vertexColors: true, 
// //     transparent: true, 
// //     blending: THREE.AdditiveBlending 
// // });
// // const points = new THREE.Points(geometry, material);
// // scene.add(points);

// // camera.position.z = 12;

// // let time = 0;

// // function animate() {
// //     requestAnimationFrame(animate);
// //     time += 0.01;

// //     const pos = geometry.attributes.position.array;

// //     // Orbital Parameters
// //     const earthOrbitRadius = 7;
// //     const moonOrbitRadius = 1.5;

// //     // Earth's center position
// //     const earthX = Math.cos(time * 0.5) * earthOrbitRadius;
// //     const earthZ = Math.sin(time * 0.5) * earthOrbitRadius;

// //     // Moon's center position (relative to Earth)
// //     const moonX = earthX + Math.cos(time * 2) * moonOrbitRadius;
// //     const moonZ = earthZ + Math.sin(time * 2) * moonOrbitRadius;

// //     for (let i = 0; i < particleCount; i++) {
// //         let tx, ty, tz;

// //         if (i < 3000) { // SUN: Large jittery sphere at center
// //             const phi = (i * 0.1) % (Math.PI * 2);
// //             const theta = (i * 0.5) % Math.PI;
// //             const r = 2 + Math.random() * 0.2; // Sun pulse
// //             tx = r * Math.sin(theta) * Math.cos(phi);
// //             ty = r * Math.sin(theta) * Math.sin(phi);
// //             tz = r * Math.cos(theta);
// //         } 
// //         else if (i < 5500) { // EARTH: Smaller sphere moving in orbit
// //             const phi = (i * 0.2) % (Math.PI * 2);
// //             const theta = (i * 0.8) % Math.PI;
// //             const r = 0.8; 
// //             tx = earthX + r * Math.sin(theta) * Math.cos(phi);
// //             ty = r * Math.sin(theta) * Math.sin(phi);
// //             tz = earthZ + r * Math.cos(theta);
// //         } 
// //         else { // MOON: Tiny sphere orbiting Earth
// //             const phi = (i * 0.5) % (Math.PI * 2);
// //             const theta = (i * 1.2) % Math.PI;
// //             const r = 0.3;
// //             tx = moonX + r * Math.sin(theta) * Math.cos(phi);
// //             ty = r * Math.sin(theta) * Math.sin(phi);
// //             tz = moonZ + r * Math.cos(theta);
// //         }

// //         // Smoothly interpolate to new orbital position
// //         pos[i * 3] += (tx - pos[i * 3]) * 0.1;
// //         pos[i * 3 + 1] += (ty - pos[i * 3 + 1]) * 0.1;
// //         pos[i * 3 + 2] += (tz - pos[i * 3 + 2]) * 0.1;
// //     }

// //     geometry.attributes.position.needsUpdate = true;
// //     renderer.render(scene, camera);
// // }

// // animate();

// // window.addEventListener('resize', () => {
// //     camera.aspect = window.innerWidth / window.innerHeight;
// //     camera.updateProjectionMatrix();
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// // });
// // Basic Setup
// const scene = new THREE.Scene();
// // Move camera slightly higher and further back for a better 3D perspective
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('canvas-container').appendChild(renderer.domElement);

// const particleCount = 8000; 
// const geometry = new THREE.BufferGeometry();
// const positions = new Float32Array(particleCount * 3);
// const colors = new Float32Array(particleCount * 3);

// // Assign Colors 
// for (let i = 0; i < particleCount; i++) {
//     const color = new THREE.Color();
//     if (i < 4000) color.setHex(0xff8800);      // SUN: Glowing Orange
//     else if (i < 7000) color.setHex(0x00aaff); // EARTH: Bright Blue
//     else color.setHex(0xeeeeee);               // MOON: White/Grey

//     colors[i * 3] = color.r;
//     colors[i * 3 + 1] = color.g;
//     colors[i * 3 + 2] = color.b;
// }

// geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
// geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// const material = new THREE.PointsMaterial({ 
//     size: 0.03, 
//     vertexColors: true, 
//     transparent: true, 
//     blending: THREE.AdditiveBlending 
// });
// const points = new THREE.Points(geometry, material);
// scene.add(points);

// camera.position.set(0, 5, 15); // Tilted view
// camera.lookAt(0, 0, 0);

// let time = 0;

// // Helper to get a point on a sphere surface for a body
// function getSpherePoint(index, radius) {
//     // Fibonacci Sphere algorithm for even distribution
//     const phi = Math.acos(1 - 2 * (index % 500) / 500);
//     const theta = Math.PI * (1 + Math.sqrt(5)) * (index % 500);

//     return {
//         x: radius * Math.cos(theta) * Math.sin(phi),
//         y: radius * Math.sin(theta) * Math.sin(phi),
//         z: radius * Math.cos(phi)
//     };
// }

// function animate() {
//     requestAnimationFrame(animate);
//     time += 0.005; // Speed of rotation

//     const pos = geometry.attributes.position.array;

//     // 3D Orbital Paths
//     const earthOrbitX = Math.cos(time) * 8;
//     const earthOrbitZ = Math.sin(time) * 8;
//     const earthOrbitY = Math.sin(time * 0.5) * 2; // Adds vertical 3D movement

//     const moonOrbitX = earthOrbitX + Math.cos(time * 3) * 2;
//     const moonOrbitZ = earthOrbitZ + Math.sin(time * 3) * 2;
//     const moonOrbitY = earthOrbitY + Math.cos(time * 3) * 0.5;

//     for (let i = 0; i < particleCount; i++) {
//         let tx, ty, tz;

//         if (i < 4000) { // SUN (Center)
//             const p = getSpherePoint(i, 2.5);
//             tx = p.x + (Math.random() - 0.5) * 0.1; // Slight solar flare jitter
//             ty = p.y + (Math.random() - 0.5) * 0.1;
//             tz = p.z + (Math.random() - 0.5) * 0.1;
//         } 
//         else if (i < 7000) { // EARTH (Orbiting)
//             const p = getSpherePoint(i, 0.8);
//             tx = earthOrbitX + p.x;
//             ty = earthOrbitY + p.y;
//             tz = earthOrbitZ + p.z;
//         } 
//         else { // MOON (Orbiting Earth)
//             const p = getSpherePoint(i, 0.3);
//             tx = moonOrbitX + p.x;
//             ty = moonOrbitY + p.y;
//             tz = moonOrbitZ + p.z;
//         }

//         // Smooth Lerp for fluid movement
//         pos[i * 3] += (tx - pos[i * 3]) * 0.1;
//         pos[i * 3 + 1] += (ty - pos[i * 3 + 1]) * 0.1;
//         pos[i * 3 + 2] += (tz - pos[i * 3 + 2]) * 0.1;
//     }

//     geometry.attributes.position.needsUpdate = true;

//     // Slowly rotate the whole scene for more depth
//     points.rotation.y += 0.001;

//     renderer.render(scene, camera);
// }

// animate();

// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });


// Basic Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// UI Elements for Hover
const label = document.createElement('div');
label.style.position = 'absolute';
label.style.color = 'white';
label.style.padding = '5px 10px';
label.style.background = 'rgba(0,0,0,0.5)';
label.style.borderRadius = '5px';
label.style.pointerEvents = 'none';
label.style.display = 'none';
label.style.fontFamily = 'Arial';
label.style.zIndex = '10';
document.body.appendChild(label);

// Variables
const particleCount = 9000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);
let mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();

// 1. Create Starfield (Background)
const starGeometry = new THREE.BufferGeometry();
const starPositions = new Float32Array(2000 * 3);
for (let i = 0; i < 2000 * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 100;
}
starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Assign Colors for Sun (0-4000), Earth (4000-7500), Moon (7500-9000)
for (let i = 0; i < particleCount; i++) {
    const color = new THREE.Color();
    if (i < 4000) color.setHex(0xffaa00);
    else if (i < 7500) color.setHex(0x00aaff);
    else color.setHex(0xcccccc);
    colors[i * 3] = color.r; colors[i * 3 + 1] = color.g; colors[i * 3 + 2] = color.b;
}
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, blending: THREE.AdditiveBlending });
const points = new THREE.Points(geometry, material);
scene.add(points);

// Velocity Line Setup
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
const lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]);
const velocityLine = new THREE.Line(lineGeometry, lineMaterial);
scene.add(velocityLine);

camera.position.z = 15;

// Helper Math
function getSpherePoint(index, radius, total) {
    const phi = Math.acos(1 - 2 * (index % total) / total);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (index % total);
    return { x: radius * Math.cos(theta) * Math.sin(phi), y: radius * Math.sin(theta) * Math.sin(phi), z: radius * Math.cos(phi) };
}

window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    label.style.left = e.clientX + 20 + 'px';
    label.style.top = e.clientY + 'px';
});

let time = 0;
function animate() {
    requestAnimationFrame(animate);
    time += 0.005;

    const pos = geometry.attributes.position.array;

    // XY Plane Orbit (Revolver in X-direction as requested)
    const eX = Math.cos(time) * 8;
    const eY = Math.sin(time) * 8; // Orbit in Y now instead of Z
    const eZ = Math.sin(time * 0.5) * 2; // Slight depth wobble

    const mX = eX + Math.cos(time * 3) * 2;
    const mY = eY + Math.sin(time * 3) * 2;
    const mZ = eZ + Math.cos(time * 3) * 0.5;

    // Velocity Vector Calculation (Tangent to the circle)
    // Derivative of position (cos(t), sin(t)) -> (-sin(t), cos(t))
    const vX = -Math.sin(time);
    const vY = Math.cos(time);
    const speedScale = 4.0; // Length of the line

    // Update Velocity Line
    const linePositions = velocityLine.geometry.attributes.position.array;
    // Start point (Earth Center)
    linePositions[0] = eX; linePositions[1] = eY; linePositions[2] = eZ;
    // End point (Earth Center + Velocity Vector)
    linePositions[3] = eX + vX * speedScale;
    linePositions[4] = eY + vY * speedScale;
    linePositions[5] = eZ;
    velocityLine.geometry.attributes.position.needsUpdate = true;


    // Hover Detection
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(points);
    let hoveredBody = null;

    if (intersects.length > 0) {
        const idx = intersects[0].index;
        if (idx < 4000) hoveredBody = "Sun";
        else if (idx < 7500) hoveredBody = "Earth";
        else hoveredBody = "Moon";
        label.style.display = 'block';
        label.innerText = hoveredBody;
    } else {
        label.style.display = 'none';
    }

    for (let i = 0; i < particleCount; i++) {
        let tx, ty, tz;
        let isHovered = false;

        if (i < 4000) {
            // SUN SIZE: Change 3.5 to desired radius
            const p = getSpherePoint(i, 3.5, 4000); tx = p.x; ty = p.y; tz = p.z;
            if (hoveredBody === "Sun") isHovered = true;
        } else if (i < 7500) {
            // EARTH SIZE: Change 1.5 to desired radius
            const p = getSpherePoint(i, 1.5, 3500); tx = eX + p.x; ty = eY + p.y; tz = eZ + p.z;
            if (hoveredBody === "Earth") isHovered = true;
        } else {
            // MOON SIZE: Change 0.6 to desired radius
            const p = getSpherePoint(i, 0.6, 1500); tx = mX + p.x; ty = mY + p.y; tz = mZ + p.z;
        }

        // Spread effect on hover
        const spread = isHovered ? 1.5 : 1.0;
        pos[i * 3] += (tx * spread - pos[i * 3]) * 0.1;
        pos[i * 3 + 1] += (ty * spread - pos[i * 3 + 1]) * 0.1;
        pos[i * 3 + 2] += (tz * spread - pos[i * 3 + 2]) * 0.1;
    }

    geometry.attributes.position.needsUpdate = true;
    points.rotation.y += (mouse.x * 0.5 - points.rotation.y) * 0.05;
    points.rotation.x += (-mouse.y * 0.5 - points.rotation.x) * 0.05;
    renderer.render(scene, camera);
}
animate();