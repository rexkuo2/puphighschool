<template>
  <footer>
    <div>&copy; {{ year }} Pup High School</div>
    <div class="footer-links">
      <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
    </div>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear();
</script>
<style scoped>
footer { display:flex; flex-direction:column; gap:8px; }
@media (min-width:700px){ footer { flex-direction:row; align-items:center; justify-content:space-between; } }
</style>
