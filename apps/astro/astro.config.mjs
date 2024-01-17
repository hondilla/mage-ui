import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ["@mage/ui-lib"],
    },
    resolve: {
      alias: {
        "@mage/ui-lib": path.resolve("./styled-system"),
      },
    },
  },
});
