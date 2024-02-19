window.addEventListener('load', main);

function main() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();


    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }


    document.addEventListener('mousemove', onMouseMove, false);

    function animate() {
        requestAnimationFrame(animate);


        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(scene.children);

        for (let i = 0; i < intersects.length; i++) {
            intersects[i].object.rotation.x += 0.01;
            intersects[i].object.rotation.y += 0.01;
        }

        renderer.render(scene, camera);
    }

    animate();
        
    }