import React, { useState } from 'react';
import { Tooltip } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  HomeOutlined,
  ShoppingOutlined,StarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: 'Feed',
  },
  {
    key: '3',
    icon: <ShoppingOutlined />,
    label: 'Store',
  },
  {
    key: '4',
    icon: <AppstoreOutlined />,
    label: 'Library',
  },
  {
    key: '5',
    icon: <StarOutlined />,
    label: 'Tournamnets',
  },
  {
    key: '6',
    icon: <TeamOutlined />,
    label: 'Freinds',
  },
  {
    key: '2',
    icon: <PieChartOutlined />,
    label: 'Dash Board',
  },

];

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <div
      style={{
        position: 'fixed',
        width:  72,
        left: 0,
        marginTop: 80,
        overflowY: 'auto',
        borderRadius: 15,
        zIndex: 1000,
        transition: 'width 0.3s ease',
       
      }}
    >
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        onClick={handleMenuClick}
        selectedKeys={[selectedKey]}
        style={{
         backgroundColor:'inherit'
          
        }}
      >
        {items.map(item => (
          <Menu.Item key={item.key}>
            <Tooltip title={item.label} placement="right">
              {item.icon}
            </Tooltip>
          </Menu.Item>
        ))}
      </Menu>
      <style jsx global>{`
        .ant-menu-item-selected {
          background-color: #4321ed !important; 
        }
      `}</style>
    </div>
  );
};

export default SideNav;
