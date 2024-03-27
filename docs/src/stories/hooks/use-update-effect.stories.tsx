import { useEffect, useState } from 'react';
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import { useUpdateEffect } from '@darwish/hooks-core';

export const Demo = () => {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);

  useEffect(() => {
    setEffectCount((c) => c + 1);
  }, [count]);

  useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
    return () => {
      // do something
    };
  }, [count]); // you can include deps array if necessary

  return (
    <div>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useUpdateEffect",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "A hook alike useEffect but skips running the effect for the first time.",
          }}
          apiDescription={
            "The API is exactly the same as React.useEffect."
          }
          paramDs={{
            ds: [
              {
                name: "effect",
                type: <Tag color="red">React.EffectCallback</Tag>,
                defaultValue: "",
                description: "只在依赖项更新时运行的 effect。",
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
