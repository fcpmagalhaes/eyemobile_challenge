/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import StylesContainer from './styles';
import { ReactComponent as Logo } from '../../assets/ic_logo.svg';
import { ReactComponent as Register } from '../../assets/ic_cadastro.svg';
import { ReactComponent as Invoicing } from '../../assets/ic_dashboard.svg';

const {
  Header, Content, Footer, Sider,
} = Layout;

export default function Petshop() {
  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    setState({ collapsed });
  };

  return (
    <StylesContainer>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
          <div className="logo">
            <Logo />
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Invoicing />
              Meu Faturamento
            </Menu.Item>
            <Menu.Item key="2">
              <Register />
              Cadastro
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    </StylesContainer>

  );
}
