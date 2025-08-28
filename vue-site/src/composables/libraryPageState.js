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
  // 可選屬性：
  // offsetX, offsetY (px) 控制內層主圖位移；scale 控制內層主圖縮放；
  // frameScale 若要連同外層 frame 縮放 (0.8~1.2)；rawOffset/ rawScale 給 single 類型
  // 新：autoLayout = true 進行 2x3 自動計算 (水平2張 * 垂直3張)；之後若要自訂把 autoLayout 改 false 並指定 absX/absY/sizeW/sizeH。
  { type:'single', autoLayout:true, absolute:true, src:'/images/left_worlds.png', alt:'原圖 1', caption:'', rawScale:0.9, cellScale:1, cellZ:3, itemScale:1, itemDX:-10, itemDY:0, tweakX:0, tweakY:0 },
  { type:'framed', autoLayout:true, absolute:true, frameSrc:'/images/frame.png', innerSrc:'/images/mainboy.png', alt:'圖 2', caption:'', scale:0.9, cellScale:1, cellZ:4, itemScale:1, itemDX:0, itemDY:0, tweakX:0, tweakY:0 },
  { type:'framed', autoLayout:true, absolute:true, frameSrc:'/images/frame.png', innerSrc:'/images/mainboy.png', alt:'圖 3', caption:'', scale:0.85, cellScale:1, cellZ:2, itemScale:1, itemDX:0, itemDY:0, tweakX:0, tweakY:0 },
  { type:'framed', autoLayout:true, absolute:true, frameSrc:'/images/frame.png', innerSrc:'/images/mainboy.png', alt:'圖 4', caption:'', scale:0.92, cellScale:1, cellZ:5, itemScale:1, itemDX:0, itemDY:0, tweakX:0, tweakY:0 },
  { type:'framed', autoLayout:true, absolute:true, frameSrc:'/images/frame.png', innerSrc:'/images/mainboy.png', alt:'圖 5', caption:'', scale:0.95, cellScale:1, cellZ:1, itemScale:1, itemDX:0, itemDY:0, tweakX:0, tweakY:0 },
  { type:'framed', autoLayout:true, absolute:true, frameSrc:'/images/frame.png', innerSrc:'/images/mainboy.png', alt:'圖 6', caption:'', scale:0.88, cellScale:1, cellZ:6, itemScale:1, itemDX:0, itemDY:0, tweakX:0, tweakY:0 }
  ]);

  function onPhotoErr(e, isSingle){
    e.target.onerror = null;
    e.target.src = base + (isSingle ? '/images/left_worlds.png'
                                    : '/images/frame.png');
  }

  function setItemTransform(i, { scale, moveX, moveY } = {}) {
    const p = photos.value[i];
    if(!p) return;
    if(typeof scale === 'number') p.itemScale = scale;
    if(typeof moveX === 'number') p.itemDX = moveX;
    if(typeof moveY === 'number') p.itemDY = moveY;
  }

  function setPhotoTweak(i, dx = 0, dy = 0){
    const p = photos.value[i];
    if(!p) return;
    p.tweakX = dx; p.tweakY = dy;
  }

  return {
    base,
    currentBlock,
    btnA, btnAActive, btnAHover,
    btnB, btnBActive, btnBHover,
    onImgErr,
    photos,
  onPhotoErr,
  setItemTransform,
  setPhotoTweak
  };
}