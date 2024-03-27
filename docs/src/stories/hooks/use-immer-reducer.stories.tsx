import {useImmer} from "@darwish/hooks-core";
import type {Meta} from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import {Tag} from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [person, setPerson] = useImmer({
    name: 'darwish',
    d: {
      b: {
        info: {
          age: 25,
        },
      },
    },
  });
  return (
    <div>
      <button
        onClick={() => {
          setPerson((draft) => {
            draft.d.b.info.age++;
          });
        }}
      >
        change info
      </button>
      <h1>Age: {person.d.b.info.age}</h1>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useImmerReducer",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "解决一个State 复杂多层赋值问题, 通过 immer 库实现. mutate state in a more convenient way.",
          }}
          apiDescription="React state hook that uses immer to allow you to mutate state in a more convenient way."
          paramDs={{
            ds: [
              {
                name: "initialValue",
                type: htv("T"),
                defaultValue: "",
                description: "状态值"
              },
            ],
          }}
          returnDs={{
            type: <Tag>T</Tag>,
            description: "该钩子的输入参数：",
            ds: [{
              name: "state",
              type: htv("T"),
              description: "状态值"
            }, {
              name: "setState",
              type: htv(" Updater<T>"),
              description: "修改状态值函数"
            }],
          }}
        />
      ),
    },
  },
};

export default meta;
