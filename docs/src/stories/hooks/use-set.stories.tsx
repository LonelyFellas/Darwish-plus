import { useSet } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [set, { add, has, remove, toggle, reset }] = useSet(new Set(['hello']));

  return (
    <div>
      <button onClick={() => add(String(Date.now()))}>Add</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => remove('hello')} disabled={!has('hello')}>
        Remove 'hello'
      </button>
      <button onClick={() => toggle('hello')}>Toggle hello</button>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useSet",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "对set集合的数据状态进行管理",
            sourceUrl: "https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/useSet/index.ts",
          }}
          apiDescription="对set集合数据的增删改查"
          paramDs={{
            ds: [
              {
                name: "initialState",
                type: htv("T"),
                defaultValue: "new Set<T>()",
                description: "初始状态值",
              }
            ],
          }}
          returnDs={{
            type: <Tag>{"[state: Set<T>, action: StableActions]"}</Tag>,
            description: "该钩子的输入参数：",
            ds: [
              {
                name: "state",
                type: htv("T"),
                description: htv("Set类型的状态值", "#336699")
              },
              {
                name: "action",
                type: htv("(StateAction<T>) => void"),
                description: htv("对Set类型数据的增删改", "#336699")
              }, {
                name: "action.add",
                type: htv("(value: T) => void"),
                description: htv("添加数据", "#336699")
              }, {
                name: "action.has",
                type: htv("(value: T) => boolean"),
                description: htv("判断是否存在", "#336699")
              }, {
                name: "action.remove",
                type: htv("(value: T) => void"),
                description: htv("删除数据", "#336699")
              }, {
                name: "action.toggle",
                type: htv("(value: T) => void"),
                description: htv("切换数据", "#336699")
              }, {
                name: "action.reset",
                type: htv("() => void"),
                description: htv("重置数据", "#336699")
              }
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
