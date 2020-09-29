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

export const TableStyle = styled.div`
  .tableWrap {
    table {
      thead,
      tbody {
        tr {
          width: 100%;
          th,
          td {
            line-height: 20px;
            width: unset;
            .custom-cell {
              display: flex;
              align-items: center;
              height: 100%;
            }
            /* File ID */
            &:nth-child(1) {
              width: 72px !important;
              padding-left: 8px !important;
              padding-right: 12px !important;
              display: flex;
              align-items: center;
            }
            /* Program */
            &:nth-child(2) {
              min-width: 185px !important;
              padding-left: 12px !important;
              padding-right: 12px !important;
            }
            /* Report Date */
            &:nth-child(3) {
              width: 100px !important;
              padding-left: 12px !important;
              padding-right: 12px !important;
            }
            /* Creation */
            &:nth-child(4) {
              min-width: 160px !important;
              padding-left: 12px !important;
              padding-right: 12px !important;
            }
            /* Status */
            &:nth-child(5) {
              display: flex;
              align-items: center;
              max-width: 100px !important;
              padding-left: 12px !important;
              padding-right: 12px !important;
            }
            /* Actions*/
            &:nth-child(6) {
              display: flex;
              justify-content: center;
              align-items: center;
              padding-left: 12px !important;
              padding-right: 0 !important;
            }
          }
        }
      }
    }
  }
`;
