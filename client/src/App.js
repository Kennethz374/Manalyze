import React, { Component, useState } from 'react';
import axios from 'axios';
import { Layout, Menu } from 'antd';
import Loginpage from './components/Login';
import Stylist from "./components/Stylist"
import DetailStylists from "./components/DetailStylist"
import Products from "./components/Products"
import Services from "./components/Services"
import About from "./components/About"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { Footer,Header } = Layout;

 function Navigation () {
   return (
      <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        >
        <Menu.Item key="1"><Link to="/"> Home </Link></Menu.Item>
        <Menu.Item key="2"><Link to="/hairstylists"> Hairstylists </Link></Menu.Item>
        <Menu.Item key="3"><Link to="/products"> Products </Link></Menu.Item>
        <Menu.Item key="4"><Link to="/services"> Services </Link></Menu.Item>
        <Menu.Item key="5"><Link to="/aboutus"> About Us </Link></Menu.Item>
        <Menu.Item key="6"><Link to="/login"> Login </Link></Menu.Item>
        <Menu.Item key="7"><Link to="/register"> Register </Link></Menu.Item>

      </Menu>
      </Header>
   )
 }
  


export default function Homepage (props) {

  const [page, setPage]=useState("Homepage")
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
      <>
      <Router>
        <Route exact path="/">
          <Layout className="layout">
          <Navigation/>
          <Stylist/>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED

          </Footer>

          </Layout>
        </Route>

        <Route exact path="/login">
          <Layout className="layout">
            <Navigation/>
            <Loginpage/>  
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED

            </Footer>
          </Layout>
        </Route>

        <Route exact path="/hairstylists">
          <Layout className="layout">
            <Navigation/>
            <DetailStylists/>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED

            </Footer>
          </Layout>
        </Route>

        <Route exact path="/products">
          <Layout className="layout">
            <Navigation/>
            <Products/>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED

            </Footer>
          </Layout>
        </Route>

        <Route exact path="/services">
          <Layout className="layout">
            <Navigation/>
            <Services/>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED

            </Footer>
          </Layout>
        </Route>

        <Route exact path="/aboutus">
          <Layout className="layout">
            <Navigation/>
            <About/>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED

            </Footer>
          </Layout>
        </Route>

      </Router>
      </>

    
    );

}


  
  
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