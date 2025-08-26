import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useHomepageData } from '@/composables/useHomepageData';

export function useHomePageState() {
  const base = import.meta.env.BASE_URL || '/';

  // 取得首頁資料（請確保 useHomepageData 已回傳對應欄位）
  const { heroSlides, news } = useHomepageData();

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

  /* ========== 首頁新聞 (只取前三) ========== */
  const newsTop3 = computed(() => news.value.slice(0, 3));

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
    news,       // 全量 (NewsPage 可用)
    newsTop3,   // 首頁前三
    showBadge
  };
}