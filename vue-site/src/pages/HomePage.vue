<template>
  <div class="hero-section mb-5">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1>歡迎來到 <span class="text-accent">Pup High School</span></h1>
      <p class="mb-4">我們致力於提供最佳的教育與商品服務。</p>
      <RouterLink to="/products" class="btn btn-primary btn-lg px-4">查看商品</RouterLink>
    </div>
  </div>
  <div class="container section-spacing">
    <section>
      <div class="d-flex align-items-center mb-4">
        <h3 class="h4 mb-0">特色商品</h3>
        <span class="badge bg-primary ms-3">{{ products.length }}</span>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div v-for="p in products" :key="p.id" class="col">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body d-flex flex-column">
              <h4 class="card-title h6 fw-bold">{{ p.name }}</h4>
              <p class="card-text small">{{ p.desc }}</p>
              <RouterLink to="/products" class="btn btn-outline-primary btn-sm mt-auto align-self-start">更多</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const products = ref([
  { id:1, name:'校園背包', desc:'耐用又時尚的學生背包' },
  { id:2, name:'運動外套', desc:'保暖透氣，運動必備' },
  { id:3, name:'紀念水壺', desc:'環保重複使用，隨身攜帶' }
]);
onMounted(()=>{
  console.log('[DEBUG] HomePage mounted, products length =', products.value.length);
});
</script>
