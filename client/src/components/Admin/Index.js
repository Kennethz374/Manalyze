import React, {useEffect, useState} from "react"
import axios from "axios"
import { Layout, Spin } from 'antd';
import Schedule from "./Schedule"
import SideBar from "./Sidebar"
import Statistics from "./Statistics/Statistics"
import Employees from "./Employees"
import Clients from "./Clients"

import {
  Route,
  Switch,
  Redirect,
  // BrowserRouter as Router

} from "react-router-dom";

const { Content} = Layout;

// function Statistics(props) {
//   return <div>Statistics</div>
// }

export default function Admin (props){
  // console.log(props)
  const[clients,setClients]=useState([])
  const[bookings,setBookings]=useState([])


  useEffect(()=>{
    axios.get('http://localhost:3001/api/users') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      setClients(response.data)
    }) 
  }, []) 
  useEffect(()=>{
    axios.get('http://localhost:3001/api/bookings') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      setBookings(response.data)
    }) 
  }, []) 

  if(clients.length === 0||bookings.length===0) return <Spin size="large" />
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar/>
            <Layout>
              <Content style={{ margin: '0 16px' }}>

                <Switch>
                  <Route exact path="/admin" render={() => <Redirect to="/admin/schedule" />} />
                  <Route path="/admin/schedule" render={()=> <Schedule clients={clients} employees={props.employees} bookings={bookings}/>} />
                  <Route path="/admin/employees" render={()=> <Employees employees={props.employees}/>}/>
                  <Route path="/admin/statistics"  render={()=> <Statistics clients={clients} employees={props}/>}/>
                  <Route path="/admin/clients" render={()=> <Clients clients={clients}/>}/>

                </Switch>

          
              </Content>
            </Layout>


        </Layout>
      </>
    );
  }
