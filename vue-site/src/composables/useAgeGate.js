import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const KEY = 'phs_age_ok';

export function useAgeGate() {
  const isAccepted = () => {
    try { return localStorage.getItem(KEY) === '1'; } catch { return false; }
  };
  const setAccepted = () => {
    try { localStorage.setItem(KEY, '1'); } catch {}
  };
  return { isAccepted, setAccepted };
}

// 合併原 useAgeGatePage 功能：提供按鈕圖、hover 與導向邏輯
export function useAgeGatePage(){
  const router = useRouter();
  const route = useRoute();
  const { setAccepted } = useAgeGate();
  const base = import.meta.env.BASE_URL || '/';
  const baseWithSlash = base.endsWith('/') ? base : base + '/';
  const imgRoot = baseWithSlash + 'images/';
  const yesBtnSrc = imgRoot + 'rules_agree.png';
  const yesBtnHoverSrc = imgRoot + 'rules_agree_active.png';
  const exitBtnSrc = imgRoot + 'rules_leave.png';
  const exitBtnHoverSrc = imgRoot + 'rules_leave_active.png';

  const isYesHover = ref(false);
  const isExitHover = ref(false);

  function agree(){
    setAccepted();
    router.replace(route.query.redirect && !String(route.query.redirect).startsWith('/age-gate')
      ? route.query.redirect
      : '/');
  }
  function leave(){ window.location.href = 'https://www.google.com/'; }
  function onImgError(e,type){
    const el = e.target;
    if(type==='yes' && el.src.includes('rules_agree_active')) el.src = yesBtnSrc;
    if(type==='exit' && el.src.includes('rules_leave_active')) el.src = exitBtnSrc;
  }
  return { yesBtnSrc, yesBtnHoverSrc, exitBtnSrc, exitBtnHoverSrc, isYesHover, isExitHover, agree, leave, onImgError };
}