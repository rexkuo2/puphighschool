import { ref } from 'vue';
import { useHomePageState } from '@/composables/homePageState';

export function useLibraryPageState() {
  let base = import.meta.env.BASE_URL || '/';
  try {
    const { base: homeBase } = useHomePageState();
    if (homeBase) base = homeBase;
  } catch {}

  const currentBlock = ref('A');

  const btnA        = '/images/vault_btn.png';
  const btnAActive  = '/images/vault_btn_active.png';
  const btnAHover   = '/images/vault_btn_active.png';   // 新增
  const btnB        = '/images/gallery_btn.png';
  const btnBActive  = '/images/gallery_btn_active.png';
  const btnBHover   = '/images/gallery_btn_active.png'; // 新增

  function onImgErr(e, type) {
    e.target.onerror = null;
    e.target.src = base + (type === 'A' ? btnA : btnB);
  }

  // 第一張：單純顯示；其餘：frame + inner
  const photos = ref([
    { type:'single', src:'/images/left_worlds.png', alt:'原圖 1', caption:'' },
    { type:'framed', frameSrc:'/images/frame.png', innerSrc:'/images/library/photos/p2.png', alt:'圖 2', caption:'' },
    { type:'framed', frameSrc:'/images/frame.png', innerSrc:'/images/library/photos/p3.png', alt:'圖 3', caption:'' },
    { type:'framed', frameSrc:'/images/frame.png', innerSrc:'/images/library/photos/p4.png', alt:'圖 4', caption:'' },
    { type:'framed', frameSrc:'/images/frame.png', innerSrc:'/images/library/photos/p5.png', alt:'圖 5', caption:'' },
    { type:'framed', frameSrc:'/images/frame.png', innerSrc:'/images/library/photos/p6.png', alt:'圖 6', caption:'' }
  ]);

  function onPhotoErr(e, isSingle){
    e.target.onerror = null;
    e.target.src = base + (isSingle ? '/images/left_worlds.png'
                                    : '/images/frame.png');
  }

  return {
    base,
    currentBlock,
    btnA, btnAActive, btnAHover,
    btnB, btnBActive, btnBHover,
    onImgErr,
    photos,
    onPhotoErr
  };
}