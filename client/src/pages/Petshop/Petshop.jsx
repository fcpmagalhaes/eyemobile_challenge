/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import StylesContainer from './styles';
import { ReactComponent as Logo } from '../../assets/ic_logo.svg';
import { ReactComponent as Register } from '../../assets/ic_cadastro.svg';
import { ReactComponent as InvoicingIcon } from '../../assets/ic_dashboard.svg';

export default function Petshop(props) {
  const {
    Header, Content, Sider,
  } = Layout;
  useEffect(() => {
    console.log('NovaProps', props);
  }, [props]);
  const { children } = props;

  return (
    <StylesContainer>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="dark">
          <div className="logo">
            <Logo />
          </div>
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<InvoicingIcon />}>
              <Link to="/faturamento">
                Meu Faturamento
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<Register />} disabled> Cadastro </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Breadcrumb style={{ margin: '16px 0 0 16px' }}>
              <Breadcrumb.Item>Petshop</Breadcrumb.Item>
              <Breadcrumb.Item>Meu Faturamento</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content>
            { children }
          </Content>
        </Layout>
      </Layout>
    </StylesContainer>
  );
}

Petshop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  ]).isRequired,
};
