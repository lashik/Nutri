import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import AOS from 'aos';
import Header from 'components/header';
import Footer from 'components/footer';
import { isMobile } from 'react-device-detect';
import Aboutme from 'components/Aboutme';
import Booknow from 'components/Booknow';
import Blog from 'components/Blog';
import 'aos/dist/aos.css';
import './fonts.css';

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
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/booknow" component={Booknow} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
