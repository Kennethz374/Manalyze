import React from "react"
// import axios from 'axios';

import Pie from "./employeeBar"
import {Row,Col} from "antd"
import Gender from "./gender"
import  './statistics.css'
import ChartTab from "./ChartTab"
import TotalSales from "./totalSales"

export default function Statistics(props) {
  
  return (
    <div className="gutter-example">
    <Row gutter={[10, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

      <Col className="gutter-row" xs={24} md={12} xl={6} >
        <div className="gutter-box">
          <TotalSales bookings={props.bookings} services={props.services}/>
        </div>
      </Col>

      <Col className="gutter-row" xs={24} md={12} xl={6} >
        <div className="gutter-box">
          <Gender gender={props}/>
        </div>
      </Col>

      <Col className="gutter-row" xs={24} md={12} xl={6} >
        <div className="gutter-box">
          <Gender gender={props}/>
        </div>
      </Col>

      <Col className="gutter-row" xs={24} md={12} xl={6} >
        <div className="gutter-box">
          <Gender gender={props}/>
        </div>
      </Col>
     </Row>

     <Row>

     </Row>

     <Row>
      <ChartTab/>
     </Row>

     <Row>

     </Row>
    </div>
  
  )
}