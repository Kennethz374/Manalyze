import React from "react"
import {Layout, Menu} from "antd" 
const { Header } = Layout

export default function Navigation () {
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Hairstylist</Menu.Item>
        <Menu.Item key="3">Products</Menu.Item>
        <Menu.Item key="4">Services</Menu.Item>
        <Menu.Item key="5">About Us</Menu.Item>
        <Menu.Item key="6" onClick={()=>alert("You clicked login")}>Login</Menu.Item>
        <Menu.Item key="7">Register</Menu.Item>

      </Menu>
    </Header>
  )
}
