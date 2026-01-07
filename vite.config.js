import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/Diy-Garage-Website/", // 例如 /Nordic-Minimalist-Fashion-Website/
});
