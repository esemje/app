// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/app/",
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  base: '/app/', // Replace with your GitHub Pages repository name
  plugins: [reactRefresh()],
});
