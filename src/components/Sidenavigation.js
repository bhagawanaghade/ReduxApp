
import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


const SideNav = [{
    name: "Users",
    children: [{
        name: "Active"
      },
      {
        name: "Offline"
      }
    ]
  },
  {
    name: "Collections",
    children: [{
        name: "In-Memo"
      },
      {
        name: "Cloud"
      },
      {
        name: "Remote"
      },
      {
        name: "Local"
      }
    ]
  },
  {
    name: "Security",
    children: [{
        name: "Roles"
      },
      {
        name: "Permissions"
      },
      {
        name: "Access Keys"
      }
    ]
  },
  {
    name: "Configiration"
  }
]
class SideNavigation extends React.Component{
  renderSubmenu({name,children}){
    return(<SubMenu key={name} title={<span><Icon type="user" />{name}</span>}>
        {children.map((item)=>this.renderMenuItems(item))}
         </SubMenu>
    )
  }
  renderMenuItems(item){
    return (
      <Menu.Item key={item.name}>{item.name}</Menu.Item>
    )
  }
    render(){
        return (
          <Sider>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
          {
            SideNav.map((item)=>{
              if(item.children){
                return this.renderSubmenu(item)
              }
              this.renderMenuItems(item);
            })
          }
           </Menu>
          </Sider>
        )
    }
}

export default SideNavigation;