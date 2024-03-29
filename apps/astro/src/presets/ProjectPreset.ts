import { definePreset } from "@pandacss/dev";

import { Recipes } from "./recipes";

export const ProjectPreset = definePreset({
  theme: {
    extend: {
      recipes: Recipes,
    },
  },
});
