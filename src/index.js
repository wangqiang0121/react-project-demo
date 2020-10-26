import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { CSSDemo, CSSModulesDemo, StyledComponentsDemo } from './style';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/css">CSS</Link>
            </li>
            <li>
              <Link to="/css-modules">CSS Modules</Link>
            </li>
            <li>
              <Link to="/styled-components">styled components</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/css">
            <CSSDemo />
          </Route>
          <Route path="/css-modules">
            <CSSModulesDemo />
          </Route>
          <Route path="/styled-components">
            <StyledComponentsDemo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));