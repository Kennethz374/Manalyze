import React from "react"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Schedule from "./Schedule"
import SideBar from "./Sidebar"
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Statistics(props) {
  return <div>Statistics</div>
}

export default class Admin extends React.Component {

  render() {
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar/>
            <Layout>
              <Content style={{ margin: '0 16px' }}>
                <Switch>
                  <Route exact path="/admin" render={() => <Redirect to="/admin/schedule" />} />
                  <Route path="/admin/schedule" component={Schedule} />
                  <Route path="/admin/statistics" component={Statistics} />
                </Switch>
              </Content>
            </Layout>
        </Layout>
      </>
    );
  }
}
