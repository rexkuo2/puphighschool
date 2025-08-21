import { ref } from 'vue';

// Centralize homepage static/demo data.
export function useHomepageData() {
  const heroSlides = ref([
    { id:1, image:'/images/bk_right.jpg', title:'歡迎來到 犬高育', subtitle:'一起學習・一起成長・一起創造價值', cta:{ label:'查看商品', to:'/products' } },
    { id:2, image:'/images/highschoolmainbk_2.jpg', title:'多元活動', subtitle:'活動歷程持續更新，加入我們不錯過任何精彩', cta:{ label:'活動歷程', to:'/team' } },
  ]);

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

  const youtubeId = 'dQw4w9WgXcQ';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}?rel=0`;

  return { heroSlides, products, timeline, news, youtubeEmbedUrl };
}
