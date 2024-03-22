import { useBoolean } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";

export const Demo = () => {
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

const meta: Meta<typeof Demo> = {
  title: "States/useBoolean",
  component: Demo,
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
          apiDescription={
            "Custom hook that handles boolean state with useful utility functions."
          }
          paramDs={{
            ds: [
              {
                name: "defaultValue",
                type: <Tag color="red">Boolean</Tag>,
                defaultValue: "false",
                description: (
                  <>
                    The initial value for the boolean state (default is{" "}
                    <Tag>false</Tag>)".
                  </>
                ),
              },
            ],
          }}
          returnDs={{
            type: <Tag>UseButtonOutput</Tag>,
            description:
              "An object containing the boolean state value and utility functions to manipulate the state.",
            ds: [
              {
                name: "setFalse",
                type: (
                  <>
                    <Tag color="red">():void</Tag>
                  </>
                ),
                description: (
                  <>
                    Function to set the boolean state to <Tag>false</Tag>.
                  </>
                ),
              },
              {
                name: "setTrue",
                type: (
                  <>
                    <Tag color="red">():void</Tag>
                  </>
                ),
                description: (
                  <>
                    Function to set the boolean state to <Tag>true</Tag>.
                  </>
                ),
              },
              {
                name: "setValue",
                type: (
                  <>
                    {/* Dispatch<SetStateAction<boolean>></SetStateAction> */}
                  </>
                ),
                description: (
                  <>
                    Function to set the boolean state to <Tag>false</Tag>.
                  </>
                ),
              },
              {
                name: "toggle",
                type: (
                  <>
                    <Tag color="red">():void</Tag>
                  </>
                ),
                description: "Function to toggle the boolean state.",
              },
              {
                name: "value",
                type: <Tag>boolean</Tag>,
                description: "The current boolean state value.",
              },
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
