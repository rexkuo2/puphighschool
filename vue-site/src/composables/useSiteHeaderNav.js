import { useRoute } from 'vue-router';

export function useSiteHeaderNav() {
  const route = useRoute();
  const base = import.meta.env.BASE_URL || '/';
  const items = [
    { label:'首頁',       to:'/puphighschool',    imgA:'/images/homepage.png',          imgB:'images/homepage_active.png' },
    { label:'關於我們',   to:'/team',           imgA:'images/gardenshow.png',        imgB:'images/dardenshow_active.png' },
    { label:'活動介紹',     to:'/news',  imgA:'images/news.png',       imgB:'images/news_active.png' },
    { label:'作品集',     to:'/library', imgA:'images/library.png',      imgB:'images/library_active.png' },
    { label:'汪汪商城',     to:'/products',            imgA:'images/store.png',         imgB:'images/store_active.png' },
    { label:'友善連結',   to:'/learning',    imgA:'images/learning.png',     imgB:'images/learning_active.png' },
  ];
  return { route, base, items };
}