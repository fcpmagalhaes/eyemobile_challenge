import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'styled-bootstrap-grid';
import { Button } from 'antd';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Container, Header, Section,
} from '../../../styles';
import { Creators } from '../../../store/petshop/actions';
import ContentWrapper from './styles';

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

  const ChartParamsDougnut = {
    labels: ['Banho & Tosa', 'Consulta', 'Medicamentos'],
    datasets: [{
      label: '# de Reais',
      data: [
        totalData.services.shower.toFixed(2),
        totalData.services.appointment.toFixed(2),
        totalData.services.medication.toFixed(2),
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const ChartParamBar = {
    labels: ['Receitas', 'Despesas'],
    datasets: [{
      label: '# de Reais',
      data: [totalData.revenue.toFixed(2), totalData.expense.toFixed(2)],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    }],
  };

  const [dataChartBar, setDataChartBar] = useState(ChartParamBar);
  const [dataChartDougnut, setDataChartBarDougnut] = useState(ChartParamsDougnut);

  function calculate(prop) {
    dispatch(Creators.loadTotals(prop));
  }

  useEffect(() => {
    if (!loading) {
      setDataChartBar(ChartParamBar);
      setDataChartBarDougnut(ChartParamsDougnut);
    }
  }, [totalData]);

  return (
    <ContentWrapper>
      <Container>
        <Header>
          <h1>Filtros Totais</h1>
          {loading && <h3>Carregando...</h3>}
        </Header>
        <Section>
          <Row>
            <Col col={12}>
              <Button type="primary" shape="round" onClick={() => calculate('today')}>HOJE</Button>
              <Button type="primary" shape="round" onClick={() => calculate('lastWeek')}>ÚLTIMA SEMANA</Button>
              <Button type="primary" shape="round" onClick={() => calculate('lastMonth')}>ÚLTIMO MÊS</Button>
              <Button type="primary" shape="round" onClick={() => calculate('others')}>OUTRO PERIODO</Button>
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
        <Section>
          <Row>
            <Col col={6}>
              <Doughnut
                data={dataChartDougnut}
              />
            </Col>
            <Col col={6}>
              <Bar
                data={dataChartBar}
                width={100}
                height={50}
                options={{ maintainAspectRatio: false }}
              />
            </Col>
          </Row>
        </Section>
      </Container>
    </ContentWrapper>
  );
}
