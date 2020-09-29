/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import StylesContainer from './styles';
import { ReactComponent as Totals } from '../../assets/ic_totais.svg';
import { ReactComponent as Clients } from '../../assets/ic_clientes.svg';

export default function Invoicing({ children }) {
  const history = useHistory();
  function filterNavigation(id) {
    switch (id) {
      case 1:
        history.push('/totais');
        break;
      case 2:
        history.push('/clientes');
        break;
      default:
        break;
    }
  }

  const {
    Content, Sider,
  } = Layout;

  return (
    <StylesContainer>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light">
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<Totals />} onClick={() => filterNavigation(1)}>
              Totais
            </Menu.Item>
            <Menu.Item key="2" icon={<Clients />} onClick={() => filterNavigation(2)}>
              Clientes
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: '16px 16px' }}>
          {children}
        </Content>
      </Layout>
    </StylesContainer>
  );
}

Invoicing.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node])),
  ]).isRequired,
};
