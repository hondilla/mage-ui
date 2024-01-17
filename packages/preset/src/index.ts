import { definePreset } from "@pandacss/dev";

import { Recipes } from "./recipes";

export const MagePreset = definePreset({
  theme: {
    extend: {
      recipes: Recipes,
    },
  },
});

export default MagePreset;
