import { useCreation } from "@darwish/hooks-core";
import { useState } from "react";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";


class Foo {
  constructor() {
    this.data = Math.random();
  }

  data: number;
}
export function Demo() {
  const foo = useCreation(() => new Foo(), []);
  const [, setFlag] = useState({});
  return (
    <>
      <p>{foo.data}</p>
      <button
        type="button"
        onClick={() => {
          setFlag({});
        }}
      >
        Rerender
      </button>
    </>
  );
}


const meta: Meta<typeof Demo> = {
  title: "Hooks/useCreation",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "useCreation 是 useMemo 或 useRef 的替代品。",
          }}
          apiDescription={
            "因为 useMemo 不能保证被 memo 的值一定不会被重新计算，而 useCreation 可以保证这一点。."
          }
          paramDs={{
            ds: [
              {
                name: "factory",
                type: htv("() => T"),
                defaultValue: "",
                description: "通过 factory 函数，可以避免性能隐患.",
              }, {
                name: "deps",
                type: <Tag color="red">React.DependencyList</Tag>,
                defaultValue: "",
                description: "缓存依赖数组",
              }
            ],
          }}
          returnDs={{
            type: <Tag color="purple">T</Tag>,
            description: "该钩子的返回的参数: ",
            ds: [
              {
                name: "value",
                type: htv("T"),
                description: "需要缓存的数据",
              }
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
