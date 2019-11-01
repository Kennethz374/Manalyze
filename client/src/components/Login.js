import React from "react"
import { Input,Icon,Button } from 'antd';

export default function Loginpage () {
  return (
    <>
    <Input size="large"
      placeholder="Enter your username"
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    ></Input>
    <Input.Password placeholder="input password" size="large"/>
    <Button>Submit</Button>
    <Button>Cancel</Button>

    </>
  )
}
