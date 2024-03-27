import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { useUpdate } from '@darwish/hooks-core';

export const Demo = () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        update
      </button>
    </>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useUpdate",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "A hook that returns a function which can be used to force the component to re-render.",
          }}
          apiDescription={
            "Force the component to re-render."
          }
          paramDs={{
            ds: [],
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
