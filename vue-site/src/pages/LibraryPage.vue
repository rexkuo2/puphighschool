<template>
  <!-- 封面 -->
  <section
    class="cover-frame cover-frame-library"
    :style="{ '--cover-img': 'url(' + base + '/images/library_banner.png)' }"
  >
    <div class="cover-frame-inner">
      <div class="lib-switch-btns">
        <button
          class="lib-switch-btn"
          :class="{ active: currentBlock==='A' }"
          @click="currentBlock='A'"
          @mouseenter="hover='A'"
          @mouseleave="hover=''"
          aria-label="顯示區塊 A">
          <img
            :src="base + (currentBlock==='A'
                  ? btnAActive
                  : (hover==='A' ? btnAHover : btnA))"
            alt="區塊A按鈕"
            draggable="false"
            @error="onImgErr($event,'A')" />
        </button>
        <button
          class="lib-switch-btn"
          :class="{ active: currentBlock==='B' }"
          @click="currentBlock='B'"
          @mouseenter="hover='B'"
          @mouseleave="hover=''"
          aria-label="顯示區塊 B">
          <img
            :src="base + (currentBlock==='B'
                  ? btnBActive
                  : (hover==='B' ? btnBHover : btnB))"
            alt="區塊B按鈕"
            draggable="false"
            @error="onImgErr($event,'B')" />
        </button>
      </div>
    </div>
  </section>

  <!-- 下方背景 + 區塊切換 -->
  <section
    class="library-section-switch use-img"
    :style="{ '--switch-bg': 'url(' + base + '/images/library_bk.png)' }"
    ref="librarySectionRef"
  >
    <img class="lib-bg-img" :src="base + '/images/library_bk.png'" alt="下方背景圖">
    <div class="lib-block-wrap">
      <transition name="fade">
        <div v-if="currentBlock==='A'" key="A" class="lib-block lib-block-a">
          A block
        </div>
      </transition>
      <transition name="fade">
        <div
          v-if="currentBlock==='B'"
          key="B"
          class="lib-block lib-block-b"
          ref="blockBRef"
        >
          <!-- 六格照片區 (左 3 右 3) -->
          <section class="library-photo-section">
            <div class="lib-photo-grid" ref="gridRef">
              <div
                v-for="(p,i) in photos"
                :key="i"
                class="lib-photo-item"
                :class="[p.type, p.absolute && 'abs']"
                :style="itemStyle(p)"
              >
                <!-- 第一張：原圖比例直接顯示 -->
                <img
                  v-if="p.type==='single'"
                  :src="base + p.src"
                  :alt="p.alt"
                  class="lib-photo-raw"
                  loading="lazy"
                  @error="onPhotoErr($event,true)"
                />

                <!-- 其餘：背景(frame) + 中心內層圖片 -->
                <div
                  v-else
                  class="lib-photo-frame"
                  :style="{ '--frame-img': 'url(' + base + p.frameSrc + ')' }"
                >
                  <img
                    class="lib-photo-inner"
                    :src="base + p.innerSrc"
                    :alt="p.alt"
                    loading="lazy"
                    @error="onPhotoErr($event,false)"
                  />
                </div>

                <div v-if="p.caption" class="lib-cap">{{ p.caption }}</div>
              </div>
            </div>
          </section>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import '@/styles/library.css';
import { useLibraryPageState } from '../composables/libraryPageState';
const {
  base,
  currentBlock,
  btnA, btnAActive, btnAHover,
  btnB, btnBActive, btnBHover,
  onImgErr,
  photos,
  onPhotoErr
} = useLibraryPageState();

import { ref, computed } from 'vue';
import { onMounted, nextTick, onBeforeUnmount, watch } from 'vue';
const hover = ref('');

// 動態高度計算，確保 lib-block-b 包住溢出的 transform 內容
const gridRef = ref(null);
const blockBRef = ref(null);
const librarySectionRef = ref(null);
// 2x3 自動佈局：計算每格基礎尺寸，設置 absX/absY/sizeW/sizeH
function applyAutoLayout(){
  const block = blockBRef.value;
  const grid = gridRef.value;
  if(!block || !grid) return;
  const cols = 2;
  const gapX = 18, gapY = 18;
  const maxGridWidth = 1200;
  const gridWidth = Math.min(block.clientWidth, maxGridWidth);
  // 每格寬度 = (gridWidth /2) - shrink
  const shrink = 100; // 調小一點
  const cellW = Math.round(gridWidth/cols - shrink);
  const autoItems = photos.value.filter(p=>p.autoLayout);
  let row=0, col=0, maxBottom=0;
  autoItems.forEach(p=>{
    // 依 type 決定比例 (single 用圖片 16:9 假設; framed 用 4:3)
    const aspect = p.type==='single' ? (4/5) : (7/10);
    const cellH = Math.round(cellW / aspect);
    p.sizeW = cellW;
    p.sizeH = cellH;
    p.absX = col * (cellW + gapX);
    p.absY = row * (cellH + gapY);
    const bottom = p.absY + cellH;
    if(bottom>maxBottom) maxBottom = bottom;
    col++;
    if(col>=cols){ col=0; row++; }
  });
  grid.style.width = gridWidth + 'px';
  grid.style.height = maxBottom + 'px';
}
let basePadTop = null;
let basePadBottom = null;

function recalcBlockBounds(){
  const grid = gridRef.value;
  const block = blockBRef.value;
  if(!grid || !block) return;
  applyAutoLayout();
  // 確保初次記錄 padding，這裡不再需要負向補齊
  if(basePadTop === null){
    const cs = getComputedStyle(block);
    basePadTop = parseFloat(cs.paddingTop)||0;
    basePadBottom = parseFloat(cs.paddingBottom)||0;
  }
  adjustSectionHeight();
}
function adjustSectionHeight(){
  const section = librarySectionRef.value;
  const grid = gridRef.value;
  if(!section || !grid) return;
  // 取所有項目的最大底部
  const items = grid.querySelectorAll('.lib-photo-item');
  if(!items.length) return;
  let maxBottom = 0;
  items.forEach(el => {
    const r = el.getBoundingClientRect();
    if(r.bottom > maxBottom) maxBottom = r.bottom;
  });
  const sectionRect = section.getBoundingClientRect();
  const needed = Math.ceil(maxBottom - sectionRect.top) + 40; // 加少量底部緩衝
  // 設定最小高度避免收縮
  if(needed > section.offsetHeight){
    section.style.minHeight = needed + 'px';
  }
}

function scheduleRecalc(){
  nextTick(() => requestAnimationFrame(recalcBlockBounds));
}

onMounted(() => {
  scheduleRecalc();
  window.addEventListener('resize', scheduleRecalc);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', scheduleRecalc);
});
watch(photos, scheduleRecalc, { deep:true });
watch(currentBlock, (v)=>{ if(v==='B') scheduleRecalc(); });

function itemStyle(p){
  if(p.absolute){
    return {
      position:'absolute',
      left:(p.absX||0)+'px',
      top:(p.absY||0)+'px',
  width: (p.sizeW? p.sizeW+'px':'auto'),
  height:(p.sizeH? p.sizeH+'px':'auto'),
  transform:`translate(${p.itemDX||0}px, ${p.itemDY||0}px) scale(${p.itemScale||1})`,
      zIndex:p.cellZ||1,
      '--frame-offset-x': (p.offsetX||0)+'px',
      '--frame-offset-y': (p.offsetY||0)+'px',
      '--frame-scale': (p.scale||p.frameScale||1)
    };
  }
  // fallback (grid flow)
  return {
    '--frame-offset-x': (p.offsetX||0)+'px',
    '--frame-offset-y': (p.offsetY||0)+'px',
    '--frame-scale': (p.scale||p.frameScale||1)
  };
}
</script>

<!-- 樣式已分離至 library.css -->
