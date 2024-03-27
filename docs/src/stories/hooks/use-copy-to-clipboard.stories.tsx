import { useCopyToClipboard } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";


export function Demo() {
// import { useCopyToClipboard } from '@darwish/hooks-core'
  const [copiedText, copy] = useCopyToClipboard()

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log('Copied!', { text })
      })
      .catch((error: unknown) => {
        console.error('Failed to copy!', error)
      })
  }

  return (
    <>
      <h1>Click to copy:</h1>
      <div style={{ display: 'flex' }}>
        <button onClick={handleCopy('A')}>A</button>
        <button onClick={handleCopy('B')}>B</button>
        <button onClick={handleCopy('C')}>C</button>
      </div>
      <p>Copied value: {copiedText ?? 'Nothing is copied yet!'}</p>
    </>
  )
}


const meta: Meta<typeof Demo> = {
  title: "Hooks/useCopyToClipboard",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "Copies text to the clipboard.",
          }}
          apiDescription={
            "Custom hook that copies text to the clipboard with a utility function."
          }
          // paramDs={{
          //   ds: [
          //     {
          //       name: "cookieName",
          //       type: <Tag color="red">string</Tag>,
          //       defaultValue: "",
          //       description: "The name of the cookie to be handled.",
          //     },
          //   ],
          // }}
          returnDs={{
            type: <Tag color="purple">[CopiedValue, CopyFn]</Tag>,
            description: "An array containing the copied text and the function to copy text to the clipboard.",
            ds: [
              {
                name: "copiedText",
                type: htv("string | null"),
                description: "The copied text.",
              },
              {
                name: "copy",
                type: htv("(text: string) => Promise<boolean>"),
                description: "Function to copy text to the clipboard.",
              }
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
