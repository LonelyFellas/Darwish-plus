import { Button } from "antd";
import { useState } from "react";
import { useUpdateEffectOnce } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";


export const Demo = () => {
  const [count, setCount] = useState(0);
  useUpdateEffectOnce(() => {
    console.log('Running effect once on mount')

    return () => {
      console.log('Running clean-up of effect on unmount')
    }

  }, count == 1);

  return <div>
      <Button onClick={() => setCount(prev => prev + 1)}>Count ++</Button>
      <h1>Count: {count}</h1>
      <h1>请查看控制台的日志信息: count=1时， 打印日志信息</h1>
    </div>;
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useUpdateEffectOnce",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "React lifecycle hook that runs an effect only once.",
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
