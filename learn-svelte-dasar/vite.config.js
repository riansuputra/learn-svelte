import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello: "hello.html",
        counter: "counter.html",
        say_hello: "say-hello.html",
        global_counter: "global-counter.html",
        auto_counter: "auto-counter.html",
        user: "user.html",
        todo: "todo.html",
        article: "article.html",
        box: "box.html",
        student: "student.html",
        store_counter: "store-counter.html",
        blog: "blog.html",
        context_counter: "context-counter.html",
        mouse: "mouse.html",
      },
    },
  },
});
