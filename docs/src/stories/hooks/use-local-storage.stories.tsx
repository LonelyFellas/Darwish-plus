import { useLocalStorage } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [storage, setStorage, removeStorage] =
    useLocalStorage<number>("darwish");

  console.log("local-storage.darwish: ", storage);
  return (
    <div>
      <h1>Local-Storage: {storage}</h1>
      <button
        onClick={() => {
          setStorage(new Date().getTime());
        }}
      >
        update{" "}
      </button>
      <button
        onClick={() => {
          removeStorage();
        }}
      >
        remove
      </button>
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useLocalStorage",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "浏览器 Local 储存的增删改的操作，进行了多层封装.",
          }}
          apiDescription={htv("管理 LocalStorage 的增删改查", "#336699")}
          paramDs={{
            ds: [
              {
                name: "key",
                type: htv("string"),
                defaultValue: "",
                description: htv("查询的 localstorage 的属性名", "#336699"),
              },
            ],
          }}
          returnDs={{
            type: <Tag>UseStorageOutput</Tag>,
            description: "该钩子的输入参数：",
            ds: [
              {
                name: "storage",
                type: htv("string | null | undefined"),
                description: htv("localstorage 的值", "#336699"),
              },
              {
                name: "updateStorage",
                type: htv("(updateVal: unknown) => void"),
                description: htv("更新 localstorage 值函数", "#336699"),
              },
              {
                name: "removeStorage",
                type: htv("() => void;"),
                description: htv("删除 localstorage 值函数", "#336699"),
              },
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
