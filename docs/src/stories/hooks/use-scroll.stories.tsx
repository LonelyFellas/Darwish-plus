import {useScroll} from "@darwish/hooks-core";
import React from "react";
import type {Meta} from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import {Tag} from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const scrollRef = React.useRef<React.ElementRef<'div'>>(null);
  const {x, y} = useScroll(scrollRef);

  return (
    <div>
      <div>请水平或者垂直滚动鼠标滑轮：</div>
      <div>x: {x}, y: {y}</div>
      <div
        ref={scrollRef}
        style={{height: '400px', width: '400px', overflow: 'auto', background: 'gray'}}
      >
        <div style={{height: '1200px', width: '1200px'}}></div>
      </div>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useScroll",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "DOM 滚动的 ScrollX 和 ScrollY 的位置",
          }}
          apiDescription="计算DOM滚动的位置"
          paramDs={{
            ds: [
              {
                name: "Ref",
                type: htv("T extends React.RefObject<HTMLElement>"),
                defaultValue: "",
                description: "被监听 DOM 的 Ref 对象"
              }
            ],
          }}
          returnDs={{
            type: <Tag>T</Tag>,
            description: "该钩子的输入参数：",
            ds: [{
              name: 'x',
              type: htv('number'),
              description: '水平滚动的位置'
            }, {
              name: 'y',
              type: htv('number'),
              description: '垂直滚动的位置'
            }],
          }}
        />
      ),
    },
  },
};

export default meta;
