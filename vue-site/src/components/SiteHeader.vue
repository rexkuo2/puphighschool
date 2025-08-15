<template>
  <header>
    <h1 class="logo">Pup High School</h1>
    <nav>
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/team">人員介紹</RouterLink>
      <RouterLink to="/products">商品</RouterLink>
      <RouterLink to="/contact">聯絡我們</RouterLink>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.logo { margin:0 0 8px 0; }
header { display:flex; flex-direction:column; }
@media (min-width:700px){ header { flex-direction:row; align-items:center; justify-content:space-between; } .logo { margin:0; } }
</style>
