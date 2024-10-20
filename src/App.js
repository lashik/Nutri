import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditBlog from "components/Editblog";
import Header from "components/header";
import Footer from "components/footer";
import Home from "components/Home";
import Aboutme from "components/Aboutme";
import Booknow from "components/Booknow";
import Blog from "components/Blog";
import ViewBlog from "components/ViewBlog";
import AdminDashboard from "components/AdminDashboard";
import AdminPage from "AdminLogin";

function App() {
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
          <Route path="/blog/view/:id" element={<ViewBlog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
