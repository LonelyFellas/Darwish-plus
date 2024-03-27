import { useList } from "@darwish/hooks-core";
import type { Meta } from "@storybook/react";
import HookDocsView from "../../components/hook-docs-view";
import { Tag } from "antd";
import htv from "../../utils/handleTypeView.tsx";

export const Demo = () => {
  const [
    list,
    {
      set,
      push,
      updateAt,
      insertAt,
      update,
      updateFirst,
      upsert,
      sort,
      filter,
      removeAt,
      clear,
      reset,
    },
  ] = useList([1, 2, 3]);

  return (
    <div>
      <button onClick={() => set([2, 3, 4])}>set: 将值设置为 [2, 3, 4]</button>
      <button onClick={() => push(new Date().getTime())}>
        push: 从末尾添加一个值
      </button>
      <button onClick={() => updateAt(1, new Date().getTime())}>
        upDateAte: 替换Index:1的值
      </button>
      <button onClick={() => insertAt(1, new Date().getTime())}>
        insertAt: 在index: 1插入一个值
      </button>
      <button onClick={() => update((a, b) => a > b, 2)}>
        update: 所有满足第一个参数的表达式的位置就更新(2)
      </button>
      <button onClick={() => updateFirst((a, b) => a > b, 3)}>
        updateFirst: 第一个满足第一个参数的表达式的位置就更新(3)
      </button>
      <button onClick={() => upsert((a, b) => a > b, 4)}>
        upset: 所有满足第一个参数的表达式的位置就更新(4),不满足就push进去
      </button>
      <button onClick={() => sort((a, b) => a - b)}>
        sort: 自定义排序规则
      </button>
      <button onClick={() => filter((a) => a % 2 === 0)}>filter: 数过滤</button>
      <button onClick={() => removeAt(1)}>removeAt: 移除Index:1的値</button>
      <button onClick={clear}>clear: 清空</button>
      <button onClick={reset}>reset: 重置</button>
      <br />
      <textarea
        style={{
          marginTop: '20px',
          width: '100%',
          height: 100,
          fontSize: 22,
          color: '#336699',
        }}
        disabled
        value={JSON.stringify(list)}
      />
    </div>
  );
};

const meta: Meta<typeof Demo> = {
  title: "Hooks/useList",
  component: Demo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <HookDocsView
          args={{
            description: "对数组类型的状态进行高度管理",
          }}
          apiDescription="Tracks an array and provides methods to modify it.
            To cause component re-render you have to use these methods instead of direct interaction with array - it won't cause re-render.
            We can ensure that actions object and actions itself will not mutate or change between renders, so there is no need to add it to useEffect dependencies and safe to pass them down to children.
            Note: remove action is deprecated and actually is a copy of removeAt action. Within closest updates it will gain different functionality."
          paramDs={{
            ds: [
              {
                name: "initialList",
                type: htv("Array<T>"),
                defaultValue: "[ ]",
                description: "初始化的数组"
              }
            ],
          }}
          returnDs={{
            type: <Tag>T</Tag>,
            description: "该钩子的输入参数：",
            ds: [
              {
                name: "set",
                type: htv("(value: UseHookStates<T[]>) => void;"),
                description: "Set new List instead old one"
              }, {
                name: "push",
                type: htv("(value: T) => void"),
                description: "Add item(s) at the end of list"
              }, {
                name: 'updateAt',
                type: htv("(index: number, value: T) => void"),
                description: "Replace item at given position. If item at given position not exists it will be set"
              }, {
                name: 'insertAt',
                type: htv("(index: number, insertValue: T) => void;"),
                description: "Insert item at given position, all items to the right will be shifted;"
              }, {
                name: "update",
                type: htv("(predicate: (a: T, b: T) => boolean, updateValue: T) => void"),
                description: "Replace all items that matches predicate with given one;"
              }, {
                name: "updateFirst",
                type: htv("(predicate: (a: T, b: T) => boolean, updateValue: T) => void"),
                description: "Replace first item that matches predicate with given one;"
              }, {
                name: "upsert",
                type: htv("(predicate: (a: T, b: T) => boolean, updateValue: T) => void"),
                description: "Like updateFirst but in case of predicate miss - pushes item to the list"
              }, {
                name: "filter",
                type: htv("(callbackFn: (value: T, index?: number, array?: T[]) => boolean, thisArg?: any) => void"),
                description: "Same as native Array's method"
              }, {
                name: "sort",
                type: htv("(compareFn: (a: T, b: T) => number) => void"),
                description: "Sort list with given sorting function;"
              }, {
                name: "removeAt",
                type: htv("(index: number) => void"),
                description: "Remove item at given position"
              }, {
                name: "clear",
                type: htv("() => void"),
                description: "Clear list"
              }, {
                name: "reset",
                type: htv("() => void"),
                description: "Reset list to initial value"
              }
            ],
          }}
        />
      ),
    },
  },
};

export default meta;
