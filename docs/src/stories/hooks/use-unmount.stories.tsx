import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { useUnmount, useBoolean } from '@darwish/hooks-core';

const MyComponent = () => {
  useUnmount(() => {
    console.info('unmount');
  });

  return <p>Hello World!</p>;
};
export const Demo = () => {
  const {value, toggle } = useBoolean(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {value? 'unmount' : 'mount'}
      </button>
      {value && <MyComponent />}
    </>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useUnmount",
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
