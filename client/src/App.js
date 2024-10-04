









import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Admin/Login';
import Signup from './components/Admin/Signup';
import Admin from './components/Admin/Admin';
import HomePage from './pages/HomePage';
import ProtectedRoute from './pages/ProtectedRoute';
import './App.css';
import SpaceManager from './components/Admin/SpaceManager';
import SpaceForm from './components/Admin/SpaceForm';
import Navbarr from './components/Navbarr';
import NavSocialLink from './components/NavSocialLink';
import Footer from './components/Footer';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AllSpaces from './components/Admin/AllSpaces';
import MemberShipPage from './pages/MemberShipPage';
import ServicesPage from './pages/ServicesPage';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';
import Notifications from './components/Notification';
import NotifyButton from './components/NotifyButton';
import BlogWritePage from './pages/BlogWritePage';
import Blog from './components/Blog';
import AllBlogsPage from './pages/AllBlogsPage';
import EventsPage from './pages/EventsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ReviewPage from './pages/ReviewPage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [spaces, setSpaces] = useState([]);
  const [editingSpace, setEditingSpace] = useState(null);
  const location = useLocation();

  const handleSaveSpace = (savedSpace) => {
    if (editingSpace) {
      setSpaces(spaces.map(space => (space._id === savedSpace._id ? savedSpace : space)));
      setEditingSpace(null);
    } else {
      setSpaces([...spaces, savedSpace]);
    }
  };

  const isAdminRoute = location.pathname.startsWith('/admin');








  return (
    <div>
      {!isAdminRoute && <NavSocialLink />}
      {!isAdminRoute && <Navbarr />}
      <Notifications/>
      <ScrollToTop/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
        <Route path="/" element={<HomePage />} />        
        <Route path="/admin/spaces" element={<SpaceForm space={editingSpace} onSave={handleSaveSpace} />}></Route>
        <Route path="/admin/allspaces" element={<SpaceManager />} ></Route>
        <Route path="/admin/approvedspaces" element={<AllSpaces />} ></Route>
        <Route path="/admin/notif" element={<ProtectedRoute element={<NotifyButton />} />} />
        <Route path="/admin/blog-upload" element={<ProtectedRoute element={<BlogWritePage />} />} />
        <Route path="/blog/:id" element={<Blog />} />
      
        <Route path="/blogs" element={<AllBlogsPage />} />
          
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
        <Route path="/membership" element={<MemberShipPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event" element={<EventsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/review" element={<ReviewPage />} />
        
      </Routes>
      {!isAdminRoute && <Footer/>}
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;