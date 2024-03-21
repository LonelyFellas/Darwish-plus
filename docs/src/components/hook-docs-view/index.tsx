import { Title, Controls, Canvas } from "@storybook/blocks";
import { Divider, Typography } from "antd";
import Table from "./table.mdx";
interface HookDocsViewProps {
  args?: {
    title?: string;
    description?: string;
    sourceUrl?: string;
  };
}

const { Title: AntdTitle } = Typography;
export default function HookDocsView(props: HookDocsViewProps) {
  const {
    title,
    description = "No description",
    sourceUrl = "https://github.com/LonelyFellas/Darwish-plus/tree/main/hooks",
  } = props.args || {};

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
      <Canvas
        additionalActions={[
          {
            title: "Source Code",
            onClick: () => {
              window.open(sourceUrl, "_blank");
            },
          },
        ]}
        sourceState="shown"
      />
      <Table />
      <Controls />
    </>
  );
}
