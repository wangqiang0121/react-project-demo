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
  return <CSSModulesDemo/>
}

ReactDOM.render(<App />, document.getElementById("root"));