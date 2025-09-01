import { mount } from "svelte";
import "./app.css";
import ContextCounterApp from "./lib/ContextCounterApp.svelte";

const app = mount(ContextCounterApp, {
  target: document.getElementById("app"),
});

export default app;
