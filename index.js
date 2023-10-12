import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { earth, mars } from './planets'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
camera.position.setX(-3)

renderer.render(scene, camera)

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 })
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement)

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material)
  
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
  
  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpg')
scene.background = spaceTexture

const portraitTexture = new THREE.TextureLoader().load('me.png')

const portrait = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: portraitTexture })
)

scene.add(portrait)

portrait.position.setZ(-5)
portrait.position.setX(2)

function addPlanets() {
  scene.add(earth)
  earth.position.setZ(30)
  earth.position.setX(-10)
  
  scene.add(mars)
  mars.position.setZ(40)
  mars.position.setX(-15)

}


function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  // moon.rotation.x += 0.05
  // moon.rotation.y += 0.075
  // moon.rotation.z += 0.05

  portrait.rotation.y += 0.01
  portrait.rotation.z += 0.01

  // earth.rotation.x += 0.01
  earth.rotation.y += 0.04
  earth.rotation.z += 0.01

  mars.rotation.y += 0.04
  mars.rotation.z += 0.01

  camera.position.z = t * -0.01
  camera.position.x = t * -0.0002
  camera.rotation.y = t * -0.0002
}


function animate() {
  requestAnimationFrame(animate)
  torus.rotation.x += 0.01
  torus.rotation.y += 0.005
  torus.rotation.z += 0.01
  // controls.update()
  renderer.render(scene, camera)
}

addPlanets()
document.body.onscroll = moveCamera
moveCamera()
animate()