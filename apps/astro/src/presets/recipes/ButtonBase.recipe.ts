import { defineRecipe } from "@pandacss/dev";

export const ButtonBaseRecipe = defineRecipe({
  className: "mage-button",
  jsx: ["ButtonBase"],
  base: {
    color: "lightgreen",
  },
  compoundVariants: [
    {
      variant: "outlined",
      color: "primary",
      css: {
        backgroundColor: "yellow",
      },
    },
    {
      variant: "ghost",
      color: "primary",
      css: {
        backgroundColor: "pink",
      },
    },
  ],
});
