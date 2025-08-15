<template>
  <div>
    <section class="hero">
      <h2>歡迎來到 Pup High School</h2>
      <p>我們致力於提供最佳的教育與商品服務。</p>
    </section>
    <section>
      <h3>特色商品</h3>
      <div class="grid">
        <div v-for="p in products" :key="p.id" class="card">
          <h4>{{ p.name }}</h4>
          <p>{{ p.desc }}</p>
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
