import { useSetState } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [state, setState] = useSetState<{
    count?: number,
    hello?: string,
    foo?: string
  }>({});

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState({ hello: 'world' })}>hello</button>
      <button onClick={() => setState({ foo: 'bar' })}>foo</button>
      <button
        onClick={() => {
          setState((prevState) => ({
            count: (prevState.count || 0) + 1,
          }));
        }}
      >
        count++
      </button>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useSetState",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "对Object类型的状态进行管理。与Class组件的状态管理风格保持一致, 特别是在修改状态的时候，足矣体现出来Class组件修改状态是一样的",
          }}
          apiDescription="操作这个钩子，基本和Class更新和删除State都是一致的风格"
          paramDs={{
            ds: [
              {
                name: "initialState",
                type: htv("T"),
                defaultValue: "{}",
                description: "初始状态值",
              }
            ],
          }}
          returnDs={{
            type: <Tag>[state, setState]</Tag>,
            description: "该钩子的输入参数：",
            ds: [
              {
                name: "state",
                type: htv("T"),
                description: htv("Object类型的状态值", "#336699")
              },
              {
                name: "setState",
                type: htv("(updateValue: (Partial<T> | ((args: T) => Partial<T>))) => void"),
                description: htv("更新Object类型的状态值函数", "#336699")
              },
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
