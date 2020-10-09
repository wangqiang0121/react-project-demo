import React from "react";
import ReactDOM from "react-dom";

import LocalStyleTitle from './components/LocalTitle';
import GlobalStyleTitle from './components/GlobalTitle';

const App = () => {
  return (
    <>
      <LocalStyleTitle>Hello Wepack!</LocalStyleTitle>
      <GlobalStyleTitle>Hello Wepack!</GlobalStyleTitle>
      <div className="title">Normal Title</div>
    </>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
