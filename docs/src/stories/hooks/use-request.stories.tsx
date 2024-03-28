import Mock from 'mockjs';
import { useRequest } from "@darwish/hooks-core";
import {useEffect, useRef, useState} from "react";
import {message, Tag} from "antd";
import type {Meta} from "@storybook/react";
import ReactMarkdownPreview from "@uiw/react-markdown-preview"
import {Canvas} from "@storybook/blocks";

const TR =(props: React.PropsWithChildren<{}>) => <Tag color="blue">{props.children}</Tag>
const docs = `
  # useRequest
  
  ### 需求：
  ***useRequest*** 是一个强大的异步数据管理的 \`Hooks\`，React 项目中的网络请求场景使用 ***useRequest*** 就够了。 
  
  \`\`\`shell
    $ npm install @darwish/useRequest@latest
  \`\`\`
  ### 简单实例 
  \`\`\`jsx 
  // 示例1:
  function getUsername() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock('@name'));
      }, 1000);
    });
  }
  const { data, error, loading } = useRequest(getUsername);
  // 示例2:
  function changeUsername(username: string): Promise<{ success: boolean }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  }
  const { loading, run } = useRequest(changeUsername, {
    manual: true
  });
  \`\`\`
  
  上面两个例子，我们演示了 ***useRequest*** 最基础的用法，接下来的我们开始逐个详细介绍 ***useRequest*** 的特性。
  
  ## API
  
  ### Parameters
  | Name | type | DefaultValue | Description |
  | ---- | ---- | ------------ | ----------- |
  | \`defaultData\` | \`TData-null\`| \`null\` | 默认数据|
  | \`manual\` | \`boolean\` | \`false\` | 是否手动触发|
  | \`defaultParams\` | \`Partial<TParams>[]\` | \`[]\` | 默认请求入参|
  | \`refreshDeps\` | \`React.DependencyList\` | \`[]\` | 触发请求的依赖数组|
  | \`onSuccess\` | \`(data: TData) => void;\` | \`--\` | 请求成功的回调|
  | \`onError\` | \`(error: unknown) => void;\` | \`--\` | 请求失败的回调|
  | \`onBefore\` | \`() => void;\` | \`--\` | 请求之前的回调|
  | \`onFinally\` | \`() => void;\` | \`--\` | 请求最终后的回调(失败或者成功后都会执行)|
  ### Returns
  | Name | Type | Description |
  | ---- | ---- | ----------- |
  | \`loading\` | \`boolean\` | 加载状态 |
  | \`data\` | \`data\` | 数据结果 |
  | \`error\` | \`Error\` | 错误原因 |
  | \`params\` | \`TParam-[]\` | 请求参数| 
  | \`run\` | \`(...params: TParams) => void\` | 手动执行函数 | 
  | \`refresh\` | \`() => void\` | 重新刷新 | 
  | \`mutate\` | \`(data?: TData-((oldData?: TData) => (TData-undefined))) => void,\` | 修改请求数据的函数 | 
  | \`cancel\` | \`() => void\` | 取消请求 | 
`


export const SimpleUseDemo = () => {
  // 为了让框架能看到代码，我这里放在里面，
  function getUsername(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve(Mock.mock('@name'));
        } else {
          reject(new Error('Failed to get username'));
        }
      }, 1000);
    });
  }
  const { data, error, loading } = useRequest(getUsername);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Username: {data}</div>;
};

export const RunDemo = () => {
  function editUsername(username: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject(new Error('Failed to modify username'));
        }
      }, 1000);
    });
  }
  const [state, setState] = useState('');

  const { loading, run } = useRequest(editUsername, {
    manual: true,
    onSuccess: (_, params: any[]) => {
      setState('');
      message.success(`The username was changed to "${params[0]}" !`);
    },
    onError: (error: any) => {
      message.error(error.message);
    },
  });

  return (
    <div>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button disabled={loading} type="button" onClick={() => run(state)}>
        {loading ? 'Loading' : 'Edit'}
      </button>
    </div>
  );
}
export const LifeTimeDemo = () => {
  function editUsername(username: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject(new Error('Failed to modify username'));
        }
      }, 1000);
    });
  }
  const [state, setState] = useState('');

  const { loading, run } = useRequest(editUsername, {
    manual: true,
    onBefore: (params) => {
      message.info(`Start Request: ${params[0]}`);
    },
    onSuccess: (result: any, params: any[]) => {
      setState('');
      message.success(`The username was changed to "${params[0]}" !`);
    },
    onError: (error: any) => {
      message.error(error.message);
    },
    onFinally: (params: any[], result, error) => {
      message.info(`Request finish`);
    },
  });

  return (
    <div>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button disabled={loading} type="button" onClick={() => run(state)}>
        {loading ? 'Loading' : 'Edit'}
      </button>
    </div>
  );
}

export const RefreshDemo = () => {
  function getUsername(id: number): Promise<string> {
    console.log('use-request-refresh-id', id);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock('@name'));
      }, 1000);
    });
  }
  const { data, loading, run, refresh } = useRequest((id: number) => getUsername(id), {
    manual: true,
  });

  useEffect(() => {
    run(1);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <p>Username: {data}</p>
      <button onClick={refresh} type="button">
        Refresh
      </button>
    </div>
  );
}
export const ActionDataDemo = () => {
  function getUsername(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock('@name'));
      }, 1000);
    });
  }

  function editUsername(username: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject(new Error('Failed to modify username'));
        }
      }, 1000);
    });
  }
  // store last username
  const lastRef = useRef<string>(null);

  const [state, setState] = useState('');

  // get username
  const { data: username, mutate } = useRequest(getUsername);

  // edit username
  const { run: edit } = useRequest(editUsername, {
    manual: true,
    onSuccess: (result, params) => {
      setState('');
      message.success(`The username was changed to "${params[0]}" !`);
    },
    onError: (error: any) => {
      message.error(error.message);
      mutate(lastRef.current);
    },
  });

  const onChange = () => {
    lastRef.current = username;
    mutate(state);
    edit(state);
  };

  return (
    <div>
      <p>Username: {username}</p>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button type="button" onClick={onChange}>
        Edit
      </button>
    </div>
  );
}

export const CancelDemo = () => {
  function editUsername(username: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject(new Error('Failed to modify username'));
        }
      }, 1000);
    });
  }
  const [state, setState] = useState('');

  const { loading, run, cancel } = useRequest(editUsername, {
    manual: true,
    onSuccess: (result, params) => {
      setState('');
      message.success(`The username was changed to "${params[0]}" !`);
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  return (
    <div>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button disabled={loading} type="button" onClick={() => run(state)}>
        {loading ? 'Loading' : 'Edit'}
      </button>
      <button type="button" onClick={cancel} style={{ marginLeft: 16 }}>
        Cancel
      </button>
    </div>
  );

}
const meta: Meta<unknown> = {
  title: "请求/useRequest",
  component: SimpleUseDemo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <div style={{height: '100%', overflowY: 'auto'}}>
          <ReactMarkdownPreview source={docs}/>
          <h1 style={{marginTop: '30px'}}>Ep1:默认请求</h1>
          <div>默认情况下，<TR>useRequest</TR> 第一个参数是一个异步函数，在组件初始化时，会自动执行该异步函数。同时自动管理该异步函数的
            <TR>loading</TR> , <TR>data</TR> , <TR>error</TR>等状态。
          </div>
          <Canvas of={SimpleUseDemo} sourceState="shown"/>
          <h1 style={{marginTop: '25px'}}>Ep2:手动触发</h1>
          <div>
            如果设置了 <TR>options.manual = true</TR>，则 <TR>useRequest</TR> 不会默认执行，需要通过 <TR>run</TR> 来触发执行。
          </div>
          <Canvas of={RunDemo} sourceState="shown"/>
          <h1 style={{marginTop: '25px'}}>Ep3:生命周期</h1>
          <div>
            <TR>useRequest</TR> 提供了以下几个生命周期配置项，供你在异步函数的不同阶段做一些处理。
          </div>
          <ul>
            <li><TR>onBefore</TR>: 请求之前触发</li>
            <li><TR>onSuccess</TR>: 请求成功触发</li>
            <li><TR>onError</TR>: 请求失败触发</li>
            <li><TR>onFinally</TR>: 请求完成触发</li>
          </ul>
          <Canvas of={LifeTimeDemo} sourceState="shown"/>
          <h1 style={{marginTop: '25px'}}>Ep4:刷新(重复上一次请求)</h1>
          <div>
            <TR>useRequest</TR> 提供了 <TR>refresh</TR> 方法，使我们可以使用上一次的参数，重新发起请求。
          </div>
          <Canvas of={RefreshDemo} sourceState="shown"/>
          <h1 style={{marginTop: '25px'}}>Ep4:立即变更数据</h1>
          <div>
            <TR>useRequest</TR> 提供了 <TR>mutate</TR>, 支持立即修改 <TR>useRequest</TR> 返回的 <TR>data</TR> 参数。
            <TR>mutate</TR> 的用法与 <TR>React.setState</TR> 一致，支持 <TR>{"mutate(newData) 和 mutate((oldData) => newData)"}</TR> 两种写法。
          </div>
          <Canvas of={ActionDataDemo} sourceState="shown"/>
          <h1>取消响应</h1>
          <div>
            <TR>useRequest</TR> 提供了 <TR>cancel</TR> 方法，用于忽略当前 promise 返回的数据和错误。
            <div style={{color: 'darkred'}}>注意：调用 <TR>cancel</TR> 函数并不会取消 <TR>promise</TR> 的执行</div>
          </div>
          <Canvas of={CancelDemo} sourceState="shown"/>
        </div>
      ),
    },
  },
};

export default meta;
