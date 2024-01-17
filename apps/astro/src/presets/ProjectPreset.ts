import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'

import { Recipes } from './recipes'

export const ProjectPreset: Preset = definePreset({
  theme: {
    extend: {
      recipes: Recipes
    }
  }
})
