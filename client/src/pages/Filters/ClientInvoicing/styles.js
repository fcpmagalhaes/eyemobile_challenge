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
`;
