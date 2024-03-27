import {useMount, useRafState } from "@darwish/hooks-core";
import type {Meta} from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import {Tag} from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useMount(() => {
    const onResize = (event: any) => {
      setState({
        width: event.target.innerWidth,
        height: event.target.innerHeight,
      });
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return <div>
    <h1>Window Size</h1>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </div>;
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useRafState",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "`useRafState` is a hook that is used to update the state of a component using `requestAnimationFrame`. It is similar to `useState` but it is more performant.",
          }}
          apiDescription="通过WebWorker来计算状态值，从而提高性能。"
          paramDs={{
            ds: [
              {
                name: "initialState",
                type: htv("T"),
                defaultValue: "",
                description: "状态值"
              }
            ],
          }}
          returnDs={{
            type: <Tag>T</Tag>,
            description: "该钩子的输入参数：",
            ds: [{
              name: 'state',
              type: htv('T'),
              description: '最新的状态值'
            }, {
              name: 'setState',
              type: htv(' (value: (S | ((prevState: S) => S))) => void'),
              description: '修改状态值的action'
            }],
          }}
        />
      ),
    },
  },
};

export default meta;
