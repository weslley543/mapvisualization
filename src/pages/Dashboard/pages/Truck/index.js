import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Row, Col, InputNumber } from 'antd';
import { Link } from "react-router-dom";
import api from '../../../../services/api'
import './styles.css'
import {
    DesktopOutlined, RadarChartOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export default function Trucks() {
    let [collapsed, setCollapsed] = useState(false);

    let onCollapse = () => {
        (collapsed === false) ? setCollapsed(true) : setCollapsed(false);
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
                    <Menu.Item key="1">
                        <DesktopOutlined />
                        <span>Inicio</span>
                        <Link to='/dashboard' />
                    </Menu.Item>
                    <Menu.Item key="2">
                        <RadarChartOutlined />
                        <span>Mapa</span>
                        <Link to='/mapa' />
                    </Menu.Item>
                    <Menu.Item key="3">
                    <RadarChartOutlined />
                        <span>Caminhões</span>
                        <Link to='/caminhoes' />
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background " style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }} className="container">
                    <h2>Registro dos caminhões</h2>
                    <div className='content'>
                        
                    </div>

                </Content>
                <Footer style={{ textAlign: 'center' }}>Desenvolvido na Unesp</Footer>
            </Layout>
        </Layout>


    )
}