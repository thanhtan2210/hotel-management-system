import React from "react";
import { Descriptions, Button, Card } from "antd";
import type { DescriptionsProps } from "antd";
import { Link } from "react-router-dom";

const items: DescriptionsProps["items"] = [
  {
    label: "ID",
    children: "booking-1",
  },
  {
    label: "Check-in",
    children: "01/01/2017",
  },
  {
    label: "Check-out",
    children: "02/01/2017",
  },
  {
    label: "Room Selected",
    children: "2",
  },
  {
    label: "Repeated Guest",
    children: "No",
  },
  {
    label: "Distribution Channel",
    children: "Direct",
  },
  {
    label: "Payment",
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        Method: Internet Banking
        <br />
        Original Amount: 500.000 VND
        <br />
        Amount: 500.000 VND
        <br />
        Deposit Type: No
        <br />
        Discount: 0%
        <br />
        Credit Card: 8967
      </>
    ),
  },
  {
    label: "Status",
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        Reservation Status: Checkout
        <br />
        Reservation Status Date: 27/12/2017
        <br />
        Special Request: 2
        <br />
        Days in waiting list: 0
        <br />
      </>
    ),
  },
  {
    label: "Room",
    children: (
      <>
        <Card title="Room A" type="inner">
          <Descriptions
            bordered
            column={{ sm: 1, xs: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
          >
            <Descriptions.Item label="Meal">BB</Descriptions.Item>
            <Descriptions.Item label="Adults">1</Descriptions.Item>
            <Descriptions.Item label="Children">1</Descriptions.Item>
            <Descriptions.Item label="Babies">0</Descriptions.Item>
            <Descriptions.Item label="Car Parking">2</Descriptions.Item>
            <Descriptions.Item label="Room No">1, 2</Descriptions.Item>
          </Descriptions>
          </Card>
          <Card style={{ marginTop: 16 }} type="inner" title="Room B">
            <Descriptions
              bordered
              column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
            >
              <Descriptions.Item label="Meal">BB</Descriptions.Item>
              <Descriptions.Item label="Adults">1</Descriptions.Item>
              <Descriptions.Item label="Children">1</Descriptions.Item>
              <Descriptions.Item label="Babies">0</Descriptions.Item>
              <Descriptions.Item label="Car Parking">2</Descriptions.Item>
              <Descriptions.Item label="Room No">2</Descriptions.Item>
            </Descriptions>
          </Card>
        
      </>
    ),
  },
];

const HotelBookingDetail: React.FC = () => {
  return (
    <div>
      <Descriptions
        title="Booking Detail"
        bordered
        items={items}
      ></Descriptions>
      <Button type="primary">
      <Link to="/hotel/booking">
          <span className="span-text">Go Back</span>
        </Link>
        </Button>
    </div>
  );
};

export default HotelBookingDetail;