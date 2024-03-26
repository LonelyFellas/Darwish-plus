import { useToggle } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const { value, setLeft, setRight, toggle } = useToggle('man', 'female');

  return (
    <div>
      <p>Effects：{`${value}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{margin: '0 8px'}}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
    </div>

  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useLocalStorage",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "A hook that toggle states.",
            sourceUrl: "https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/useToggle/index.ts",
          }}
          apiDescription="Custom hook that handles toggle state with useful utility functions."
          paramDs={{
            ds: [
              {
                name: "defaultValue",
                type: htv("T"),
                defaultValue: "false",
                description: (
                  <>
                    The initial value for the toggle state
                  </>
                ),
              }, {
                name: 'reverseValue',
                type: htv("U"),
                defaultValue: "",
                description: (
                  <>
                    The reverse value for the toggle state
                  </>
                )
              }
            ],
          }}
          returnDs={{
            type: <Tag>UseToggleActions</Tag>,
            description:
              "",
            ds: [
              {
                name: "setLeft",
                type: htv("() => void"),
                description: (
                  <>
                    Function to set the boolean state to <Tag>false</Tag>.
                  </>
                ),
              },
              {
                name: "setRight",
                type: htv("() => void"),
                description: (
                  <>
                    Function to set the boolean state to <Tag>true</Tag>.
                  </>
                ),
              },
              {
                name: "toggle",
                type: htv("(settingValue: ChangeEvent<any> | T) => void;"),
                description: "Switches the toggle state value.",
              },
              {
                name: "value",
                type: htv("boolean | (T | U)"),
                description: "The current toggle state value.",
              },
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
