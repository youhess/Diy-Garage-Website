<script setup lang="ts">
type Feature = {
  title: string;
  desc: string;
  cta: string;
  href: string;
  icon: 'roller' | 'play' | 'car';
};

const features: Feature[] = [
  {
    title: 'BEAUTIFY',
    desc: "Make your garage gorgeous! Garages are now beautiful as well as functional and we'll help you Do It Yourself!",
    cta: 'SHOP KITS!',
    href: 'https://www.example.com/',
    icon: 'roller'
  },
  {
    title: 'INSTRUCTION',
    desc: 'Video instructions, written instructions, Tech Data Sheets, Safety Data Sheets. We teach it before you do it!',
    cta: 'LEARN MORE!',
    href: 'https://www.example.com/',
    icon: 'play'
  },
  {
    title: 'DURABLE & CLEAN',
    desc: 'Make your garage gorgeous! Transform your garage with the toughest, easiest to clean coatings in the industry.',
    cta: 'LEARN MORE!',
    href: 'https://www.example.com/',
    icon: 'car'
  }
];

const scrollToBottom = () => {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
};
</script>

<template>
  <section class="features" id="features">
    <div class="features__inner">
      <div class="features__grid">
        <article v-for="feature in features" :key="feature.title" class="feature">
          <div class="feature__icon" aria-hidden="true">
            <svg class="feature__roof" viewBox="0 0 64 28" role="presentation">
              <path d="M4 20 L32 8 L60 20" stroke="#f3b200" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <svg v-if="feature.icon === 'roller'" class="feature__svg" viewBox="0 0 64 64" role="presentation">
              <rect x="10" y="12" width="30" height="16" rx="2" stroke="white" stroke-width="3" fill="none" />
              <path d="M40 20 H50 C53 20 54 22 54 24 V32 C54 34 53 36 50 36 H36 V28" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M36 32 L30 50" stroke="white" stroke-width="3" stroke-linecap="round" />
              <rect x="26" y="50" width="8" height="10" rx="2" fill="white" />
            </svg>

            <svg v-else-if="feature.icon === 'play'" class="feature__svg" viewBox="0 0 64 64" role="presentation">
              <circle cx="32" cy="32" r="18" stroke="white" stroke-width="3" fill="none" />
              <polygon points="28,24 44,32 28,40" fill="white" />
            </svg>

            <svg v-else class="feature__svg" viewBox="0 0 80 64" role="presentation">
              <rect x="12" y="26" width="56" height="22" rx="6" stroke="white" stroke-width="3" fill="none" />
              <path d="M18 26 L24 18 H56 L62 26" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="26" cy="52" r="6" fill="white" />
              <circle cx="54" cy="52" r="6" fill="white" />
              <path d="M38 34 H46" stroke="white" stroke-width="3" stroke-linecap="round" />
            </svg>
          </div>

          <h3 class="feature__title">{{ feature.title }}</h3>
          <p class="feature__desc">{{ feature.desc }}</p>
          <a class="feature__btn" :href="feature.href">{{ feature.cta }}</a>
        </article>
      </div>

      <button class="features__scrollHint" type="button" aria-label="Scroll to bottom" @click="scrollToBottom">
        <svg viewBox="0 0 24 24" class="features__chevron" role="presentation">
          <path d="M6 9 L12 15 L18 9" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.features {
  background: #223443;
  color: #fff;
  padding: 80px 16px;
}

.features__inner {
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 56px;
  text-align: center;
  align-items: start;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature__icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.feature__roof {
  width: 64px;
  height: 28px;
}

.feature__svg {
  width: 84px;
  height: 84px;
}

.feature__title {
  margin: 14px 0 10px;
  color: #fff;
  font-weight: 800;
  letter-spacing: 1.2px;
  font-size: 28px;
  text-transform: uppercase;
}

.feature__desc {
  color: #fff;
  line-height: 1.6;
  font-size: 15px;
  max-width: 280px;
  margin: 0 auto 18px;
}

.feature__btn {
  display: inline-block;
  padding: 12px 26px;
  border: 2px solid #f3b200;
  color: #f3b200;
  text-decoration: none;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background 0.2s ease, color 0.2s ease;
}

.feature__btn:hover {
  background: #f3b200;
  color: #223443;
}

.features__scrollHint {
  position: absolute;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.features__chevron {
  width: 28px;
  height: 28px;
  color: #d7d7d7;
}

@media (max-width: 900px) {
  .features__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 600px) {
  .features {
    padding: 64px 16px;
  }

  .feature__title {
    font-size: 24px;
  }
}
</style>
