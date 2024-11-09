import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Select, Typography } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const PaymentPage: React.FC = () => {
  return (
    <div style={{ padding: '80px', backgroundColor: '#F0F8FF', minHeight: '100vh' }}>
      <Row>
        <Col span={20}>
          <div style={{ padding: '80px', backgroundColor: '#fff', borderRadius: '8px' }}>
            <Title level={3} style={{ textAlign: 'center' }}>Billing Details</Title>
            
            <Form layout="vertical">
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
                    <Input placeholder="Enter first name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
                    <Input placeholder="Enter last name" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item label="E-mail" name="email" rules={[{ required: true, type: 'email' }]}>
                    <Input placeholder="Enter email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Phone" name="phone">
                    <Input placeholder="Enter phone number" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item label="Country" name="country" rules={[{ required: true }]}>
                    <Select placeholder="Select country">
                      <Option value="Vietnam">Vietnam</Option>
                      <Option value="USA">USA</Option>
                      {/* Thêm các quốc gia khác nếu cần */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Address" name="address" rules={[{ required: true }]}>
                    <Input placeholder="Enter address" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item label="Company Name" name="companyName">
                    <Input placeholder="Enter company name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="VAT ID" name="vatID">
                    <Input placeholder="Enter VAT ID" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="terms" valuePropName="checked">
                <Checkbox>
                  I agree to the terms and conditions
                </Checkbox>
              </Form.Item>

              <Form.Item label="Payment Method" name="paymentMethod" rules={[{ required: true }]}>
                <Checkbox.Group style={{ width: '100%' }}>
                  <Row>
                    <Col span={8}>
                      <Checkbox value="Credit Card">Credit Card</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Pay at Hotel">Pay at Hotel</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Bank Transfer">Bank Transfer</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item style={{ textAlign: 'center' }}>
                <Button type="primary" htmlType="submit" style={{ width: '200px' }}>
                  Confirm Reservation
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentPage;
