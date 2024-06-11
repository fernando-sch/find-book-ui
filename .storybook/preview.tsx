import "../src/assets/fonts/PlusJakarta/index.css";
import "../src/index.css";
import React from "react";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [(Story) => <Story />],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
