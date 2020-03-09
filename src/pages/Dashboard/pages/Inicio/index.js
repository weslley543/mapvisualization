import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

import {
    DesktopOutlined,
  } from '@ant-design/icons';
  const { Header, Content, Footer, Sider } = Layout;

export default function Inicio(){
    let [collapsed, setCollapsed] = useState(false);
    
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
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span>Mapa</span>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Desenvolvido na Unesp</Footer>
        </Layout>
      </Layout>    
    
    
    )
}