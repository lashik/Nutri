import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import AOS from "aos";
import { isMobile } from "react-device-detect";
import "aos/dist/aos.css";
import "./fonts.css";
import EditBlog from "components/Editblog";
import Header from "components/header";
import Footer from "components/footer";
import Home from "components/Home";
import Aboutme from "components/Aboutme";
import Booknow from "components/Booknow";
import Blog from "components/Blog";

import AdminDashboard from "components/AdminDashboard";
import AdminPage from "AdminPage";

function App() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin-login" element={<AdminPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/blog/edit/:id" element={<EditBlog />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;