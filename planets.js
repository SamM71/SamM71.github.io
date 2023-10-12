import * as THREE from 'three'

const moonTexture = new THREE.TextureLoader().load('moon.jpg')
const normalTexture = new THREE.TextureLoader().load('normal.jpg')

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture // not working
  })
)

// scene.add(moon)

// moon.position.setZ(27)
// moon.position.setX(-7)
// moon.position.setY(2)

const earthTexture = new THREE.TextureLoader().load('earth.jpg')
export const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture
  })
)

const marsTexture = new THREE.TextureLoader().load('mars.jpg')
export const mars = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture
  })
)