import type { Meta } from "@storybook/react";

export const Demo = () => <h1>Demo</h1>;

const meta: Meta<typeof Demo> = {
  title: "Utils/is",
  component: Demo,
  // tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => <div />,
    },
  },
};

export default meta;
