
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbarr from './Navbar';
import Profile from './Profile';

const Admin = () => {
  
  return (
    <>
    <Navbarr/>
   <Profile/>
    </>
  );
};

export default Admin;
