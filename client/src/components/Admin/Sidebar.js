import React from "react"
import { Layout, Menu, Icon } from 'antd';
import {
  Link
} from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;
export default class SideBar extends React.Component {

  state = {
    collapsed: false,
  };
  
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['11']} mode="inline">

            <Menu.Item key="11">
              <Icon type="calendar" />
              <span className="nav-text">Schedule</span>
              <Link to="/admin/schedule"/>
            </Menu.Item>

            <Menu.Item key="12">
              <Icon type="line-chart" />
              <span className="nav-text">Statistics</span>
              <Link to="/admin/statistics" />
            </Menu.Item>

            <Menu.Item key="13">
              <Icon type="team" />
              <span className="nav-text">Stylists/Employees</span>
              <Link to="/admin/employees"/>
            </Menu.Item>

            <Menu.Item key="14">
              <Icon type="idcard" />
              <span className="nav-text">Clients</span>
              <Link to="/admin/clients"/> 
            </Menu.Item>

            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="shopping" />
                  Products/Services
                </span>
              }
            >
              <Menu.Item key="16">
                Products
                <Link to = "/admin/products"/>
              </Menu.Item>
              <Menu.Item key="18">
                Services
                <Link to = "/admin/services"/>
              </Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
    )
  }
}