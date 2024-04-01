import { useExternal } from "@darwish/hooks-core";
import { useState } from "react";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view/index.tsx";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const status = useExternal(
    "https://ahooks.js.org/useExternal/test-external-script.js",
    {
      js: {
        async: true,
      },
    }
  );

  return (
    <>
      <p>
        Status: <b>{status}</b>
      </p>
      <p>
        Response:{" "}
        <i>{status === "ready" ? window.TEST_SCRIPT?.start() : "-"}</i>
      </p>
    </>
  );
};
export const Demo1 = () => {
  const [path, setPath] = useState(
    "https://ahooks.js.org/useExternal/bootstrap-badge.css"
  );

  const status = useExternal(path);

  return (
    <>
      <p>
        Status: <b>{status}</b>
      </p>
      <div className="bd-example" style={{ wordBreak: "break-word" }}>
        <span className="badge badge-pill badge-primary">Primary</span>
        <span className="badge badge-pill badge-secondary">Secondary</span>
        <span className="badge badge-pill badge-success">Success</span>
        <span className="badge badge-pill badge-danger">Danger</span>
        <span className="badge badge-pill badge-warning">Warning</span>
        <span className="badge badge-pill badge-info">Info</span>
        <span className="badge badge-pill badge-light">Light</span>
        <span className="badge badge-pill badge-dark">Dark</span>
      </div>
      <br />
      <button
        type="button"
        style={{ marginRight: 8 }}
        onClick={() => setPath("")}
      >
        unload
      </button>
      <button
        type="button"
        style={{ marginRight: 8 }}
        onClick={() =>
          setPath("https://ahooks.js.org/useExternal/bootstrap-badge.css")
        }
      >
        load
      </button>
    </>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useExternal",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description:
              "动态注入 JS 或 CSS 资源，useExternal 可以保证资源全局唯一。",
          }}
          examples={[Demo1]}
          apiDescription="管理应用程序的标题的hook"
          paramDs={{
            ds: [
              {
                name: "title",
                type: htv("string"),
                defaultValue: "--",
                description: "页面标题",
              },
              {
                name: "restoreOnUnmount",
                type: htv("boolean"),
                defaultValue: "false",
                description: "是否在卸载时恢复原始标题",
              },
            ],
          }}
          returnDs={{
            type: <Tag></Tag>,
            description: "该钩子的输入参数：",
            ds: [],
          }}
        />
      ),
    },
  },
};

export default meta;
