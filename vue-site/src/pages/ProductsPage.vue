<template>
  <div>
    <h2>商品列表</h2>
    <div class="grid">
      <div v-for="p in products" :key="p.id" class="card">
        <h4>{{ p.name }}</h4>
        <p>{{ p.price }} 元</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const products = ref([
  { id:1, name:'校園背包', price:1200 },
  { id:2, name:'運動外套', price:1800 },
  { id:3, name:'紀念水壺', price:350 }
]);
</script>
