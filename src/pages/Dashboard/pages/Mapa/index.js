import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Card } from 'antd';
import api from "../../../../services/api";
import { Link } from "react-router-dom";
import {
  DesktopOutlined, RadarChartOutlined
} from '@ant-design/icons';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
const { Header, Content, Footer, Sider } = Layout;

export class Mapa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      center: { lat: -22.120498, lng: -51.407438 },
      markers: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.containerStyles = {
      width: '100%',
      height: '100%',
      postion: 'relative'
    };
    this.mapStyles = {
      width: '100%',
      height: '100%'
    }

  }

  componentDidMount() {
    this.getMarkers();
  }
  async getMarkers() {
    try {
      let result = await api.get('/ocurrance', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          user: localStorage.getItem('user')
        }
      })
      if (result.status === 200) {
        let markers = result.data;
        this.setState({ markers })
      }
    } catch (err) {
      console.log(err)
    }
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  onMarkerClick = (props, marker, e) => {
    console.log(marker);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {}
      })
    }
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="1">
              <DesktopOutlined />
              <Link to='/dashboard' />
              <span>Inicio</span>
            </Menu.Item>
            <Menu.Item key="2">
              <RadarChartOutlined />
              <Link to='/mapa' />
              <span>Mapa</span>
            </Menu.Item>
            <Menu.Item key="3">
            <RadarChartOutlined />
              <span>Caminhões</span>
              <Link to='/caminhoes' />
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: '100%' }}>
              <div style={this.containerStyles}>
                <Map
                  google={this.props.google}
                  zoom={16}
                  initialCenter={this.state.center}
                  style={this.mapStyles}
                  onClick={this.onMapClicked}
                >
                  {this.state.markers.map(marker => {
                    return (
                      <Marker key={marker._id} imgdata={marker.img_url} title={marker.description} name={marker.description} id={marker._id} position={{
                        lat: marker.lat,
                        lng: marker.lng
                      }}
                        onClick={this.onMarkerClick} />

                    )
                  }

                  )}

                  <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                  >
                    <div>
                      <h1>{this.state.activeMarker.name}</h1>
                      <p>{this.state.activeMarker.description}</p>
                      <img src={`${this.state.activeMarker.imgdata}`} width='400' height='400' alt={this.state.activeMarker.description} />
                    </div>
                  </InfoWindow>


                </Map>
              </div>
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Desenvolvido na Unesp</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBaG6NaaWPThrm4Htf3V2J9vA-QVhwpKRY'
})(Mapa);