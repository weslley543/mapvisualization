import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Card, Row,Col } from 'antd';
import { Link } from "react-router-dom";
import api from '../../../../services/api'
import './styles.css'
import {
    DesktopOutlined,RadarChartOutlined
  } from '@ant-design/icons';

  const { Header, Content, Footer, Sider } = Layout;

export default function Inicio(){
    let [collapsed, setCollapsed] = useState(false);
    let [statistics, setStatistics] = useState([0,0,0])
    useEffect (()=>{
        async function handleGetItens(){
            let result = await api.get('/ocurrance', 
                {
                    headers : {
                        authorization:localStorage.getItem('token'),
                        user:localStorage.getItem('user')
                    }
                }
            )
            if(result.status===200){
                const numberRegistered = result.data.length;
                let numberConclueded = 0;
                result.data.forEach((data)=>{
                    if(data.resolvedAt !== undefined){
                        numberConclueded++;
                    }
                })
                setStatistics([numberRegistered,0,numberConclueded])
            }
        }
       handleGetItens(); 
    }

    
    )

    let onCollapse = () =>{
        (collapsed ===false) ? setCollapsed(true):setCollapsed(false);
    }
    return(
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
              <DesktopOutlined />
              <span>Inicio</span>
              <Link to='/dashboard'/>
            </Menu.Item>
            <Menu.Item key="2">
            <RadarChartOutlined />
              <span>Mapa</span>
              <Link to='/mapa'/>
            </Menu.Item>
            <Menu.Item key="3">
            <RadarChartOutlined />
              <span>Caminhões</span>
              <Link to='/caminhoes'/>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background " style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
          <div className="site-card-wrapper espaco">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Serviços registrados " bordered={false}>
          {statistics[0]}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Serviços em atraso" bordered={false}>
          {statistics[1]}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Serviços concluidos" bordered={false}>
        {statistics[2]}
        </Card>
      </Col>
    </Row>
  </div>
  <div className="site-card-wrapper espaco">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Toneladas de lixo processados" bordered={false}>
            0
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Caminhoões pesados" bordered={false}>
          0
        </Card>
      </Col>
      <Col span={8}>
        <Card title="A" bordered={false}>
         0
        </Card>
      </Col>
    </Row>
  </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Desenvolvido na Unesp</Footer>
        </Layout>
      </Layout>    
    
    
    )
}