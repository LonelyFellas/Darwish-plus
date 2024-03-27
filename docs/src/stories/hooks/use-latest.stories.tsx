import {useLatest} from "@darwish/hooks-core";
import {useState} from "react";
import type {Meta} from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import {Tag} from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [count, setCount] = useState(0);
  const latestCount = useLatest(count);

  function handleAlertClick() {
    setTimeout(() => {
      alert(`Latest count value: ${latestCount.current}`);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useLatest",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "This is mostly useful to get access to the latest value of some props or state inside an asynchronous callback, instead of that value at the time the callback was created from.",
          }}
          apiDescription="useLatest 返回的永远是最新值"
          paramDs={{
            ds: [
              {
                name: "value",
                type: htv("T"),
                defaultValue: "",
                description: "状态值"
              }
            ],
          }}
          returnDs={{
            type: <Tag>T</Tag>,
            description: "该钩子的输入参数：",
            ds: [
              {
                name: "value",
                type: htv("T"),
                description: "最新的状态值"
              }, {
                name: "setValue",
                type: htv("React.Dispatch<React.SetStateAction<T>>"),
                description: "修改状态值的函数"
              }
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
