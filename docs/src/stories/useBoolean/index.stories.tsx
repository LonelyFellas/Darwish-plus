import { useBoolean } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";

export const Source = () => {
  // import { useBoolean } from "@darwish/hooks-core";
  const [on, toggle] = useBoolean(true);

  return (
    <div>
      <div>{on ? "ON" : "OFF"}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </div>
  );
};

const meta: Meta<typeof Source> = {
  title: "States/useBoolean",
  component: Source,
  tags: ["autodocs"],
  parameters: {
    componentsSubtitle: "use-boolean",
    docs: {
      page: () => (
        <HookDocsView
          args={{
            title: "Use Boolean",
            description:
              "An object containing the boolean state value and utility functions to manipulate the state.",
            sourceUrl:
              "https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/useBoolean/index.ts",
          }}
        />
      ),
    },
  },
};

export default meta;
