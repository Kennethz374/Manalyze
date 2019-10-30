import React from "react"
import Pie from "./employeeBar"
import {Row,Col} from "antd"
import Gender from "./gender"

export default function Statistics() {
  return (
    <Row type="flex">
      <Col span={8} >
        <Pie />
      </Col>
      <Col span={8}>
        <Pie/>
      </Col>
      <Col span={8}>
        <Pie/>
      </Col>

      <Col span={8}>
        <Gender/>
      </Col>
    </Row>

  
  )
}