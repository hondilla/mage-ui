import { definePreset } from '@pandacss/dev'
import { Preset } from '@pandacss/types'

import { Recipes } from '@/presets/recipes'

export const MagePreset: Preset = definePreset({
  theme: {
    extend: {
      recipes: Recipes
    }
  }
})
