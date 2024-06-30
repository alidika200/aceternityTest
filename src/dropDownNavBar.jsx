import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip, Menu } from 'antd';

import './dropDownNavBar.css';
import {
  AppstoreOutlined,
  PieChartOutlined,
  HomeOutlined,
  ShoppingOutlined,
  ShopOutlined,
  StarOutlined,
  TeamOutlined,
  TrophyOutlined
} from '@ant-design/icons';

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const initialSelectedKey = () => {
    switch (location.pathname) {
      case '/feed':
        return '1';
      case '/store':
        return '3-1';
      case '/wishlist':
        return '3-2';
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
    setSelectedKey(e.key);
  };

  return (
    <div
      style={{
        position: 'fixed',
        width: collapsed ? 80 : 90,
        left: 0,
        marginTop: 80,
       
        borderRadius: 15,
        zIndex: 1000,
        transition: 'width 0.3s ease',
      }}
    >
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        onClick={handleMenuClick}
        selectedKeys={[selectedKey]}
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
       
        <Menu.SubMenu key="3" icon={<ShopOutlined />}>
          <Menu.Item key="3-1" >
            <Link to="/store">
              
              <ShoppingOutlined />
            </Link>
          </Menu.Item>
          <Menu.Item key="3-2">
            <Link to="/wishlist">
            <StarOutlined />
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

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
              <TrophyOutlined />
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
