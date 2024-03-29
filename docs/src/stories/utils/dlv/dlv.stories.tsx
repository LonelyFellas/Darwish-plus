import type { Meta } from "@storybook/react";
import ReactMarkdownPreview from "@uiw/react-markdown-preview";

const ParametersStr = `
### Parameters
| Name | Type | DefaultValue | Description |
| - | - | - | - |
| \`obj\` | \`Darwish.AnyObj\` | - | The object to query. |
| \`path\` | \`string-string[]\` | - | The path of the property to get. |
| \`def\` | \`string\` | - | The value returned for undefined resolved values. |
| \`p\` | \`number\` | \`0\` | The index of the key. |
| \`undef\` | \`T\` | - | The undefined value. |
### ReturnValue
| Name | Type | Description |
| - | - | - |
| \`result\` | \`unknown\` | 抽取截止的属性的值. |
`;
export const Parameters = () => <ReactMarkdownPreview source={ParametersStr} />
export const Demo = () => <h1>Demo</h1>
const meta: Meta<typeof Demo> = {
  title: "Utils/utils-dlv",
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
