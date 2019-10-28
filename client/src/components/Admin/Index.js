import React from "react"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Navigation from "../Navigation"
import Schedule from "./Schedule"
import SideBar from "./Sidebar"
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from "react-router-dom";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default class Admin extends React.Component {

  render() {
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar/>
            <Layout>
              <Navigation/>

              <Content style={{ margin: '0 16px' }}>
                <Schedule/>
              </Content>

              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

            </Layout>
        </Layout>

    

     

      </>
    );
  }
}
