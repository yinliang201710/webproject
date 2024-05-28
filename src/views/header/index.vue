<template>
  <div class="draw"></div>
</template>
<script setup>
import * as THREE from 'three'
import { onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// 创建场景
const scene = new THREE.Scene()
// 创建模型(构造体)
const geometry = new THREE.BoxGeometry(100, 100, 100)
// 定义材质
const material = new THREE.MeshBasicMaterial({
  color: 0x1890ff // 红色 (也可以使用CSS的颜色字符串)
})
// 然后将模型和材质注入构造体
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 10, 0)
// 把构造好的模型添加到场景中
scene.add(mesh)

// 定义相机输出画布大小
const width = 800
const height = 500
// 创建透视投影相机
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000) // 视角角度、宽高比、near,far
// 设置相机位置
camera.position.set(200, 200, 200)
// 相机镜头对准模型位置
camera.lookAt(0, 0, 0)
// 创建webGl渲染器
const renderer = new THREE.WebGLRenderer()
// 设置画布尺寸
renderer.setSize(width, height) //canvas画布高度
// renderer.render(scene, camera)
function animate() {
  requestAnimationFrame(animate)
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01
  renderer.render(scene, camera)
}
onMounted(() => {
  animate()
  document.querySelector('.draw').appendChild(renderer.domElement)
})
</script>
<style lang="scss" scoped>
.draw {
  width: 1000px;
  height: 800px;
}
</style>
