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

const mercuryTexture = new THREE.TextureLoader().load('mercury.jpg')
export const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture
  })
)

const venusTexture = new THREE.TextureLoader().load('venus_atmosphere.jpg')
export const venus = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: venusTexture
  })
)

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

const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg')
export const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture
  })
)

const saturnTexture = new THREE.TextureLoader().load('saturn.jpg')
export const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(9, 32, 32),
  new THREE.MeshStandardMaterial({
    map: saturnTexture
  })
)

const uranusTexture = new THREE.TextureLoader().load('uranus.jpg')
export const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture
  })
)

const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg')
export const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(6, 32, 32),
  new THREE.MeshStandardMaterial({
    map: neptuneTexture
  })
)