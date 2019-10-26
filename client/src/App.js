import React, { Component, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Layout, Menu, Card, Col, Row } from 'antd';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

export default function App () {

  
  // const fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     setMessage({
  //       message: response.data.message
  //     });
  //   }) 
  // }

  
    return (
      <Layout className="layout">

      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Hairstylist</Menu.Item>
          <Menu.Item key="3">Products</Menu.Item>
          <Menu.Item key="4">Services</Menu.Item>
          <Menu.Item key="5">About Us</Menu.Item>
          <Menu.Item key="6">Login</Menu.Item>
          <Menu.Item key="7">Register</Menu.Item>

        </Menu>
      </Header>

      <Content style={{ padding: '0 50px' }}>

        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Row gutter={16}>
            
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Johnny J" description="Lead Hairstylist" />
              </Card>
            </Col>

            <Col span={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Johnny J" description="Lead Hairstylist" />
              </Card>
            </Col>

           </Row> 
        </div>

      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED

      </Footer>

        </Layout>
    );

}

