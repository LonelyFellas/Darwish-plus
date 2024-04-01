import { Title, Canvas, Source } from "@storybook/blocks";
import { Divider, Tag, Typography } from "antd";
import React, { ReactNode, useEffect, useState } from "react";
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
    beCare?: string;
    description?: string;
    sourceUrl?: string;
  };
  apiDescription: ReactNode;
  paramDs?: DSProps;
  returnDs?: DSProps;
  examples?: (() => React.JSX.Element)[];
}
export const descriptionStyle: React.CSSProperties = {
  margin: "5px 0px",
  fontWeight: "bold",
  color: "#797979",
};

const { Title: AntdTitle } = Typography;
export default function HookDocsView(props: HookDocsViewProps) {
  const { paramDs, returnDs, apiDescription, examples = [] } = props;
  const [queryTitle, setQueryTitle] = useState<string | null>(null);
  const { title, description = "No description", beCare } = props.args || {};

  useEffect(() => {
    setQueryTitle(
      document.querySelector(".sbdocs-title.sb-unstyled")?.textContent || ""
    );
  }, []);

  const canvaProps: React.ComponentProps<typeof Canvas> = {
    additionalActions: [
      {
        title: "Source Code",
        onClick: () => {
          window.open(
            `https://github.com/LonelyFellas/Darwish-plus/blob/main/hooks/${
              document.querySelector(".sbdocs-title.sb-unstyled")?.textContent
            }/index.ts`,
            "_blank"
          );
        },
      },
    ],
    sourceState: "shown",
  };
  return (
    <>
      <Title>{title}</Title>
      <Divider style={{ margin: "10px" }} />
      <AntdTitle level={4}>Install</AntdTitle>
      <Source code={`npm install @darwish/${queryTitle}`}></Source>
      <AntdTitle level={4}>Usage</AntdTitle>
      <div style={descriptionStyle}>{description}</div>
      {beCare && (
        <Tag style={{ color: "darkred", fontSize: "14px" }}>{beCare}</Tag>
      )}
      <Canvas {...canvaProps} />
      {examples.map((it) => (
        <Canvas of={it} {...canvaProps} />
      ))}
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
