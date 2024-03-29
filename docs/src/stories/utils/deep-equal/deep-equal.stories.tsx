import type { Meta } from "@storybook/react";
import ReactMarkdownPreview from "@uiw/react-markdown-preview";

const ParametersStr = `
### Parameters
| Name | Type | DefaultValue | Description |
| - | - | - | - |
| \`lfs\` | \`T\` | - | 变量1. |
| \`rfs\` | \`T\` | - | 变量2. |
### ReturnValue
| Name | Type | Description |
| - | - | - |
| \`result\` | \`boolean\` | 是否深度相等. |
`;
export const Parameters = () => <ReactMarkdownPreview source={ParametersStr} />
export const Demo = () => <h1>Demo</h1>
const meta: Meta<typeof Demo> = {
  title: "Utils/deep-equal",
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
