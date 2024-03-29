import type { Meta } from "@storybook/react";
import ReactMarkdownPreview from "@uiw/react-markdown-preview";

const ParametersStr = `
### Parameters
| Name | Type | DefaultValue | Description |
| - | - | - | - |
| \`name\` | \`T\` | - | 被克隆的对象. |

### ReturnValue
| Name | Type | Description |
| - | - | - |
| \`result\` | \`T\` | 返回克隆后的对象. |


`;
export const Parameters = () => <ReactMarkdownPreview source={ParametersStr} />
export const Demo = () => <h1>Demo</h1>
const meta: Meta<typeof Demo> = {
  title: "Utils/clone-deep",
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
