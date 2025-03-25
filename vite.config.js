// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://heatmap-api-pakj.onrender.com",
//         changeOrigin: true,
//         secure: false, // Useful if the API has SSL issues
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://heatmap-api-pakj.onrender.com",
//         changeOrigin: true,
//         secure: false, // Helps with self-signed certificates
//         retry: 3, // Retries the request if it fails
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://heatmap-api-pakj.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
