import type { Meta, StoryObj } from "@storybook/react";
import UseBooleanDemo from "./index.demo";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof UseBooleanDemo> = {
  title: "States/useBoolean",
  component: UseBooleanDemo,
};

export default meta;
type Story = StoryObj<typeof UseBooleanDemo>;

export const Demo: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
