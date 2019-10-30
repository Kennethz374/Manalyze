import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Layout } from 'antd';
import LoginPage from './components/Login';
import Stylist from "./components/Stylist"
import DetailStylists from "./components/DetailStylist"
import Products from "./components/Products"
import Services from "./components/Services"
import About from "./components/About"
import Admin from "./components/Admin/Index"
import Navigation from "./components/Navigation"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/BookingPage/Booking';
const { Footer } = Layout;
  
export default function Homepage (props) {
  const[employees,setEmployees]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/api/employees') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      setEmployees(response.data)

    }) 
  }, []) 
  //add this if statement to make sure employee data get feched, or the components will be rendered without the data directly
    if(employees.length === 0) return <div>Loading</div>

    return (
      <Layout className="layout">
        <Router>
          <Navigation/>
          <Switch>
          <Route exact path="/" render={() => <Stylist employees={employees}/> } />
          <Route path="/stylists/:employeeID" render={(props) => (
              <Booking employee={employees.find(employee => employee.id === Number(props.match.params.employeeID))} />)
          } />
          <Route path="/login" component={LoginPage} />
          <Route path="/hairstylists" component={DetailStylists} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/aboutus" component={About} />
          <Route path="/admin" component={Admin} />
          </Switch>

        </Router>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>

    
    );

}


  
  
  // const fetchData = () => {
  //   axios.get('/api/employees') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     // console.log(response.data.message) // Just the message
  //     // setMessage({
  //     //   message: response.data.message
  //     });
  //   }) 
  // }