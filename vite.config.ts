import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/campus-craft-co/',   // ⚠ यहाँ अपने repo का नाम डालना है
})
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
