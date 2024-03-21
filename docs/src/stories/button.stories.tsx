import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "antd";

//👇 This default export determines where your story goes in the story list
const meta: Meta<ButtonProps> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
