import React, { Component, useState } from 'react';
import axios from 'axios';
import { Layout, Menu } from 'antd';
import Loginpage from './components/Login';
import Stylist from "./components/Stylist"
import Navigation from './components/Navigation'

const { Footer } = Layout;

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
      {
        page === "Homepage" &&
      <Layout className="layout">

      <Navigation/>

      <Stylist/>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED

      </Footer>

      </Layout>
      }

      {
        page === "Loginpage" &&  <Loginpage/>
      }
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