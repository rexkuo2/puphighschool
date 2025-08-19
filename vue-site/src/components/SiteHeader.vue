<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <RouterLink to="/puphighschool" class="navbar-brand">Pup High School</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/puphighschool" class="nav-link" active-class="active" exact-active-class="active">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/team" class="nav-link" active-class="active" exact-active-class="active">人員介紹</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products" class="nav-link" active-class="active" exact-active-class="active">商品</RouterLink>
          </li>
            <li class="nav-item">
            <RouterLink to="/contact" class="nav-link" active-class="active" exact-active-class="active">聯絡我們</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No extra logic needed for navbar at this moment
</script>

<style scoped>
/* You can add any custom overrides here */
</style>
