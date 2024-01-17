import { defineConfig } from '@pandacss/dev'

import { MagePreset } from './src/presets/MagePreset'

export default defineConfig({
  presets: [MagePreset],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  outdir: '@mage/ui-lib',
  emitPackage: true,
  jsxFramework: 'react',
  jsxFactory: 'panda'
})
