import React from "react"
import { Layout, Menu, Icon } from 'antd';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
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
      <>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['11']} mode="inline">
            <Menu.Item key="11">
              <Icon type="pie-chart" />
              <Link to="/admin/schedule"><span>Schedule</span></Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Icon type="desktop" />
              <Link to="/admin/statistics"><span>Statistics</span></Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Employees</span>
                </span>
              }
            >
              <Menu.Item key="13">Tom</Menu.Item>
              <Menu.Item key="14">Bill</Menu.Item>
              <Menu.Item key="15">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Products/Services</span>
                </span>
              }
            >
              <Menu.Item key="16">Products</Menu.Item>
              <Menu.Item key="18">Services</Menu.Item>
            </SubMenu>
            <Menu.Item key="19">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        </>

    )
  }
}