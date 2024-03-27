import { useDefault } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";


export function Demo() {
  const initialUser = { name: 'Marshall' };
  const defaultUser = { name: 'Mathers' };
  const [user, setUser] = useDefault(defaultUser, initialUser);

  console.log(user);
  return (
    <div>
      <div>User: {user.name}</div>
      <input
        onChange={(e) => setUser({ name: e.target.value })}
        value={user.name}
      />
      <button onClick={() => setUser(null)}>set to null</button>
    </div>
  );
}


const meta: Meta<typeof Demo> = {
  title: "Hooks/useDefault",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "React state hook that returns the default value when state is null or undefined.",
          }}
          apiDescription={
            "React state hook that a hook to set default value."
          }
          paramDs={{
            ds: [
              {
                name: "defaultVal",
                type: <Tag color="red">T</Tag>,
                defaultValue: "undefined",
                description: "The default value to return when state is null or undefined.",
              }, {
                name: "initialVal",
                type: <Tag color="red">T</Tag>,
                defaultValue: "undefined",
                description: "The initial value for the state.",
              }
            ],
          }}
          returnDs={{
            type: <Tag color="purple">{`[T, (updateValue: T | null | undefined | ((prev: T) => T)) => void]`}</Tag>,
            description: "An array containing the copied text and the function to copy text to the clipboard.",
            ds: [
              {
                name: "value",
                type: htv("T"),
                description: "a value of type T",
              },
              {
                name: "updateValueFn",
                type: htv("(updateValue: T | null | undefined | ((prev: T) => T)) => void"),
                description: "update value function",
              }
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
