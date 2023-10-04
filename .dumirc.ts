import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/compoonent-lib-react-library-demo/docs-dist/',
  publicPath: '/compoonent-lib-react-library-demo/docs-dist/',
  history: {
    type: 'hash', // 设置路由模式为 hash 模式，防止部署至 GitHub Pages 后刷新网页后出现 404 的情况发生.
  },
  themeConfig: {
    name: 'compoonent-lib-react-library-demo',
  },
});
