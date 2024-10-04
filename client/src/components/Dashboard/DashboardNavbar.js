import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { TabList, TabPanel,Tab, Tabs } from 'react-tabs';
import user from '../../assets/1.png'
const DashboardNavbar = () => {
  


  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header
      class="border-bottom pt-1 dashboard-nav"
      style={{ backgroundColor: "var(--white)" }}
    >
      <div class="container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding:"1.2rem 0"
          }}
        >
         <div className="dashboard-head" style={{display:"flex",flexDirection:"column",marginLeft:"-20px",marginTop:"-3px"}}>
          <h3>Dashboard</h3>
          <p style={{marginTop:"-5px"}}>23-5-2024</p>
         </div>
        <img src={user} alt="" style={{width:"44px",height:"44px"}}/>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;

