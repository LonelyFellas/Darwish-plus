import { useEventListener } from "@darwish/hooks-core";
import { useState, useRef } from "react";
import type {Meta} from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEventListener(ref, 'click', () => {
    setValue((prev) => prev + 1);
  });

  return (
    <button ref={ref} type="button">
      You click {value} times
    </button>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useEventListener",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "进一步的处理了addEventListener和removeEventListener",
          }}
          apiDescription="Dom的监听事件"
          paramDs={{
            ds: [
              {
                name: "name",
                type: htv("Window | React.RefObject<HTMLElement>"),
                defaultValue: "",
                description: "监听的对象"
              }, {
                name: "eventName",
                type: htv("string"),
                defaultValue: "",
                description: "监听的事件"
              }, {
                name: "handler",
                type: htv("EventListener"),
                defaultValue: "",
                description: "事件处理函数"
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
