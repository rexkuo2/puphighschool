import { ref } from 'vue';

// Centralize homepage static/demo data.
export function useHomepageData() {
    const base = import.meta.env.BASE_URL; // 會是 '/', 或 '/puphighschool.github.io/'（依部署）

  const heroSlides = ref([
    { id:1, image:`${base}/images/bk_right.jpg`, title:'歡迎來到 犬高育', subtitle:'一起學習・一起成長・一起創造價值', cta:{ label:'查看商品', to:'/products' } },
    { id:2, image:`${base}/images/highschoolmainbk_2.jpg`, title:'多元活動', subtitle:'活動歷程持續更新，加入我們不錯過任何精彩', cta:{ label:'活動歷程', to:'/team' } },
  ]);

  const products = ref([
    { id:1, name:'校園背包', desc:'耐用又時尚的學生背包' },
    { id:2, name:'運動外套', desc:'保暖透氣，運動必備' },
    { id:3, name:'紀念水壺', desc:'環保重複使用，隨身攜帶' }
  ]);

  const timeline = ref([
    { id:1, date:'2022-02-10', title:'第一次悠遊卡', desc:'第一次狗勾悠遊卡製作' },
    { id:2, date:'2022-03-15', title:'行動代號汪 名牌製作', desc:'製作遊行名牌' },
    { id:3, date:'2022-04-18', title:'ENFINITY成立', desc:'初步規劃與團隊組建ENFINITY' },
    { id:4, date:'2022-05-20', title:'契約成立 悠遊卡製作', desc:'呈現主犬風格的悠遊卡製作' },
    { id:5, date:'2022-06-01', title:'日式阩杯製作', desc:'嘗試製作日式風格產品' },
    { id:6, date:'2022-07-01', title:'春遊糖果狗 悠遊卡製作', desc:'符合春天節慶風格悠遊卡製作' },
    { id:7, date:'2022-08-01', title:'專門特製狗勾棒球服製作', desc:'特製推出專屬每隻狗勾的棒球服' },
    { id:8, date:'2022-09-01', title:'遊行名牌製作 流明石', desc:'為了遊行製作的名牌活動' },
    { id:9, date:'2022-10-01', title:'混血犬部成立', desc:'混血犬部粉絲團成立' },
    { id:10, date:'2022-11-01', title:'犬高育學生證亮相', desc:'犬高育概念初步展現' },
    { id:11, date:'2022-12-01', title:'狗勾職業吊飾', desc:'呈現不同風格和遊戲結合的可愛狗勾吊飾' },
    { id:12, date:'2023-01-01', title:'倖存者悠遊卡', desc:'倖存者風格悠遊卡製作' },
    { id:13, date:'2023-02-01', title:'狗勾夏日杯套', desc:'呈現狗勾在夏天遊玩風格的實用杯套' },
    { id:14, date:'2023-03-01', title:'犬高育官方line成立', desc:'犬高育官方line成立' },
    { id:15, date:'2023-04-01', title:'馬拉灣專車', desc:'第一次號召馬拉灣專車' },
    { id:16, date:'2023-05-01', title:'狗勾飯友', desc:'吃飯不方便戴頭套拍照，狗勾飯友幫你解決' },
    { id:17, date:'2023-06-01', title:'狗勾領巾', desc:'可愛的狗勾一定要有領巾!' },
    { id:18, date:'2025-08-22', title:'極密檔案汪 遊行名牌', desc:'2025年同志大遊行名牌!' }
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
