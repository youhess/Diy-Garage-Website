<script setup lang='ts'>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Features from './components/Features.vue';
import Mission from './components/Mission.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class='min-h-screen flex flex-col font-inter'>
    <Header />
    <main class='flex-grow'>
      <Hero />
      <Features />
      <Mission />
    </main>
    <Footer />
  </div>
</template>
