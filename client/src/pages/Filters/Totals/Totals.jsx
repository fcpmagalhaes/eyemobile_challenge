import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container, Header, Section,
} from '../../../styles';

export default function Totals() {
  useEffect(() => {
    console.log('totais');
  }, []);
  const history = useHistory();

  return (
    <Container>
      <Header>
        <h1>UPDM Modules</h1>
      </Header>
      <Section>
        <h3>Totais</h3>
      </Section>
      <button type="button" onClick={() => history.push('/faturamento')}>Faturamento</button>
    </Container>
  );
}
