import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Docs with Tailwind",
    customCss: [
    // Path to your Tailwind base styles:
    "./src/tailwind.css"]
  }), tailwind({
    // Disable the default base styles:
    applyBaseStyles: false
  }), react()]
});