import React from "react"
import Pie from "./employeeBar"
import {Row,Col} from "antd"
import Gender from "./gender"
import BookingNumber from './bookingNumber'

export default function Statistics() {
  return (
    <Row type="flex" align="bottom">
      
      <Col span={8}>
        <Pie/>
      </Col>

      <Col span={8}>
        <Gender/>
      </Col>

      <Col span={8}>
        <BookingNumber/>
      </Col>
    </Row>

  
  )
}