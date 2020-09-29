import React from 'react';
// import { Link } from 'react-router-dom';

import {
  Container, Header, Section, H1, H3,
} from '../../styles/index';

export default function Petshop() {
  return (
    <Container>
      <Header>
        <H1>UPDM Modules</H1>
      </Header>
      <Section>
        <H3>
          PETSHOP
          {/* <Link to="/auth">Demo - Get AC auth token</Link> */}
        </H3>
      </Section>
    </Container>
  );
}
