import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// 合併原 useHomepageData 與 homePageState：集中首頁資料 + 狀態
export function useHomePageState() {
  const base = import.meta.env.BASE_URL || '/';

  /* ========== 原 useHomepageData 靜態資料 ========== */
  const heroSlides = ref([
    { id:1, image:`${base}/images/bk_right.jpg`, title:'歡迎來到 犬高育', subtitle:'一起學習・一起成長・一起創造價值', cta:{ label:'查看商品', to:'/products' } },
    { id:2, image:`${base}/images/highschoolmainbk_2.jpg`, title:'多元活動', subtitle:'活動歷程持續更新，加入我們不錯過任何精彩', cta:{ label:'活動歷程', to:'/team' } },
  ]);

  const news = ref([
    { id:1, date:'2025-07-20', title:'犬高育line官方開啟', tag:'公告' },
    { id:2, date:'2025-08-21', title:'2025遊行名牌開始', tag:'商品' },
    { id:3, date:'2025-09-01', title:'混血犬部粉絲團更名犬高育', tag:'活動' },
    { id:4, date:'2025-09-10', title:'2025新學期學生證開放', tag:'商品' },
    { id:5, date:'2025-09-15', title:'犬力以赴毛巾開放', tag:'商品' },
    { id:6, date:'2025-09-16', title:'犬高育官方網站上線', tag:'公告' }
  ]);

  const youtubeId = 'dQw4w9WgXcQ';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}?rel=0`;

  /* ========== Hero Carousel ========== */
  const currentSlide = ref(0);
  const intervalMs = 6000;
  const transitioning = ref(false);
  let timer = null;

  const slideCount = computed(() => heroSlides.value.length);
  const prevSlideIndex = computed(() =>
    (currentSlide.value - 1 + slideCount.value) % slideCount.value
  );
  const nextSlideIndex = computed(() =>
    (currentSlide.value + 1) % slideCount.value
  );

  function goTo(i) {
    if (!slideCount.value) return;
    currentSlide.value = (i + slideCount.value) % slideCount.value;
  }
  function nextSlide() {
    if (!slideCount.value) return;
    transitioning.value = true;
    currentSlide.value = nextSlideIndex.value;
    endTransitionSoon();
  }
  function prevSlide() {
    if (!slideCount.value) return;
    transitioning.value = true;
    currentSlide.value = prevSlideIndex.value;
    endTransitionSoon();
  }
  function endTransitionSoon() {
    setTimeout(() => (transitioning.value = false), 450);
  }
  function startAuto() {
    stopAuto();
    if (slideCount.value > 1) {
      timer = setInterval(nextSlide, intervalMs);
    }
  }
  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  onMounted(startAuto);
  onBeforeUnmount(stopAuto);

  /* ========== 首頁新聞：倒序並只取前三 ========== */
  const newsDesc = computed(() => [...news.value].reverse());
  const newsTop3 = computed(() => newsDesc.value.slice(0, 3));

  /* ========== 封面徽章 (可選) ========== */
  const showBadge = ref(false);
  onMounted(() => {
    setTimeout(() => (showBadge.value = true), 300);
  });

  return {
    base,
  heroSlides,
    currentSlide,
    prevSlideIndex,
    nextSlideIndex,
    nextSlide,
    prevSlide,
    goTo,
    startAuto,
    stopAuto,
    transitioning,
  news: newsDesc, // 倒序全量
    newsTop3,   // 首頁前三
  showBadge,
  youtubeEmbedUrl
  };
}