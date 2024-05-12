import { useSize } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";
import { useRef } from "react";

export const Demo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const a = useSize(ref);

  console.log(a);
  return (
    <div
      ref={ref}
      style={{ width: "200px", height: "100px", backgroundColor: "red" }}
    >
      Hello World
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useSize",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "Manages a cookie value with utility functions.",
          }}
          apiDescription={
            "Custom hook that handles boolean state with useful utility functions."
          }
          paramDs={{
            ds: [
              {
                name: "cookieName",
                type: <Tag color="red">string</Tag>,
                defaultValue: "",
                description: "The name of the cookie to be handled.",
              },
            ],
          }}
          returnDs={{
            type: <Tag>UseCookieOutput</Tag>,
            description:
              "An array containing the cookie value and utility functions to manipulate the cookie.",
            ds: [
              {
                name: "cookieValue",
                type: htv("string | null"),
                description: "The current value of the cookie.",
              },
              {
                name: "updateCookie",
                type: htv(
                  "(value: string, option?: jsCookie.CookieAttributes) => void"
                ),
                description: "Function to update the cookie value.",
              },
              {
                name: "deleteCookie",
                type: htv("() => void"),
                description: "Function to delete the cookie.",
              },
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
