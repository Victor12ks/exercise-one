import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Col, Layout, Menu, Row, theme } from "antd";
import Card from "./components/card";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Link from "antd/es/typography/Link";

// const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: "64px" }}
        ></Menu>
      </Header>
      <Content style={{ padding: "0 10px" }}>
        <Row gutter={[8, 8]}>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
          <Col span={6}>
            <Card />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Work of ochomoswill using Ant Design.
      </Footer>
    </Layout>
  );
};

export default App;