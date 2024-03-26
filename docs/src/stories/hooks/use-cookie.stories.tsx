import { useState, useEffect } from "react";
import { useCookie } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  // import { useCookie } from "@darwish/hooks-core";
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  // import { useState, useEffect } from "react";
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    deleteCookie();
  }, []);

  const updateCookieHandler = () => {
    updateCookie(`my-awesome-cookie-${counter}`);
    setCounter((c) => c + 1);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <br />
      <button onClick={deleteCookie}>Delete Cookie</button>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useCookie",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "Manages a cookie value with utility functions.",
            sourceUrl:
              "https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/useCookie/index.ts",
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
            description: "An array containing the cookie value and utility functions to manipulate the cookie.",
            ds: [
              {
                name: "cookieValue",
                type: htv("string | null"),
                description: "The current value of the cookie.",
              },
              {
                name: "updateCookie",
                type: htv("(value: string, option?: jsCookie.CookieAttributes) => void"),
                description: "Function to update the cookie value.",
              },
              {
                name: "deleteCookie",
                type: htv("() => void"),
                description: "Function to delete the cookie.",
              }
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
