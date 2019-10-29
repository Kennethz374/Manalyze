import React from 'react';
import { Layout, Menu } from 'antd';
import {
  Link
} from "react-router-dom";

const { Header } = Layout;

 export default function Navigation () {

   return (
      <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: '64px' }}
        >
        <Menu.Item key="1"><Link to="/"> Home </Link></Menu.Item>
        <Menu.Item key="2"><Link to="/hairstylists" > Hairstylists </Link></Menu.Item>
        <Menu.Item key="3"><Link to="/products"> Products </Link></Menu.Item>
        <Menu.Item key="4"><Link to="/services"> Services </Link></Menu.Item>
        <Menu.Item key="5"><Link to="/aboutus"> About Us </Link></Menu.Item>
        <Menu.Item key="6"><Link to="/login"> Login </Link></Menu.Item>
        <Menu.Item key="7"><Link to="/register"> Register </Link></Menu.Item>
        <Menu.Item key="8"><Link to="/admin/schedule"> Admin </Link></Menu.Item>

      </Menu>
      </Header>
   )
 }