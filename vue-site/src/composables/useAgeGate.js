const KEY = 'phs_age_ok';

export function useAgeGate() {
  const isAccepted = () => {
    try { return localStorage.getItem(KEY) === '1'; } catch { return false; }
  };
  const setAccepted = () => {
    try {
      localStorage.setItem(KEY, '1');
      // 同時設置 cookie (備援) 有效期 365 天
      document.cookie = `${KEY}=1; path=/; max-age=${60*60*24*365}`;
    } catch {}
  };
  return { isAccepted, setAccepted };
}