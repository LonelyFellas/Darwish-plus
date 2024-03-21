import type { Meta, StoryObj } from "@storybook/react";
import UseBooleanDemo from "./index.demo";
import HookDocsView from "../../components/hook-docs-view";

const meta: Meta<typeof UseBooleanDemo> = {
  title: "States/useBoolean",
  component: UseBooleanDemo,
  tags: ["autodocs"],
  parameters: {
    componentsSubtitle: "use-boolean",
    componentsDescription: "1111",
    docs: {
      page: () => (
        <HookDocsView
          args={{
            title: "Use Boolean",
          }}
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof UseBooleanDemo>;

export const Demo: Story = {
  args: {
    defaultValue: false,
    //👇 The args you need here will depend on your component
  },
};
