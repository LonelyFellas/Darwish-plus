import { useEffectOnce } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";


export const Demo = () => {
  useEffectOnce(() => {
    console.log('Running effect once on mount')

    return () => {
      console.log('Running clean-up of effect on unmount')
    }
  });

  return <h1>请查看控制台的日志信息:</h1>;
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useEffectOnce",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "React lifecycle hook that runs an effect only once.",
            sourceUrl:
              "https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/useEffectOnce/index.ts",
          }}
          apiDescription={
            "apply an effect only once when the component mounts."
          }
          paramDs={{
            ds: [
              {
                name: "effect",
                type: <Tag color="red">React.EffectCallback</Tag>,
                defaultValue: "",
                description: "The effect to run only once.",
              }
            ],
          }}
          returnDs={{
            ds: []
          }}
        />
      ),
    },
  },
};

export default meta;
