import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import AOS from 'aos';
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
    <Router basename={process.env.BASE_PATH}>
      <Switch>
        <Route exact path="/">
          <div>
            pxCode Screen List: <br />
            <Link to="/Home">Home</Link>
          </div>
          <div>
            pxCode Screen List: <br />
            <Link to="/Aboutme">aboutme</Link>
          </div>
          <div>
            pxCode Screen List: <br />
            <Link to="/Booknow">aboutme</Link>
          </div>
          <div>
            pxCode Screen List: <br />
            <Link to="/Blog">aboutme</Link>
          </div>
        </Route>

        <Route exact path="/Home" component={Home} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Booknow" component={Booknow} />
        <Route exact path="/Aboutme" component={Aboutme} />
      </Switch>
    </Router>
  );
}

export default App;
