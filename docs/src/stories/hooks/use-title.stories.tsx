import {useTitle} from "@darwish/hooks-core";
import type {Meta} from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import {Tag} from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  useTitle('Page Title');

  return (
    <div>
      <p>Set title of the page.</p>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useTitle",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "用于设置页面标题",
          }}
          apiDescription="管理应用程序的标题的hook"
          paramDs={{
            ds: [
              {
                name: "title",
                type: htv("string"),
                defaultValue: "--",
                description: "页面标题"
              }, {
                name: 'restoreOnUnmount',
                type: htv("boolean"),
                defaultValue: "false",
                description: "是否在卸载时恢复原始标题"
              }
            ],
          }}
          returnDs={{
            type: <Tag></Tag>,
            description: "该钩子的输入参数：",
            ds: [],
          }}
        />
      ),
    },
  },
};

export default meta;
