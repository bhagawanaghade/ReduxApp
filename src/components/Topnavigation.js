
import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


const TopNav = [
    {
        key:"Home",
        value:"Home"
    },
    {
        key:"API",
        value:"API"
    },
    {
        key:"Doc",
        value:"Doc"
    }

]

class TopNavigation extends React.Component{
    render(){
        return(
            <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["Home"]}
              style={{ lineHeight: "64px" }}
            >
              {TopNav.map(t=><Menu.Item key={t.key}>{t.key}</Menu.Item>)}
            </Menu>
          </Header>
        )
    }
}

export default TopNavigation;