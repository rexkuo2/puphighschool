<template>
  <div>
    <!-- Hero / Breadcrumb -->
    <section class="team-hero mb-5">
      <div class="container">
        <div class="row align-items-center g-4">
          <div class="col-lg-6 text-center d-none d-lg-block">
            <img src="/images/about-page.png" alt="About" class="img-fluid" style="max-height:260px;" />
          </div>
        </div>
      </div>
    </section>

    <!-- About style block -->
    <section class="container mb-5">
      <div class="row g-4 align-items-center">
        <div class="col-md-6">
          <div class="about-block h-100">
            <h3>Our Mission</h3>
            <h2 class="h3">關於 Pup High School</h2>
            <p class="mb-3">我們專注於提供學生所需的一切資源與商品，結合教育服務與校園周邊，打造完整的支持系統。</p>
            <p class="mb-0">團隊成員具備多元背景，從課程設計、產品開發到品牌行銷，共同推動校園創新。</p>
            <div class="about-icon-box">
              <!-- <img src="/images/about-icon.png" alt="Icon" /> -->
              <div>
                <h4 class="h6 mb-2">Think Out Of The Box</h4>
                <p class="small mb-2">持續探索更好的學習與商品體驗，接受挑戰並快速迭代。</p>
                <div class="social">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="testimonial-box">
            <h3>“Best Design Quality”</h3>
            <p class="mb-0 small lh-lg">我們的服務與周邊產品設計以使用者需求為核心，透過持續回饋改善細節，提供穩定、實用且具吸引力的體驗。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team grid -->
    <section class="container mb-5">
      <div class="team-section-heading text-center mb-4">
        <p>Our Team</p>
        <h3 class="h3 mb-0">Awesome Members</h3>
      </div>
      <div class="row g-4">
        <div v-for="m in members" :key="m.id" class="col-6 col-md-4 col-lg-3">
            <div class="member-card shadow-sm">
              <img :src="m.photo" :alt="m.name" />
              <div class="member-overlay">
                <h4>{{ m.name }}</h4>
                <p>{{ m.roleLabel }}</p>
                <div class="member-social">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const members = ref([
  { id:1, name:'Alice', role:'創辦人', roleLabel:'FOUNDER', photo:'/images/instructor1.jpg' },
  { id:2, name:'Bob', role:'教學主任', roleLabel:'DIRECTOR', photo:'/images/instructor2.jpg' },
  { id:3, name:'Carol', role:'商品經理', roleLabel:'PRODUCT', photo:'/images/instructor3.jpg' },
  { id:4, name:'David', role:'行銷專員', roleLabel:'MARKETING', photo:'/images/instructor4.jpg' }
]);
</script>

<style scoped>
/* Scoped overrides placeholder */
</style>
