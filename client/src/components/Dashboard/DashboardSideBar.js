import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaChartLine,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBook,
  FaExclamationCircle,
  FaUser,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';

import logo from "../../assets/1.png";
import "./DashboardSidebar.css";

const DashboardSidebar = ({ setSelectedMainComponent }) => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  const handleResize = () => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    setCollapsed(mobile);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedMainComponent(item);
    if (isMobile) {
      setCollapsed(true);
    }
  };

  const sidebarItems = [
    { name: "Profile", icon: <FaChartLine style={{ color: "white" }} /> },
    { name: "Add Space", icon: <FaChalkboardTeacher style={{ color: "white" }} /> },
    { name: "All Space", icon: <FaUserGraduate style={{ color: "white" }} /> }
    
  ];
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <Sidebar collapsed={collapsed} backgroundColor="var(--primary)" style={{ height: "100vh", position: "fixed" }}>
      <div className="sidebar-header">
        <div className="logo-section">
          {/* <img src={logo} alt="Logo" className="sidebar-logo" style={{ marginLeft: "10px", fontSize: "18px", marginTop: "20%" }} /> */}
          {!collapsed && (
            <span className="sidebar-title" style={{ fontSize: "20px", marginTop: "20%", fontWeight: "bold",
              fontWeight: "400",
              position: "relative",
              top: "4px",
              color: "#454545" }}>  CoSpaceX Dashboard</span>
          )}
        </div>
        {/* <button
          onClick={() => setCollapsed(!collapsed)}
          className="toggle-button"
          style={{ backgroundColor: 'rgb(0, 23, 84)', marginTop: !collapsed ? "-40px" : "10px", marginRight: !collapsed ? "10px" : "12px" }}
        >
          <FaBars style={{ color: "white", fontSize: "20px" }} />
        </button> */}
      </div>
      <Menu
        menuItemStyles={{
          button: ({ level, active }) => ({
            backgroundColor: active ? 'rgb(0, 23, 84)' : undefined,
            color: active ? 'white' : undefined,
            '&:hover': {
              backgroundColor: 'var(--primary)',
              color: 'white',
            },
          }),
        }}
      >
        {sidebarItems.map((item, index) => (
          <MenuItem key={index} icon={item.icon} onClick={() => handleItemClick(item.name)} style={{ marginLeft: "10px" }}>
            <Link to={`/admin-dashboard`} style={{ color: "white", textDecoration: "none" }}>
              {item.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
      <Menu
        className="sidebar-bottom"
        menuItemStyles={{
          button: ({ level, active }) => ({
            // backgroundColor: active ? 'rgb(0, 23, 84)' : undefined,
            color: active ? 'white' : undefined,
            '&:hover': {
              backgroundColor: 'var(--primary)',
              color: 'white',
            },
          }),
        }}
      >
        <MenuItem icon={<FaSignOutAlt style={{ color: "white" }} />} onClick={() => handleItemClick("Logout")}>
          {!collapsed && (
            <Link  style={{ color: "white", textDecoration: "none" }}
            onClick={handleLogout}>
              Logout
            </Link>
          )}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default DashboardSidebar;
