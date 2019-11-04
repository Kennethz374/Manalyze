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
<<<<<<< HEAD
  let date = new Date();
  let dateNow = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toJSON();  //get current Date
=======
  // console.log(props)
>>>>>>> b3ed4ae5fcc50591192f4ae950f98abc9beb2b13
  const[clients,setClients]=useState([])
  const[bookings,setBookings]=useState([])
  const[services,setServices]=useState([])
  const[currentDate, setCurrentDate]=useState([])


  useEffect(()=>{
    axios.get('http://localhost:3001/api/users') 
    .then((response) => {
      // handle success
      setClients(response.data)
      setCurrentDate(dateNow.substring(5,10))
    }) 
  }, []) 
  useEffect(()=>{
    axios.get('http://localhost:3001/api/bookings') 
    .then((response) => {
      // handle success
      setBookings(response.data)
    }) 
  }, []) 

  useEffect(()=>{
    axios.get('http://localhost:3001/api/services') 
    .then((response) => {
      setServices(response.data)
    }) 
  }, []) 

  if(clients.length === 0||bookings.length===0||services.length===0||currentDate.length===0) return <Spin size="large" />
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar/>
            <Layout>
              <Content style={{ margin: '0 16px' }}>

                <Switch>
                  <Route exact path="/admin" render={() => <Redirect to="/admin/schedule" />} />
                  <Route path="/admin/schedule" render={()=> <Schedule clients={clients} employees={props.employees} bookings={bookings} services={services}/>} />
                  <Route path="/admin/statistics"  render={()=> <Statistics clients={clients} bookings={bookings} services={services} employees={props.employees} currentDate={currentDate}/>}/>
                  <Route path="/admin/employees" render={()=> <Employees employees={props.employees}/>}/>
                  <Route path="/admin/clients" render={()=> <Clients clients={clients}/>}/>

                </Switch>

          
              </Content>
            </Layout>


        </Layout>
      </>
    );
  }
