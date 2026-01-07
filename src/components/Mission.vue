<script setup lang="ts">
type MissionCard = {
  title: string;
  href: string;
  image: string;
};

const cards: MissionCard[] = [
  {
    title: 'STAINED\nCONCRETE KITS',
    href: 'https://diygaragefloors.com/shop/garage-flooring-kits/stained-concrete-kits/',
    image: 'https://diygaragefloors.com/wp-content/uploads/2020/08/20150524_160237.jpg'
  },
  {
    title: 'SOLID COLOR\nKITS',
    href: 'https://diygaragefloors.com/shop/garage-flooring-kits/solid-color-kits/',
    image: 'https://diygaragefloors.com/wp-content/uploads/2020/08/IMG_5020-002.jpg'
  },
  {
    title: 'FULL\nBROADCAST\nKITS',
    href: 'https://diygaragefloors.com/shop/garage-flooring-kits/full-broadcast-kits/',
    image: 'https://diygaragefloors.com/wp-content/uploads/2020/08/2016-Global-Garage-Web-75.jpg'
  }
];
</script>

<template>
  <section id="mission" class="mission">
    <div class="mission__inner">
      <div class="mission__title">
        <span class="mission__line" aria-hidden="true"></span>
        <h2>THE DIY GARAGE FLOOR MISSION</h2>
        <span class="mission__line" aria-hidden="true"></span>
      </div>

      <p class="mission__desc">
        You want to Do It Yourself and Do It Well. You want the backing and understanding of a company that knows
        coatings, knows applications, knows concrete, and knows DIYer's. These are the products for you!
      </p>

      <div class="mission__grid">
        <a v-for="card in cards" :key="card.title" class="mission-card" :href="card.href">
          <img class="mission-card__img" :src="card.image" alt="" />
          <div class="mission-card__overlay">
            <h3 v-html="card.title.replace(/\n/g, '<br />')"></h3>
            <span class="mission-card__btn">CLICK ME!</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission {
  background: #fff;
  padding: 80px 16px;
}

.mission__inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.mission__title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #2f3741;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 22px;
}

.mission__title h2 {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.mission__line {
  width: 48px;
  height: 2px;
  background: #c7ccd4;
  display: inline-block;
}

.mission__desc {
  max-width: 800px;
  margin: 24px auto 56px;
  color: #666;
  font-size: 16px;
  line-height: 1.7;
}

.mission__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.mission-card {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 6px;
  min-height: 300px;
  text-decoration: none;
}

.mission-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.02);
  transition: transform 0.4s ease;
}

.mission-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  text-align: center;
  transition: background 0.3s ease;
}

.mission-card h3 {
  margin: 0;
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1.2;
}

.mission-card__btn {
  padding: 10px 18px;
  background: #f3b200;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 2px;
}

.mission-card:hover .mission-card__overlay {
  background: rgba(0, 0, 0, 0.25);
}

.mission-card:hover .mission-card__img {
  transform: scale(1.06);
}

@media (max-width: 900px) {
  .mission__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .mission {
    padding: 64px 16px;
  }

  .mission__title {
    flex-direction: column;
    gap: 8px;
  }

  .mission__grid {
    grid-template-columns: 1fr;
  }
}
</style>
