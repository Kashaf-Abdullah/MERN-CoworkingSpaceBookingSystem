import React, { useState } from "react";
import DashboardSidebar from './DashboardSideBar';
import DashboardNavbar from "./DashboardNavbar";
// Import all the potential main components
import { Routes, Route, useNavigate } from "react-router-dom"; // Import useNavigate
import SpaceForm from "../Admin/SpaceForm";

import SpaceManager from "../Admin/SpaceManager";
import Profile from '../Admin/Profile'
import Admin from "../Admin/Admin";
import AllSpaces from "../Admin/AllSpaces";
// import Analytics from "../pages/AdminPortal/Analytics";
// import Teachers from "../pages/AdminPortal/Teachers";
// import Students from "../pages/AdminPortal/Students";
// import Essays from "../pages/AdminPortal/Essays";
// import AssignmentsDetails from "../pages/AdminPortal/AssignmentsDetails";
// import Complains from "../pages/AdminPortal/Complains";
// import Profile from "../pages/AdminPortal/Profile";
// import TeachersDetails from "../pages/AdminPortal/TeachersDetails";
// import StudentsDetails from "../pages/AdminPortal/StudentsDetails";
const AdminDashboard = () => {
  const [selectedMainComponent, setSelectedMainComponent] = useState('Profile'); // Default to 'Profile'

  // Function to render the selected main component
  const renderMainComponent = () => {
    switch (selectedMainComponent) {
      case 'Profile':
        return <Profile/>;
      case 'Add Space':
        return <SpaceForm />;
      case 'All Space':
        return <AllSpaces />;

      // case 'Students':
      //   return <Students />;
      // case 'StudentsDetails':
      //   return <StudentsDetails />;
      // case 'Essays':
      //   return <Essays />;
      // case 'AssignmentsDetails':
      //   return <AssignmentsDetails />;
      // case 'Complains':
      //   return <Complains />;
      // case 'Profile':
      //   return <Profile />;
        
      default:
        return <Admin/>;
    }
  };

  return (
    <div style={{display:"flex"}}>
      <div className="sidebarwidth">
        <DashboardSidebar setSelectedMainComponent={setSelectedMainComponent} />
      </div>
      <div style={{width:"87%"}}>
        <DashboardNavbar />
        {/* {renderMainComponent()} */}
        <Routes>
          <Route path="/" element={renderMainComponent()} />
          {/* <Route path="teachers-details" element={<TeachersDetails/>} /> Add Route for EssayDetails */}
          {/* <Route path="students-details" element={<StudentsDetails />} /> Add Route for EssayDetails */}
          {/* <Route path="assignments-details" element={<AssignmentsDetails />} /> Add Route for EssayDetails */}
        
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
