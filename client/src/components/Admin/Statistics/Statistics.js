import React from "react"
// import axios from 'axios';

import Pie from "./employeeBar"
import {Row,Col} from "antd"
import Gender from "./gender"
import BookingNumber from './bookingNumber'
import  './statistics.css'

export default function Statistics(props) {

  
  return (
    <div className="gutter-example">
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>

      <Col className="gutter-row" span={8}>
        <div className="gutter-box">
          <Pie/>
        </div>
      </Col>
{/*       
      <Col span={8}>
        <Pie/>
      </Col> */}

      <Col className="gutter-row" span={8}>
        <div className="gutter-box">
          <Gender gender={props}/>
        </div>
      </Col>

      {/* <Col span={8}>
        <Gender gender={props}/>
      </Col> */}


      <Col className="gutter-row" span={8}>
        <div className="gutter-box">
          <BookingNumber/>
        </div>
      </Col>

      {/* <Col span={8}>
        <BookingNumber/>
      </Col> */}
     </Row>
    </div>
  
  )
}