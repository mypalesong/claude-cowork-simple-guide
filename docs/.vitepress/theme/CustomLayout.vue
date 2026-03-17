<script setup>
import DefaultTheme from 'vitepress/theme'
import ParticleBackground from './ParticleBackground.vue'
import HeroBackground from './HeroBackground.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <ParticleBackground v-if="frontmatter.layout === 'home'" />
  <DefaultTheme.Layout>
    <template #home-hero-before>
      <HeroBackground v-if="frontmatter.layout === 'home'" />
    </template>
  </DefaultTheme.Layout>
</template>
