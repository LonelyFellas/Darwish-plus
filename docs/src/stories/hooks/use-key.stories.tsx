import {useKey} from "@darwish/hooks-core";
import {useRef} from "react";
import { isBlanks} from "@darwish/utils-is";
import type {Meta} from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import {Tag} from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
    const ref = useRef<React.ElementRef<'input'>>(null);
    const search = () => {
      if (ref.current && isBlanks(ref.current.value.trim())) {
        alert('输入的内容不能为空');
        ref.current.value = '';
      } else {
        alert('search');
      }
    };
    useKey('Enter', search);
    return (
      <div>
        <input ref={ref} />
        <p>Enter 'arrow enter' to search data</p>
      </div>
    );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useKey",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "监听键盘的某一个键位(内部使用了useLayoutEffect钩子)，从而触发一个回调.",
            beCare: "暂无注意描述",
            sourceUrl: "https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/useKey/index.ts",
          }}
          apiDescription="React UI sensor hook that executes a handler when a keyboard key is used."
          paramDs={{
            ds: [
              {
                name: "code",
                type: htv("string"),
                defaultValue: "",
                description: "键盘的英文名字"
              }, {
                name: "callback",
                type: htv("() => void"),
                defaultValue: "",
                description: "按下键位触发回调函数"
              }
            ],
          }}
          returnDs={{
            type: <Tag>T</Tag>,
            description: "该钩子的输入参数：",
            ds: [],
          }}
        />
      ),
    },
  },
};

export default meta;
