import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), commonjs({ include: ["knex", "objection", "sqlite3"] })],
});
