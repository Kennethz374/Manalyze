import React, { Component, useState } from 'react';
// import axios from 'axios';
import { Layout } from 'antd';
import Loginpage from './components/Login';
import Stylist from "./components/Stylist"
import DetailStylists from "./components/DetailStylist"
import Products from "./components/Products"
import Services from "./components/Services"
import About from "./components/About"
import Admin from "./components/Admin/Index"
import Navigation from "./components/Navigation"
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from "react-router-dom";
const { Footer } = Layout;
  
export default function Homepage (props) {

  // const [page, setPage]=useState("Homepage")
  
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

        <Route exact path="/admin">
              <Admin/>
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