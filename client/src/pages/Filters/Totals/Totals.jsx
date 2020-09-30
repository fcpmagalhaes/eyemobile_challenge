import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'styled-bootstrap-grid';
import {
  Container, Header, Section,
} from '../../../styles';
import { Creators } from '../../../store/petshop/actions';

// totalData: {
//   general: 10178.6,
//   services: {
//     shower: 6000,
//     appointment: 10000,
//     medication: 20000,
//     totalService: 36000,
//   },
//   expenseRevenue: {
//     expense: 13000,
//     revenue: 3000,
//   },

export default function Totals() {
  const dispatch = useDispatch();
  const { totalData, loading } = useSelector((store) => store.petshop);

  function calculate(prop) {
    dispatch(Creators.loadTotals(prop));
  }

  useEffect(() => {
    console.log('totalData', totalData);
  }, [totalData]);

  return (
    <Container>
      <Header>
        <h1>Filtros Totais</h1>
        {loading && <h3>Carregando...</h3>}
      </Header>
      <Section>
        <Row>
          <Col col={6}>
            <button type="button" onClick={() => calculate('today')}>HOJE</button>
            <button type="button" onClick={() => calculate('lastWeek')}>ÚLTIMA SEMANA</button>
            <button type="button" onClick={() => calculate('lastMonth')}>ÚLTIMO MÊS </button>
            <button type="button" onClick={() => calculate('others')}>OUTRO PERIODO</button>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col col={12}>
            <h3>Valor Total</h3>
            <h1>
              R$
              {totalData.general.toFixed(2)}
            </h1>
          </Col>
        </Row>
      </Section>
    </Container>
  );
}
