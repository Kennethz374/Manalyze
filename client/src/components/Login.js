import React from "react"
import { Input,Icon,Button } from 'antd';

export default function Loginpage () {
  return (
    <React.Fragment>
    <Input
      placeholder="Enter your username"
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    ></Input>
    <Input.Password placeholder="input password" />
    <Button>Submit</Button>
    <Button>Cancel</Button>

    </React.Fragment>
  )
}
