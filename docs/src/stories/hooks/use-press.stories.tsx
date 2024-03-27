import { usePress } from "@darwish/hooks-core";
import { useState } from "react";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [pressCount, setPressCount] = useState(0);
  const element = (
    <button>
      <h1>Count: {pressCount}</h1>
    </button>
  );
  const PressView = usePress(element, () => {
    setPressCount((prev) => prev + 1);
  });
  return (
    <div>
      <PressView />
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/usePress",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "鼠标左键按压或者手指按压",
            beCare: "注意：⚠️鼠标右键按压也允许(可配置不允许)",
          }}
          apiDescription="React sensor hook that fires a callback after long pressing."
          paramDs={{
            ds: [
              {
                name: "Element",
                type: htv("React.JSX.Element | () => React.JSX.Element"),
                defaultValue: "",
                description: "需要检测的按压的元素"
              }, {
                name: 'PressCallback',
                type: htv("() => void"),
                defaultValue: "",
                description: "按压后的回调函数"
              }, {
                name: 'pressTime',
                type: htv("number"),
                defaultValue: "300",
                description: "计算规则按压的时间"
              }
            ],
          }}
          returnDs={{
            type: <Tag>T</Tag>,
            description: "该钩子的输入参数：",
            ds: [
              {
                name: "PressElement",
                type: htv("React.JSX.Element"),
                description: "返回一个按压的元素"
              },
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
