import type { Meta } from "@storybook/react";
import ReactMarkdownPreview from "@uiw/react-markdown-preview";

const ParametersStr = `
### Parameters
| Name | Type | DefaultValue | Description |
| - | - | - | - |
| \`name\` | \`T\` | - | 需要转化的对象. |

### ReturnValue
| Name | Type | Description |
| - | - | - |
| \`result\` | \`number\` | 数字类型的结构. |


`;
export const Parameters = () => <ReactMarkdownPreview source={ParametersStr} />
export const Demo = () => <h1>Demo</h1>
const meta: Meta<typeof Demo> = {
  title: "Utils/to-number",
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
