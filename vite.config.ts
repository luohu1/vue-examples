import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  resolve: {
    alias: {
      '~/': fileURLToPath(new URL('./src/', import.meta.url))
    }
  },
  plugins: [
    vue(),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: ['vue', 'vue-router'],
      dirs: ['./src/layouts/**', 'src/pages'],
    }),
    Components({
      dts: 'src/types/components.d.ts',
      extensions: ['vue'],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        })
      ],
    }),
  ],
})