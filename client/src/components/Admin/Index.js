import React from "react"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Navigation from "../Navigation"
import Schedule from "./Schedule"
import SideBar from "./Sidebar"
import Pie from "./Statistics"
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
                <Router>
                  <Route exact path= "/admin/schedule">
                   <Schedule/>
                  </Route>

                  <Route exact path= "/admin/statistics">
                    <h1>123123123</h1>
                  </Route>

                </Router>

              </Content>

              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

            </Layout>
        </Layout>

    

     

      </>
    );
  }
}
