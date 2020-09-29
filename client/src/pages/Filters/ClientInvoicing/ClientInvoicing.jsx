import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container, Header, Section,
} from '../../../styles';
import { customers } from '../../Helpers/mock-data';

export default function ClientInvoicing() {
  const history = useHistory();

  function formatReportId(value) {
    const strId = value.toString();
    return `00000000${strId}`.slice(-8);
  }

  const reportTableColumns = [
    {
      Header: 'ID',
      accessor: 'id',
      key: 'id',
      disableSortBy: false,
      Cell: ({ cell: { value } }) => formatReportId(value),
    },
    {
      Header: 'NOME',
      accessor: 'name',
      key: 'name',
      Cell: ({ cell: { value } }) => (value),
    },
    {
      Header: 'DOCUMENTO',
      accessor: 'document',
      key: 'document',
      disableSortBy: false,
      Cell: ({ cell: { value } }) => (value),
    },
    {
      Header: 'DATA NASCIMENTO',
      accessor: 'birthdate',
      key: 'birthdate',
      disableSortBy: false,
      Cell: ({ cell: { value } }) => (value),
    },
    {
      Header: 'CLIENTE DESDE',
      accessor: 'customer_since',
      key: 'customer_since',
      disableSortBy: false,
      Cell: ({ cell: { value } }) => (value),
    },
    {
      Header: 'ÚLTIMA COMPRA',
      accessor: 'last_purchase',
      key: 'last_purchase',
      disableSortBy: false,
      Cell: ({ cell: { value } }) => (value),
    },
  ];

  return (
    <Container>
      <Header>
        <h1>UPDM Modules</h1>
      </Header>
      <Section>
        <h3>ClientInvoicing</h3>
      </Section>
      <button type="button" onClick={() => history.push('/faturamento')}>Faturamento</button>
    </Container>
  );
}
