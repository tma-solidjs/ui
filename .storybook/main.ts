import solidPlugin from "vite-plugin-solid";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  viteFinal(config: any) {
    config.plugins?.unshift(solidPlugin({ hot: false }));
    return config;
  },
};

export default config;
