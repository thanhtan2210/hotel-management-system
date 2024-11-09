import React from "react";
import { Menu } from "antd";
import {
  HomeFilled,
  DashboardFilled,
  AppstoreFilled,
  AccountBookFilled,
  SettingFilled,
  MehFilled,
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
        <Link to="/hotel">
          <span className="span-text">Home</span>
        </Link>
      </Menu.Item>

      <Menu.SubMenu
        key="dashboard"
        icon={<DashboardFilled />}
        title="Dashboard"
      >
        <Menu.Item key="bookingdashboard" icon={<AccountBookFilled />}>
          Booking
        </Menu.Item>
        <Menu.Item key="guestdashboard" icon={<MehFilled />}>
          Guest
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="room" icon={<AppstoreFilled />}>
        <Link to="/hotel/room">
          <span className="span-text">Room</span>
        </Link>
      </Menu.Item>

      <Menu.Item key="booking" icon={<AccountBookFilled />}>
        <Link to="/hotel/booking">
          <span className="span-text">Booking</span>
        </Link>
      </Menu.Item>

      <Menu.SubMenu key="settings" icon={<SettingFilled />} title="Settings">
        <Menu.Item key="hotel_infomation" icon={<CopyFilled />}>
          <Link to="/hotel/settings/hotelinf">
            <span className="span-text">Hotel</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="account" icon={<CopyFilled />}>
          <Link to="/hotel/settings/account">
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
