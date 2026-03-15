<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animationId = null
let particles = []
let mouse = { x: -1000, y: -1000 }

function init() {
  const c = canvas.value
  if (!c) return
  const ctx = c.getContext('2d')
  const dpr = window.devicePixelRatio || 1

  function resize() {
    c.width = window.innerWidth * dpr
    c.height = window.innerHeight * dpr
    c.style.width = window.innerWidth + 'px'
    c.style.height = window.innerHeight + 'px'
    ctx.scale(dpr, dpr)
  }

  resize()
  window.addEventListener('resize', resize)

  const w = () => c.width / (window.devicePixelRatio || 1)
  const h = () => c.height / (window.devicePixelRatio || 1)

  const count = Math.min(80, Math.floor(window.innerWidth / 15))

  const colors = [
    'rgba(232, 112, 64, 0.4)',
    'rgba(212, 165, 116, 0.35)',
    'rgba(240, 144, 96, 0.3)',
    'rgba(255, 180, 120, 0.25)',
    'rgba(200, 100, 60, 0.2)',
  ]

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w(),
      y: Math.random() * h(),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    })
  }

  function draw() {
    ctx.clearRect(0, 0, w(), h())

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      p.pulse += p.pulseSpeed
      const scale = 1 + Math.sin(p.pulse) * 0.3

      // mouse interaction
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 150) {
        p.vx -= dx * 0.0003
        p.vy -= dy * 0.0003
      }

      p.x += p.vx
      p.y += p.vy

      // damping
      p.vx *= 0.999
      p.vy *= 0.999

      // wrap
      if (p.x < -10) p.x = w() + 10
      if (p.x > w() + 10) p.x = -10
      if (p.y < -10) p.y = h() + 10
      if (p.y > h() + 10) p.y = -10

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r * scale, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.fill()

      // connections
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j]
        const ddx = p.x - q.x
        const ddy = p.y - q.y
        const d = Math.sqrt(ddx * ddx + ddy * ddy)
        if (d < 120) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.strokeStyle = `rgba(232, 112, 64, ${0.08 * (1 - d / 120)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    animationId = requestAnimationFrame(draw)
  }

  draw()

  function onMouseMove(e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  function onMouseLeave() {
    mouse.x = -1000
    mouse.y = -1000
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseleave', onMouseLeave)

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseleave', onMouseLeave)
  })
}

onMounted(init)
</script>

<template>
  <canvas ref="canvas" class="particle-canvas" />
</template>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
</style>
