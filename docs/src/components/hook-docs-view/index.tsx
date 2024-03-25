import { Title, Canvas, Source } from "@storybook/blocks";
import { Divider, Typography } from "antd";
import {ReactNode, useEffect, useState} from "react";
import APITableProperty from "./api-talbe-property";

interface ApiDs {
  name?: string;
  type?: ReactNode;
  defaultValue?: string;
  description?: ReactNode;
}
export interface DSProps {
  type?: ReactNode;
  description?: ReactNode;
  ds?: ApiDs[];
}
interface HookDocsViewProps {
  args?: {
    title?: string;
    description?: string;
    sourceUrl?: string;
  };
  apiDescription: string;
  paramDs?: DSProps;
  returnDs?: DSProps;
}
export const descriptionStyle: React.CSSProperties = {
  margin: "5px 0px",
  fontWeight: "bold",
  color: "#797979",
};

const { Title: AntdTitle } = Typography;
export default function HookDocsView(props: HookDocsViewProps) {
  const { paramDs, returnDs, apiDescription } = props;
  const [queryTitle, setQueryTitle] = useState<string | null>(null);
  const {
    title,
    description = "No description",
    sourceUrl = "https://github.com/LonelyFellas/Darwish-plus/tree/main/hooks",
  } = props.args || {};

  useEffect(() => {
    setQueryTitle(document.querySelector(".sbdocs-title.sb-unstyled")?.textContent || '');
  }, []);

  return (
    <>
      <Title>{title}</Title>
      <Divider style={{margin: '10px'}}/>
      <AntdTitle level={4}>Install</AntdTitle>
      <Source code={`npm install @darwish/${queryTitle}`}></Source>
      <AntdTitle level={4}>Usage</AntdTitle>
      <div style={descriptionStyle}>{description}</div>
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
      <div>
        <AntdTitle level={4}>API</AntdTitle>
        <div style={{ fontWeight: "bold", color: "#797979" }}>
          {apiDescription}
        </div>
        <APITableProperty
          key="param"
          dataSource={{
            ...paramDs,
            title: "Paramters",
          }}
        />
        <APITableProperty
          key="return"
          dataSource={{
            ...returnDs,
            title: "Returns",
          }}
        />
      </div>
      {/*<Controls />*/}
    </>
  );
}
