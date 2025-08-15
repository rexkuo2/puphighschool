import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // Project page 部署：資源需包含倉庫名稱路徑
  base: '/puphighschool.github.io/',
});
