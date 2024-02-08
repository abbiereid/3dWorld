import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function main () {
        const canvas = document.querySelector('#c')

        const fov = 50
        const aspect = 1
        const near = canvas.clientWidth / canvas.clientHeight
        const far = 2000

        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

        const renderer = new THREE.WebGLRenderer({canvas})

        renderer.setSize(canvas.clientWidth, canvas.clientHeight)

        const scene = new THREE.Scene()

        const TextureLoader = new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg',
        () => {
            scene.background = texture
        })

    function render() {
        renderer.render(scene,camera)
        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)

}

main();