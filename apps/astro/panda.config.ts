import { defineConfig } from "@pandacss/dev";
import { MagePreset } from "@mage/ui";
import { ProjectPreset } from "./src/presets/ProjectPreset.ts";

export default defineConfig({
  presets: [MagePreset, ProjectPreset],
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@mage/ui/dist/panda.json',
  ],
  exclude: [],
  outdir: '@mage/ui-lib',
  emitPackage: true,
  jsxFramework: 'react',
  jsxFactory: 'panda'
});
