import { defineConfig } from "vitest/config";

defineConfig({
  test: {
    environment: "jsdom",
  },
});

export default defineConfig;
