<script setup lang="ts">
import { ShoppingBag } from "lucide-vue-next";
</script>

<template>
  <section
    class="relative w-full h-[300px] min-[835px]:h-[890px] flex items-center justify-center overflow-hidden bg-primary-dark"
  >
    <!-- Video Background (Desktop > 835px) -->
    <video
      class="hidden min-[835px]:block absolute inset-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
    >
      <source
        src="https://diygaragefloors.com/wp-content/uploads/2021/08/DIY_Banner_Video_comp.mp4"
        type="video/mp4"
      />
    </video>

    <!-- Image Background (Mobile <= 835px) -->
    <div
      class="block min-[835px]:hidden absolute inset-0 bg-cover bg-center"
      style="
        background-image: url('https://diygaragefloors.com/wp-content/uploads/2020/08/SSimmsGarage-3-2917832078-O.jpg');
      "
    ></div>

    <!-- Overlay -->
    <div
      class="absolute inset-0 z-10 min-[835px]:hidden"
      style="background: rgba(25, 85, 125, 0.65)"
    ></div>

    <!-- Content -->
    <div
      class="relative z-20 container mx-auto px-4 text-center max-w-[1000px] block min-[835px]:hidden"
    >
      <h1
        class="text-white font-extrabold uppercase tracking-widest leading-tight mb-4 text-xl sm:text-2xl md:text-2xl lg:text-6xl drop-shadow-md"
      >
        YOUR ULTIMATE SOURCE FOR EVERYTHING YOU NEED<br
          class="hidden md:block"
        />
        FOR YOUR DIY GARAGE FLOOR!
      </h1>

      <a
        href="#products"
        class="inline-flex items-center gap-2 bg-[#f3b200] hover:bg-[#d97706] text-white font-extrabold uppercase px-5 py-2.5 rounded text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg"
      >
        <span>SHOP KITS</span>
        <ShoppingBag class="w-4 h-4" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
