import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Tabs,
  Select,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd";

const { TabPane } = Tabs;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const UploadButtom: React.FC = () => {
  const fileList: UploadFile[] = [
    {
      uid: "0",
      name: "xxx.png",
      status: "uploading",
      percent: 33,
    },
    {
      uid: "-1",
      name: "yyy.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      thumbUrl:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "zzz.png",
      status: "error",
    },
  ];

  return (
    <Upload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      listType="picture"
      defaultFileList={fileList}
    >
      <Button type="primary" icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  );
};

const EditHotelInformation: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Disabled Edit
      </Checkbox>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ width: "1000" }}
      >
        <Form.Item
          label="Name"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Hotel Type"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Select
            style={{ width: 200 }}
            placeholder="Type"
            options={[
              {
                value: "1",
                label: "Resort Hotel",
              },
              {
                value: "2",
                label: "Country Hotel",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Country">
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Country"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "America",
              },
              {
                value: "2",
                label: "VietNam",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="City">
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="City"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Ha Noi",
              },
              {
                value: "2",
                label: "Ho Chi Minh",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="District"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: 300 }} />
        </Form.Item>
        <Form.Item
          label="Street"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description">
          <TextArea rows={5} />
        </Form.Item>
        <Form.Item
          label="Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <UploadButtom />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ marginLeft: 150 }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

function callback(key) {
  console.log(key);
}

const HotelInformation: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Hotel Information" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Edit" key="2">
        <EditHotelInformation />
      </TabPane>
    </Tabs>
  );
};

export default HotelInformation;
