import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import MenuList from "./MenuList";
import { Button, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
// import { Outlet } from 'react-router-dom';

const { Sider, Content } = Layout;

const GLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        // theme="light"
        
        style={{
          background: "#1F618D",
          height: "100vh",
          overflow: "auto",
          top: 0,
          bottom: 0,
          position: "fixed",
          insetInlineStart: 0,
          zIndex: 1
        }}
      >
        <div className="demo-logo-vertical" />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            color: "black",
            fontSize: "20px",
            width: 40,
            height: 80,
          }}
        />
        <MenuList />
      </Sider>
      <Layout>
        <Content
          style={{
            marginLeft: "120px",
            padding: 0,
            height: "2000px",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default GLayout;
