<template>
  <div>
    <h2>人員介紹</h2>
    <div class="grid">
      <div v-for="m in members" :key="m.id" class="card">
        <h4>{{ m.name }}</h4>
        <p>{{ m.role }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const members = ref([
  { id:1, name:'Alice', role:'創辦人' },
  { id:2, name:'Bob', role:'教學主任' },
  { id:3, name:'Carol', role:'商品經理' },
  { id:4, name:'David', role:'行銷專員' }
]);
</script>
