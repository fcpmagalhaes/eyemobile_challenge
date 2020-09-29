import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { Table, Input } from 'antd';
import debounce from 'lodash.debounce';
import { SearchOutlined } from '@ant-design/icons';
import { Row, Col } from 'styled-bootstrap-grid';

import { Container, Header, Section } from '../../../styles';
import { Creators } from '../../../store/petshop/actions';

export default function ClientInvoicing() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((store) => store.petshop);

  const [filterByText, setFilterByText] = useState(null);

  const debouncedSeach = useRef();

  debouncedSeach.current = (text) => dispatch(
    Creators.loadClients({ filterByText: text }),
  );

  const executeDebounce = useCallback(
    debounce((...args) => debouncedSeach.current(...args), 700),
    [],
  );

  useEffect(() => {
    if (filterByText !== null && filterByText !== '') {
      executeDebounce(filterByText);
    } else if (filterByText === null || filterByText === '') {
      dispatch(Creators.loadClients());
    }
  }, [filterByText]);

  const reportTableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'NOME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'DOCUMENTO',
      dataIndex: 'document',
      key: 'document',
    },
    {
      title: 'DATA NASCIMENTO',
      dataIndex: 'birthdate',
      key: 'birthdate',
    },
    {
      title: 'CLIENTE DESDE',
      dataIndex: 'customer_since',
      key: 'customer_since',
    },
    {
      title: 'ÚLTIMA COMPRA',
      dataIndex: 'last_purchase',
      key: 'last_purchase',
    },
  ];

  return (
    <Container>
      <Header>
        <h1>Filtro por Clientes</h1>
      </Header>
      <Section>
        <Row>
          <Col col={4}>
            <Input
              className="filterByText"
              placeholder="Pesquisar Nome"
              prefix={<SearchOutlined />}
              onChange={({ target: { value } }) => {
                const text = value && value.length > 0 ? value : null;
                setFilterByText(text);
              }}
              allowClear
              style={{ borderRadius: '15px' }}
            />
          </Col>
        </Row>
        {loading && <h1>Carregando...</h1>}
      </Section>
      <Table columns={reportTableColumns} dataSource={data} size="middle" scroll={{ x: 'max-content' }} />
    </Container>
  );
}
