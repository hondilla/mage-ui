import { defineConfig } from "@pandacss/dev";
import { ProjectPreset } from "./src/presets/ProjectPreset";
import { MagePreset } from "@mage/preset";

export default defineConfig({
  presets: [MagePreset, ProjectPreset],
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./node_modules/@mage/ui/dist/panda.json",
  ],
  exclude: [],
  outdir: "styled-system",
  importMap: "@mage/ui-lib",
  jsxFramework: "react",
  jsxFactory: "panda",
});
