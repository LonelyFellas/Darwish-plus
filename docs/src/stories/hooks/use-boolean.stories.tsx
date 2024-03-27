import { useBoolean } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  // import { useBoolean } from "@darwish/hooks-core";
  const { value: on, setTrue, setFalse, toggle } = useBoolean(true);

  return (
    <div>
      <div>{on ? "ON" : "OFF"}</div>
      <button onClick={setTrue}>set ON(setTrue)</button>
      <button onClick={setFalse}>set OFF(setFalse)</button>
      <button onClick={toggle}>Toggle(toggle)</button>
      <button onClick={() => toggle(true)}>set ON(toggle(true))</button>
      <button onClick={() => toggle(false)}>set OFF(toggle(false))</button>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useBoolean",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "An object containing the boolean state value and utility functions to manipulate the state.",
          }}
          apiDescription="Custom hook that handles boolean state with useful utility functions."
          paramDs={{
            ds: [
              {
                name: "defaultValue",
                type: htv("Boolean"),
                defaultValue: "false",
                description: (
                  <>
                    The initial value for the boolean state (default is
                    <Tag>false</Tag>)".
                  </>
                ),
              },
            ],
          }}
          returnDs={{
            type: <Tag>UseBooleanOutput</Tag>,
            description:
              "An object containing the boolean state value and utility functions to manipulate the state.",
            ds: [
              {
                name: "setFalse",
                type: htv("() => void"),
                description: (
                  <>
                    Function to set the boolean state to <Tag>false</Tag>.
                  </>
                ),
              },
              {
                name: "setTrue",
                type: htv("() => void"),
                description: (
                  <>
                    Function to set the boolean state to <Tag>true</Tag>.
                  </>
                ),
              },
              {
                name: "setValue",
                type: htv("Dispatch<SetStateAction<boolean>></SetStateAction>"),
                description: (
                  <>
                    Function to set the boolean state to <Tag>false</Tag>.
                  </>
                ),
              },
              {
                name: "toggle",
                type: htv("() => void"),
                description: "Function to toggle the boolean state.",
              },
              {
                name: "value",
                type: htv("boolean"),
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
