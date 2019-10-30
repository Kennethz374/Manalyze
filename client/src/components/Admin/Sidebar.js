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
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['11']} mode="inline" style={{ color:'#bc9355' }}>

            <Menu.Item key="11">
              <Icon type="pie-chart" />
              <span className="nav-text"><Link to="/admin/schedule">Schedule</Link></span>
            </Menu.Item>

            <Menu.Item key="12">
              <Icon type="desktop" />
              <span className="nav-text"><Link to="/admin/statistics">Statistics</Link></span>
            </Menu.Item>

            <Menu.Item key="13">
              <Icon type="desktop" />
              <Link to="/admin/employees"> Employees/Stylists </Link>
            </Menu.Item>

            <Menu.Item key="14">
              <Icon type="desktop" />
              <Link to="/admin/clients"> Clients </Link>
            </Menu.Item>

            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  Products/Services
                </span>
              }
            >
              <Menu.Item key="16">Products</Menu.Item>
              <Menu.Item key="18">Services</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
    )
  }
}