import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@mage/preset"],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "dist",
  jsxFramework: "react",
  jsxFactory: "panda",
});
