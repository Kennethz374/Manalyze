import React from "react"
import { Input,Icon,Button,Row, Col, Form } from 'antd';
import {
  Link
} from "react-router-dom";

export default function Loginpage (props) {


  return (
    <>
  <Row justify="center" align="middle" style={{margin:"25px", height:800}}>
    <Col span={12} offset={6}>
      <Input size="large"
        value={props.loginUser}
        onChange={(event) => props.setAdmin(event.target.value)}
        placeholder="Enter your username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        style={{ margin:"5px", padding:"5px" }}
      />

      <Input.Password placeholder="input password" size="large" style={{ margin:"5px", padding:"5px" }}/>
    </Col>

    <Col span={4} offset={10}>
      <Button onClick={(e)=>props.ActiveUser(props.loginUser)}><Link to="/"> Login </Link></Button>
      <Button>Cancel</Button>
    </Col>
  </Row>


    </>
  )
}






