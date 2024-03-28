import {useFavicon} from "@darwish/hooks-core";
import type {Meta} from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import {Tag} from "antd";
import htv from "../../utils/handleTypeView.tsx";
import {useState} from "react";

export const Demo = () => {
  const DEFAULT_FAVICON_URL = 'https://avatars.githubusercontent.com/u/38754760?v=4';
  const GOOGLE_FAVICON_URL = 'https://www.google.com/favicon.ico';

  const [url, setUrl] = useState<string>(DEFAULT_FAVICON_URL);

  useFavicon(url);

  return (
    <>
      <p>
        Current Favicon: <span>{url}</span>
      </p>
      <button
        style={{ marginRight: 16 }}
        onClick={() => {
          setUrl(GOOGLE_FAVICON_URL);
        }}
      >
        Change To Google Favicon
      </button>
      <button
        onClick={() => {
          setUrl(DEFAULT_FAVICON_URL);
        }}
      >
        Back To Darwish Favicon
      </button>
    </>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useFavicon",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "设置页面的 favicon。",
          }}
          apiDescription="管理应用程序的 favicon 的 hook"
          paramDs={{
            ds: [
              {
                name: "href",
                type: htv("string"),
                defaultValue: "--",
                description: htv("favicon 地址, 支持 svg/png/ico/gif 后缀的图片")
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
