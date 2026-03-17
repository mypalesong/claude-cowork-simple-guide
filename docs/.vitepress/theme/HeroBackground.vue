<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref(null)
let animationId = null

onMounted(() => {
  const el = container.value
  if (!el) return

  // Create floating orbs
  const orbs = []
  for (let i = 0; i < 5; i++) {
    const orb = document.createElement('div')
    orb.className = 'hero-orb'
    orb.style.setProperty('--size', (120 + Math.random() * 280) + 'px')
    orb.style.setProperty('--x', (10 + Math.random() * 80) + '%')
    orb.style.setProperty('--y', (10 + Math.random() * 80) + '%')
    orb.style.setProperty('--delay', (Math.random() * -20) + 's')
    orb.style.setProperty('--duration', (15 + Math.random() * 20) + 's')
    orb.style.setProperty('--hue', (15 + Math.random() * 25) + '')
    el.appendChild(orb)
    orbs.push(orb)
  }
})
</script>

<template>
  <div ref="container" class="hero-bg">
    <!-- Gradient mesh -->
    <div class="hero-mesh"></div>
    <!-- Grid pattern -->
    <div class="hero-grid"></div>
    <!-- Radial spotlight -->
    <div class="hero-spotlight"></div>
    <!-- Noise texture -->
    <div class="hero-noise"></div>
    <!-- Bottom fade -->
    <div class="hero-fade"></div>
  </div>
</template>

<style scoped>
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

/* Animated gradient mesh */
.hero-mesh {
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(232, 112, 64, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(212, 165, 116, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 40% 80%, rgba(240, 144, 96, 0.10) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, rgba(192, 74, 26, 0.08) 0%, transparent 50%);
  animation: meshMove 25s ease-in-out infinite alternate;
}

@keyframes meshMove {
  0% { transform: translate(0%, 0%) rotate(0deg); }
  33% { transform: translate(2%, -3%) rotate(1deg); }
  66% { transform: translate(-2%, 2%) rotate(-1deg); }
  100% { transform: translate(1%, -1%) rotate(0.5deg); }
}

.dark .hero-mesh {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(232, 112, 64, 0.10) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(212, 165, 116, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 40% 80%, rgba(240, 144, 96, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, rgba(192, 74, 26, 0.05) 0%, transparent 50%);
}

/* Dot grid pattern */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(232, 112, 64, 0.08) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse at 50% 40%, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 50% 40%, black 0%, transparent 70%);
}

.dark .hero-grid {
  background-image: radial-gradient(circle, rgba(232, 112, 64, 0.06) 1px, transparent 1px);
}

/* Central spotlight */
.hero-spotlight {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 600px;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(232, 112, 64, 0.08) 0%,
    rgba(232, 112, 64, 0.03) 40%,
    transparent 70%
  );
  animation: spotlightPulse 8s ease-in-out infinite alternate;
}

.dark .hero-spotlight {
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(232, 112, 64, 0.06) 0%,
    rgba(232, 112, 64, 0.02) 40%,
    transparent 70%
  );
}

@keyframes spotlightPulse {
  0% { opacity: 1; transform: translateX(-50%) scale(1); }
  100% { opacity: 0.7; transform: translateX(-50%) scale(1.1); }
}

/* Noise texture overlay */
.hero-noise {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
}

/* Bottom gradient fade into content */
.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(to top, var(--vp-c-bg), transparent);
}

/* Floating orbs */
:deep(.hero-orb) {
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: var(--x);
  top: var(--y);
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    hsla(var(--hue), 80%, 60%, 0.12),
    hsla(var(--hue), 70%, 50%, 0.04),
    transparent
  );
  filter: blur(40px);
  animation: orbFloat var(--duration) ease-in-out var(--delay) infinite alternate;
  pointer-events: none;
}

.dark :deep(.hero-orb) {
  background: radial-gradient(
    circle at 30% 30%,
    hsla(var(--hue), 80%, 60%, 0.08),
    hsla(var(--hue), 70%, 50%, 0.03),
    transparent
  );
}

@keyframes orbFloat {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -40px) scale(1.05); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(15px, 35px) scale(1.02); }
  100% { transform: translate(-25px, -15px) scale(1); }
}
</style>
