import React, { useState } from "react";
import ReactDOM from "react-dom";
import classnames from 'classnames';
import LocalStyleTitle from './components/LocalTitle';
// import GlobalStyleTitle from './components/GlobalTitle';

import exampleStyles from './example.m.scss';
import './example.scss';

const App = () => {
  const [red, setRed] = useState(false);
  const [big, setBig] = useState(false);

  return (
    <>
      <h3>一、利用 CSS Modules 避免样式污染</h3>
      <p>Example:</p>
      <LocalStyleTitle>Use CSS Mouldes Title</LocalStyleTitle>
      {/*<GlobalStyleTitle>No CSS Mouldes Title</GlobalStyleTitle>*/}
      <p className="title">Page Title</p>

      <h3>二、CSS Modules 动态+组合</h3>
      <p>Example:</p>
      <button onClick={() => setRed(!red)}>红色</button>
      <button onClick={() => setBig(!big)}>大号</button>
      <p className={classnames({
        [exampleStyles.red]:red,
        [exampleStyles.bigSize]: big
      })}>Hello World!</p>

      <h3>三、CSS Modules 覆盖全局样式</h3>
      <p>Example:</p>
      <p className={exampleStyles.parent}>
        Parent
        <p className="child">Child1</p>
      </p>
      <p className="child">Child2</p>
    </>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
