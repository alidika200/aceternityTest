import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'antd';
import './dropDownNavBar.css';
import {
  AppstoreOutlined,
  PieChartOutlined,
  HomeOutlined,
  ShoppingOutlined,
  StarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  // Determine initial selected key based on current location
  const initialSelectedKey = () => {
    switch (location.pathname) {
      case '/feed':
        return '1';
      case '/store':
        return '3';
      case '/library':
        return '4';
      case '/tournament':
        return '5';
      case '/friends':
        return '6';
      case '/dashboard':
        return '2';
      default:
        return '1';
    }
  };

  const [selectedKey, setSelectedKey] = useState(initialSelectedKey);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (e) => {
    setSelectedKey(e.key); // Update the selected key based on the clicked menu item
  };

  return (
    <div
      style={{
        position: 'fixed',
        width: 72,
        left: 0,
        marginTop: 80,
        overflowY: 'auto',
        borderRadius: 15,
        zIndex: 1000,
        transition: 'width 0.3s ease',
      }}
    >
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        onClick={handleMenuClick} // Handle click event to update selected key
        selectedKeys={[selectedKey]} // Dynamically set selected keys based on state
        style={{
          backgroundColor: 'inherit',
        }}
      >
        <Menu.Item key="1">
            <Tooltip title="Feed" placement="right">
          <Link to="/feed">

              <HomeOutlined />
          </Link>

            </Tooltip>
        </Menu.Item>
        
        <Menu.Item key="3">
            <Tooltip title="Store" placement="right">
          <Link to="/store">

              <ShoppingOutlined />
          </Link>

            </Tooltip>
        </Menu.Item>
       
        <Menu.Item key="4">
            <Tooltip title="Library" placement="right">
          <Link to="/library">

              <AppstoreOutlined />
              
              </Link>

            </Tooltip>
        </Menu.Item>
        <Menu.Item key="5">

            <Tooltip title="Tournament" placement="right">
          <Link to="/tournament">
              <StarOutlined />
              </Link>
            </Tooltip>
        </Menu.Item>
        <Menu.Item key="6">
            <Tooltip title="Friends" placement="right">
          <Link to="/friends">
              <TeamOutlined />
          </Link>
            </Tooltip>
        </Menu.Item>
        <Menu.Item key="2">
          
            <Tooltip title="Dashboard" placement="right">
            <Link to="/dashboard">
              <PieChartOutlined />
              </Link>
            </Tooltip>
          
        </Menu.Item>
      </Menu>
    
    </div>
  );
};

export default SideNav;
