import { Title, Controls } from "@storybook/blocks";
import { Divider, Typography } from "antd";

interface HookDocsViewProps {
  args?: {
    title?: string;
    description?: string;
  };
}

const { Title: AntdTitle } = Typography;
export default function HookDocsView(props: HookDocsViewProps) {
  const { title, description = "No description" } = props.args || {};
  return (
    <>
      <Title>{title}</Title>
      <Divider style={{ margin: "10px 0" }} />
      <AntdTitle level={4}>Usage</AntdTitle>
      <div
        style={{
          marginTop: "5px",
          fontWeight: "bold",
          color: "#797979",
        }}
      >
        {description}
      </div>
      <Controls />
    </>
  );
}
