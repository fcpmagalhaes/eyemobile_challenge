import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Row, Col } from 'styled-bootstrap-grid';

import { Container, Header, Section } from '../../../styles';
import { Creators } from '../../../store/petshop/actions';

export default function ClientInvoicing() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Creators.loadClients());
  }, []);

  const { data, loading } = useSelector((store) => store.petshop);

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
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <Container>
      <Header>
        <h1>Filtro por Clientes</h1>
      </Header>
      <Section>
        <Row>
          <Col col={4}>
            <Input className="inputField" placeholder="Pesquisar Nome" prefix={<SearchOutlined />} onChange={onChange} allowClear style={{ borderRadius: '15px' }} />
          </Col>
        </Row>
        {loading && <h1>Carregando...</h1>}
      </Section>
      <Table columns={reportTableColumns} dataSource={data} size="middle" />
    </Container>
  );
}
