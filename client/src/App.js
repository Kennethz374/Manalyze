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
  // const [page, setPage]=useState("Homepage")
    if(employees.length === 0) return <div>Loading</div>

    return (
      <Layout className="layout">
        <Router>
          <Navigation/>
          <Switch>
          <Route exact path="/" render={() => <Stylist employees={employees}/> } />
          <Route path="/booking/:employeeID" render={(props) => (
              <Booking employee={employees.find(employee => employee.id === Number(props.match.params.employeeID))} />)
          } />
          <Route path="/login" component={LoginPage} />
          <Route path="/hairstylists" component={DetailStylists} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/aboutus" component={About} />
          <Route path="/admin" render={()=> <Admin employees={employees}/>}/>
          </Switch>

        </Router>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>

    
    );

}
