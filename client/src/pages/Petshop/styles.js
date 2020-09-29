import styled from 'styled-components';

export default styled.div`
  width: 100%;
  .logo {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    svg {
      display: block;
      margin: 0 auto;
    }  
}
.site-layout .site-layout-background {
  background: #fff;
}
  [data-theme="ligth"] .site-layout .site-layout-background {
    background: red;
  }

  .ant-menu-vertical > .ant-menu-item, .ant-menu-vertical-left > .ant-menu-item, .ant-menu-vertical-right > .ant-menu-item, .ant-menu-inline > .ant-menu-item, .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    height: 100px;
    span {
      display: block;
      margin: 0 auto;
    }
  }
`;
