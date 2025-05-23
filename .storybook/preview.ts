import "../src/styles/index.sass";

import { render } from "solid-js/web";

export const decorators = [
  (Story: any) => {
    const solidRoot = document.createElement("div");
    render(Story, solidRoot);
    return solidRoot;
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
