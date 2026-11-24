import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
 base: "/creat-record/",
 plugins: [tailwindcss()],
});
