import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.paleGrey};
  padding-bottom: 60px;
`;

export const Content = styled.div`
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.colors.lightPeriwinkle};
  background-color: white;
`;

export const Img = styled.img`
  display: block;
  align-self: left;
  margin-top: 118px;
  margin-bottom: 16px;
  width: 136px;
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.33;
  color: ${(props) => props.theme.colors.charcoal};
`;
