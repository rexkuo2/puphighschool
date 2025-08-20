<template>
  <!-- Hero Carousel -->
  <div class="hero-carousel mb-5" @mouseenter="stopAuto" @mouseleave="startAuto">
    <div class="hero-slide"
         v-for="(s,i) in heroSlides" :key="s.id"
         :class="{active:i===currentSlide, prev: i===prevSlideIndex, next: i===nextSlideIndex}"
         :style="{backgroundImage: 'url(' + s.image + ')'}">
      <div class="hero-layer"></div>
      <div class="container hero-inner">
        <h1 class="display-5 fw-bold mb-3">{{ s.title }}</h1>
        <p class="lead mb-4">{{ s.subtitle }}</p>
        <RouterLink v-if="s.cta" :to="s.cta.to" class="btn btn-primary btn-lg px-4">{{ s.cta.label }}</RouterLink>
      </div>
    </div>
    <!-- Controls -->
    <button class="hero-control prev" @click="prevSlide" aria-label="上一張">‹</button>
    <button class="hero-control next" @click="nextSlide" aria-label="下一張">›</button>
    <!-- Indicators -->
    <div class="hero-dots">
      <button v-for="(s,i) in heroSlides" :key="s.id" @click="goTo(i)" :class="{active: i===currentSlide}" :aria-label="'跳到第'+(i+1)+'張'" />
    </div>
  </div>
  <div class="container section-spacing">
    <!-- 活動歷程 Timeline -->
    <section class="mt-5">
      <div class="d-flex align-items-center mb-4">
        <h3 class="h4 mb-0">活動歷程</h3>
        <RouterLink to="/team" class="btn btn-link ms-2 p-0 small">查看更多 →</RouterLink>
      </div>
      <ul class="timeline list-unstyled">
        <li v-for="(e,i) in timeline" :key="e.id" class="timeline-item d-flex">
          <div class="timeline-dot mt-1 me-3"></div>
          <div class="flex-grow-1 pb-4 border-start ps-3 position-relative">
            <small class="text-muted d-block mb-1">{{ e.date }}</small>
            <strong>{{ e.title }}</strong>
            <p class="mb-1 small text-secondary">{{ e.desc }}</p>
            <span v-if="i===0" class="badge bg-success small">最新</span>
          </div>
        </li>
      </ul>
    </section>

    <!-- 消息列表 News -->
    <section class="mt-5">
      <div class="d-flex align-items-center mb-4">
        <h3 class="h4 mb-0">最新消息</h3>
        <RouterLink to="/products" class="btn btn-link ms-2 p-0 small">全部消息 →</RouterLink>
      </div>
      <div class="list-group shadow-sm">
        <a v-for="n in news" :key="n.id" href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
          <div>
            <div class="fw-semibold">{{ n.title }}</div>
            <div class="small text-muted">{{ n.date }}</div>
          </div>
          <span class="badge bg-primary rounded-pill align-self-center">{{ n.tag }}</span>
        </a>
      </div>
    </section>

    <!-- YouTube 影片 -->
    <section class="mt-5">
      <div class="d-flex align-items-center mb-4">
        <h3 class="h4 mb-0">介紹影片</h3>
      </div>
      <div class="ratio ratio-16x9 video-wrapper rounded overflow-hidden shadow-sm">
        <iframe :src="youtubeEmbedUrl" title="YouTube video" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
// Hero slides 資料（TODO: 替換為實際圖片 URL）
const heroSlides = ref([
  { id:1, image:'/images/bk_right.jpg', title:'歡迎來到 犬高育', subtitle:'一起學習・一起成長・一起創造價值', cta:{ label:'查看商品', to:'/products' } },
  { id:2, image:'/images/highschoolmainbk_2.jpg', title:'多元活動', subtitle:'活動歷程持續更新，加入我們不錯過任何精彩', cta:{ label:'活動歷程', to:'/team' } },
  // { id:3, image:'/images/bk_mid.jpg', title:'加入志工/夥伴', subtitle:'招募志工與協作夥伴，一起打造更好的社群', cta:{ label:'聯絡我們', to:'/contact' } },
]);
const currentSlide = ref(0);
const timer = ref(null);
const intervalMs = 6000;
const transitioning = ref(false);
const prevSlideIndex = ref(-1);
const nextSlideIndex = ref(-1);

function nextSlide(){
  if (transitioning.value) return; transitioning.value = true;
  prevSlideIndex.value = currentSlide.value;
  currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length;
  nextSlideIndex.value = currentSlide.value;
  setTimeout(()=>{ transitioning.value = false; }, 750);
}
function prevSlide(){
  if (transitioning.value) return; transitioning.value = true;
  prevSlideIndex.value = currentSlide.value;
  currentSlide.value = (currentSlide.value - 1 + heroSlides.value.length) % heroSlides.value.length;
  nextSlideIndex.value = currentSlide.value;
  setTimeout(()=>{ transitioning.value = false; }, 750);
}
function goTo(i){ if (i===currentSlide.value) return; prevSlideIndex.value = currentSlide.value; currentSlide.value = i; nextSlideIndex.value = i; }
function startAuto(){ stopAuto(); timer.value = setInterval(nextSlide, intervalMs); }
function stopAuto(){ if (timer.value) { clearInterval(timer.value); timer.value=null; } }
onMounted(()=>{ startAuto(); });
onBeforeUnmount(()=> stopAuto());
const products = ref([
  { id:1, name:'校園背包', desc:'耐用又時尚的學生背包' },
  { id:2, name:'運動外套', desc:'保暖透氣，運動必備' },
  { id:3, name:'紀念水壺', desc:'環保重複使用，隨身攜帶' }
]);
const timeline = ref([
  { id:1, date:'2025-08-10', title:'校園社群成立', desc:'核心成員聚集完成首次會議' },
  { id:2, date:'2025-08-15', title:'第一批週邊設計', desc:'完成背包與外套設計草稿' },
  { id:3, date:'2025-08-18', title:'招募志工', desc:'公開徵求活動支援與行銷志工' },
]);
const news = ref([
  { id:1, date:'2025-08-20', title:'官方網站上線', tag:'公告' },
  { id:2, date:'2025-08-21', title:'商品預購即將開放', tag:'商品' },
  { id:3, date:'2025-08-22', title:'招募志工說明會', tag:'活動' },
]);
const youtubeId = 'dQw4w9WgXcQ'; // TODO: 換成實際影片 ID
const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}?rel=0`;
onMounted(()=>{
  console.log('[DEBUG] HomePage mounted, products length =', products.value.length);
});
</script>
<style scoped>
.hero-carousel { position:relative; height:60vh; min-height:420px; overflow:hidden; background:#000; }
.hero-slide { position:absolute; inset:0; background-size:cover; background-position:center; opacity:0; transform:scale(1.05); transition:opacity .75s ease, transform 1.8s ease; display:flex; }
.hero-slide.active { opacity:1; transform:scale(1); z-index:2; }
.hero-layer { position:absolute; inset:0; background:linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.4)); }
.hero-inner { position:relative; z-index:3; align-self:center; color:#fff; max-width:780px; }
.hero-control { position:absolute; top:50%; transform:translateY(-50%); background:rgba(0,0,0,.4); color:#fff; border:0; width:48px; height:48px; border-radius:50%; font-size:30px; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(4px); transition:background .3s; }
.hero-control:hover { background:rgba(0,0,0,.65); }
.hero-control.prev { left:18px; }
.hero-control.next { right:18px; }
.hero-dots { position:absolute; bottom:18px; left:50%; transform:translateX(-50%); display:flex; gap:10px; z-index:5; }
.hero-dots button { width:14px; height:14px; border-radius:50%; background:rgba(255,255,255,.4); border:2px solid transparent; cursor:pointer; padding:0; }
.hero-dots button.active { background:#fff; box-shadow:0 0 0 4px rgba(255,255,255,.28); }
.hero-dots button:hover { background:#fff; }
@media (max-width:768px){
  .hero-inner h1 { font-size:1.9rem; }
  .hero-carousel { height:55vh; }
  .hero-control { width:42px; height:42px; font-size:26px; }
}
@media (max-width:576px){
  .hero-inner h1 { font-size:1.6rem; }
  .hero-inner p { font-size:.95rem; }
  .hero-carousel { min-height:360px; }
}
.timeline-item:last-child .flex-grow-1 { border-left:0; }
.timeline { position:relative; margin:0; }
.timeline-item .timeline-dot { width:12px; height:12px; background:#0d6efd; border-radius:50%; position:relative; }
.timeline-item .flex-grow-1 { border-color:rgba(0,0,0,.1)!important; }
.timeline-item .flex-grow-1::before { content:''; position:absolute; left:-1px; top:0; bottom:0; width:2px; background:linear-gradient(#0d6efd,#6c757d); opacity:.25; }
.timeline-item:last-child .flex-grow-1::before { bottom:50%; }
.video-wrapper iframe { width:100%; height:100%; border:0; }
@media (max-width:576px){
  .timeline-item .flex-grow-1::before { left:-1px; }
}
</style>
