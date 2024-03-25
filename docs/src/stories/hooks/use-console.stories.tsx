import { Tag } from "antd";
import type { Meta } from "@storybook/react";
import ReactMarkdownPreview  from "@uiw/react-markdown-preview"
import CodePreview from "@uiw/react-code-preview";
import HookPreview from "../../components/hook-preview"
import { useConsole } from "@darwish/hooks-core"

const docs= `
  # useConsole
  
  ### 需求：
  在开发打包配置中，我们可能用插件把这个应用项目的\`console.log\`剔除掉， 但是在某些需求和调试中，却想让一部分人看到一些日志信息，
  从而有个这个钩子。
  
  主要是为了在生产环境或者测试环境下让特定的人员(比如开发人员), 能够看到一些日志 \`log\`,\`warn\`,\`dir\`, \`error\`信息。
`

export const DevDemo= () => {
  const { log } = useConsole({
    env: "development",
    isAuth: true, // 当 env = dev,  忽略 isAuth
  })

  log("这是一条日志信息");
  return (
    <CodePreview code={HookPreview(`
      <h1>请查看<Tag>development</Tag>浏览器控制台</h1>
      <h1>(当 env = dev, 忽略 isAuth, 同正常log没什么区别)</h1>
    `, 'import { Tag } from "antd"')} dependencies={{Tag}}/>
  );
};

export const ProductionAuthTrue = () => {
  const { log } = useConsole({
    env: "production",
    isAuth: true,
  })

  log("isAuth = true, 这是一条日志信息");
  return (
    <CodePreview code={HookPreview(`
      <h1>请查看<Tag>production</Tag>浏览器控制台</h1>
      <h1>(当 env = production, isAuth为true才会输出日志信息)</h1>
    `, 'import { Tag } from "antd"')} dependencies={{Tag}}/>
  );
}
export const ProductionAuthFalse = () => {
  const { log } = useConsole({
    env: "production",
    isAuth: false,
  })

  log("isAuth = false, 这条信息被隐藏了");
  return (
    <CodePreview code={HookPreview(`
      <h1>请查看<Tag>production</Tag>浏览器控制台</h1>
      <h1>(当 env = production, isAuth为false日志信息被隐藏了)</h1>
    `, 'import { Tag } from "antd"')} dependencies={{Tag}}/>
  );
}
const meta: Meta<any> = {
  title: "Hooks/useConsole",
  component: DevDemo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <ReactMarkdownPreview source={docs} />
      ),
    },
  },
};

export default meta;
