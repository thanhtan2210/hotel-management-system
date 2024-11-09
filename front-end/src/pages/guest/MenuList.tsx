import React from "react";
import { Menu } from "antd";
import {
  HomeFilled,
  AppstoreFilled,
  AccountBookFilled,
  SettingFilled,
  CopyFilled,
  QuestionCircleFilled,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const MenuList: React.FC = () => {
  return (
    <Menu
      theme="light"
      mode="inline"
      className="MenuBar"
      style={{
        background: "#1F618D",
      }}
    >
      <Menu.Item key="home" icon={<HomeFilled />}>
        <Link to="/guest">
          <span className="span-text">Home</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="hotel" icon={<AppstoreFilled />}>
        <Link to="/guest/hotel">
          <span className="span-text">Hotel</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="booking" icon={<AccountBookFilled />}>
        <Link to="/guest/booking">
          <span className="span-text">Booking</span>
        </Link>
      </Menu.Item>

      <Menu.SubMenu key="settings" icon={<SettingFilled />} title="Settings">
        <Menu.Item key="account" icon={<CopyFilled />}>
          <Link to="/guest/settings/account">
            <span className="span-text">Account</span>
          </Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="help" icon={<QuestionCircleFilled />}>
        <span className="span-text">Help</span>
      </Menu.Item>
      <Menu.Item key="menu" icon={<LogoutOutlined />}>
        <span className="span-text">Logout</span>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
