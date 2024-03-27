import { usePrevious } from "@darwish/hooks-core";
import { useState } from "react";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  console.log(previous);
  return (
    <>
      <div>counter current value: {count}</div>
      <div style={{ marginBottom: 8 }}>counter previous value: {previous}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        increase
      </button>
      <button
        type="button"
        style={{ marginLeft: 8 }}
        onClick={() => setCount((c) => c - 1)}
      >
        decrease
      </button>
    </>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/usePrevious",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "保存上一次状态的 Hook.",
            beCare: "注意：⚠️初始值的上一个值是 undefined",
          }}
          apiDescription={htv("管理 SessionStorage 的增删改查", "#336699")}
          paramDs={{
            ds: [
              {
                name: "state",
                type: htv("T"),
                defaultValue: "",
                description: "状态值"
              }
            ],
          }}
          returnDs={{
            type: <Tag>T</Tag>,
            description: "该钩子的输入参数：",
            ds: [
              {
                name: "Previous",
                type: htv("T | undefined"),
                description: "记录上一次的状态值"
              },
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
