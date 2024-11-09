import React from 'react';
import { Form, Input, Button, Row, Col, Avatar, Typography, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const account: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row>
        <Col span={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar size={120} icon={<UserOutlined />} src="https://example.com/avatar.jpg" />

          <Title level={3} style={{ marginTop: '10px' }}>Username</Title>
        </Col>
        <Col span={20}>
          <Row gutter={24}>
            <Col span={12}>
              <Title level={3}>Information</Title>
              <Form layout="vertical">
                <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
                  <Input placeholder="Enter first name" />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
                  <Input placeholder="Enter last name" />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                  <Input placeholder="Enter email" />
                </Form.Item>
                <Form.Item label="Country" name="country" rules={[{ required: true }]}>
                  <Select placeholder="Select country">
                    <Option value="Vietnam">Vietnam</Option>
                    <Option value="USA">USA</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                  <Input placeholder="Enter phone number" />
                </Form.Item>
                <Form.Item label="Address" name="address" rules={[{ required: true }]}>
                  <Input placeholder="Enter address" />
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
              <Title level={3}>Change Password</Title>
              <Form layout="vertical">
                <Form.Item label="Old Password" name="oldPassword" rules={[{ required: true }]}>
                  <Input.Password placeholder="Enter old password" />
                </Form.Item>
                <Form.Item label="New Password" name="newPassword" rules={[{ required: true }]}>
                  <Input.Password placeholder="Enter new password" />
                </Form.Item>
                <Form.Item label="Re-enter New Password" name="reenterPassword" rules={[{ required: true }]}>
                  <Input.Password placeholder="Re-enter new password" />
                </Form.Item>
                <Button type="primary" htmlType="submit" style={{ marginTop: '10px' }}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default account;
