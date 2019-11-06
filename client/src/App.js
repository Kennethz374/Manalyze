import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Spin } from 'antd';
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
  Route
} from "react-router-dom";
import Booking from './components/BookingPage/Booking';
const { Footer } = Layout;
  
export default function Homepage (props) {
  const[employees,setEmployees]=useState([])
  const[products,setProducts]=useState([])
  const[loginUser,setLoginUser]=useState(null)
  
  useEffect(()=>{
    Promise.all([
      Promise.resolve(axios.get('http://localhost:3001/api/products')),
      Promise.resolve(axios.get('http://localhost:3001/api/employees'))
    ]).then((all)=>{
      setProducts(all[0].data)
      setEmployees(all[1].data)
    })
  }, []) 
  
  //add this if statement to make sure employee data get feched, or the components will be rendered without the data directly
    if(employees.length === 0) return <Spin size="large" />

    return (
      <Layout className="layout">
        <Router>
          <Navigation/>
          <Switch>
          <Route exact path="/" render={() => <Stylist employees={employees}/> } />
          <Route path="/stylists/:employeeID" render={(props) => (
              <Booking employee={employees.find(employee => employee.id === Number(props.match.params.employeeID))} />)
          } />
          <Route path="/login" render={()=><LoginPage employees={employees}/>} />
          <Route path="/hairstylists" render={()=> <DetailStylists employees= {employees}/>}/>
          <Route path="/products" render={()=> <Products products= {products}/>}/>
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
