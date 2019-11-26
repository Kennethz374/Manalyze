import React from "react"
// import axios from 'axios';

import EmployeeBar from "./employeeBar"
import {Row,Col} from "antd"
import Gender from "./gender"
import  './statistics.css'
import ChartTab from "./ChartTab"
import TotalSales from "./totalSales"
import ServicePie from "./ServicePie"
import ServiceRevenuePie from "./ServiceRevenuePie"

export default function Statistics(props) {
  return (
    <div className="gutter-example">
      <h4 >Welcome Back! Here is {props.currentDate}'s report for you</h4>
    <Row gutter={[10, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

      <Col className="gutter-row" xs={24} md={12} xl={6} >
        <div className="gutter-box">
          <TotalSales bookings={props.bookings} services={props.services} currentDate={props.currentDate}/>

        </div>
      </Col>

      <Col className="gutter-row" xs={24} md={12} >
        <div className="gutter-box">
          <EmployeeBar bookings={props.bookings} services={props.services} clients={props.clients} employees={props.employees}/>
        </div>
      </Col>

      <Col className="gutter-row" xs={24} md={12} xl={6} >
        <div className="gutter-box">
          <Gender gender={props}/>
        </div>
      </Col>
{/* 
      <Col className="gutter-row" xs={24} md={12} xl={6} >
        <div className="gutter-box">
          <ServicePie bookings={props.bookings} services={props.services}/>
        </div>
      </Col> */}

     </Row>
     <Row></Row>

     <Row>
      <div className="gutter-box">
      <ChartTab bookings={props.bookings} services={props.services} currentDate={props.currentDate}/>
      </div>
     </Row>

     <Row>
     <Col className="gutter-row" xs={24} md={12}>
        <div className="gutter-box">
        <ServicePie bookings={props.bookings} services={props.services}/> 
        </div>
      </Col>      
      <Col className="gutter-row" xs={24} md={12}>
        <div className="gutter-box">
        <ServiceRevenuePie bookings={props.bookings} services={props.services}/> 
        </div>
      </Col>
      
     </Row>
    </div>
  
  )
}