import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@mage/preset"],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
  importMap: "@mage/ui-lib",
  jsxFramework: "react",
  jsxFactory: "panda",
});
