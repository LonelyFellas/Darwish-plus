import type { Meta } from "@storybook/react";
import ReactMarkdownPreview from "@uiw/react-markdown-preview";

const ParametersStr = `
### Parameters
| Name | Type | DefaultValue | Description |
| - | - | - | - |
| \`name\` | \`T\` | - | 被判断的对象. | 
### ReturnValue
| Name | Type | Description |
| - | - | - |
| \`result\` | \`number-string-object-function.....\` | 小写string的类型的结果. |


`;
export const Parameters = () => <ReactMarkdownPreview source={ParametersStr} />
export const Demo = () => <h1>Demo</h1>
const meta: Meta<typeof Demo> = {
  title: "Utils/type-of-data",
  component: Demo,
  // tags: ["autodocs"],
  parameters: {

    docs: {
      page: () => (
        <div />
      ),
    },
  },
};

export default meta;
