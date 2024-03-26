import { useSyncState } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const state = useSyncState({
    age: 25,
    name: 'darwish',
  });
  const handleAgePlusPlus = () => {
    setTimeout(() => {
      state.age++;
    }, 120);
  };
  return (
    <>
      <h1>
        Age: {state.age}, Name: {state.name}
      </h1>
      <button onClick={handleAgePlusPlus}>Age ++</button>
      <button
        onClick={() =>
          (state.name = state.name === 'darwish' ? 'cat' : 'darwish')
        }
      >
        Change Name
      </button>
    </>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useSyncState",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "解决异步拿不到最新值和深度改变State",
            sourceUrl: "https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/useSyncState/index.ts",
          }}
          apiDescription="api使用风格时mutable的方式来改变state"
          paramDs={{
            ds: [
              {
                name: "initialState",
                type: htv("T"),
                defaultValue: "",
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
                description: htv("直接查看并且修改state, 是一个mutable的方式", "#336699")
              },
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
