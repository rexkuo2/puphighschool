<template>
  <div class="container">
    <div class="d-flex align-items-center mb-4">
      <h2 class="h4 mb-0">商品列表</h2>
      <span class="badge bg-primary ms-3">{{ news.length }}</span>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <div v-for="p in news" :key="p.id" class="col">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h4 class="h6 fw-bold mb-2">{{ p.name }}</h4>
            <p class="fw-semibold text-success mb-3">{{ p.price }} 元</p>
            <button class="btn btn-outline-primary btn-sm mt-auto" type="button">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const news = ref([
  { id:1, name:'校園背包', price:1200 },
  { id:2, name:'運動外套', price:1800 },
  { id:3, name:'紀念水壺', price:350 }
]);
</script>
