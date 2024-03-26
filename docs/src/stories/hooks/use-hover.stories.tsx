import {useHover} from "@darwish/hooks-core";
import type {Meta} from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import {Tag} from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
    const element = (hovered: boolean) => <div>Hover me! {hovered && 'Thanks!'}</div>;
    const [hoverable, hovered] = useHover(element);

    return (
      <div>
        {hoverable}
        <div>{hovered ? 'HOVERED' : ''}</div>
      </div>
    );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useHover",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "监听鼠标经过特定元素",
            beCare: "暂无注意描述",
            sourceUrl: "https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/useHover/index.ts",
          }}
          apiDescription="React UI sensor hooks that track if some element is being hovered by a mouse."
          paramDs={{
            ds: [
              {
                name: "element",
                type: htv("hoveredView: JSX.Element | ((hovered: boolean) => JSX.Element)"),
                defaultValue: "",
                description: "需要监听的元素"
              },
            ],
          }}
          returnDs={{
            type: <Tag>T</Tag>,
            description: "该钩子的输入参数：",
            ds: [{
              name: "hoverable",
              type: htv("JSX.Element"),
              description: "监听的元素"
            }, {
              name: "hovered",
              type: htv("boolean"),
              description: "是否经过"
            }],
          }}
        />
      ),
    },
  },
};

export default meta;
