import { Typography, Table, Tag } from "antd";
import { descriptionStyle, DSProps } from ".";

const { Title } = Typography;
export default function APITableProperty(props: {
  dataSource: DSProps & { title?: string };
}) {
  const { dataSource } = props;
  return (
    <>
      <Title level={5} style={{ marginTop: "10px" }}>
        {dataSource.title}
      </Title>
      {dataSource?.type ? (
        <div style={{ margin: "5px 0px" }}>{dataSource.type}</div>
      ) : null}
      {dataSource?.description ? (
        <div style={descriptionStyle}>{dataSource.description}</div>
      ) : null}
      <Table
        size="small"
        bordered
        pagination={false}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text: string) => <Tag color="cyan">{text}</Tag>,
          },
          {
            title: "Type",
            dataIndex: "type",
            key: "type",
          },
          {
            title: "DefaultValue",
            dataIndex: "defaultValue",
            key: "defaultValue",
            render: (text: string) => <Tag color="gray">{text}</Tag>,
          },
          {
            title: "Description",
            dataIndex: "description",
            key: "description",
          },
        ]}
        dataSource={dataSource?.ds}
      />
    </>
  );
}
