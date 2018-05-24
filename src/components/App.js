import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import SideNavigation from './Sidenavigation';
import TopNavigation from './Topnavigation';
import ContentWrapper from './Contentwrapper';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import "../../style/app.css";

class App extends React.Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout>
        <TopNavigation/>
        <Layout>
          <SideNavigation/>
          <Layout style={{ padding: "0 10px 0px",marginTop:"10px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 480
              }}
            >
            <ContentWrapper/>
            </Content>
          </Layout>
        </Layout>

        <Layout>
          <Footer>
            <div style={{width:"60%",margin:"auto"}}>Marcket Cafe @2018 Created by Bhagawan aghade.</div>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
