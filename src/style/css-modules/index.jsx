import React, { useState } from "react";
import classnames from 'classnames';

// 样式模块化引入
import styles from './example.m.scss';
// 样式全量引入
import './example.scss';

const Demo = () => {
  const [red, setRed] = useState(false);
  const [big, setBig] = useState(false);

  return (
    <>
      <h3>一、默认局部作用域</h3>
      <p>Example:</p>
      <p className={styles.title}>Use CSS Mouldes Title</p>
      <p className="title">Page Title</p>

      <h3>二、动态+组合</h3>
      <p>Example:</p>
      <button onClick={() => setRed(!red)}>红色</button>
      <button onClick={() => setBig(!big)}>大号</button>
      <p className={classnames({
        [styles.red]:red,
        [styles.bigSize]: big
      })}>Hello World!</p>

      <h3>三、覆盖全局样式</h3>
      <p>Example:</p>
      <div className={styles.parent}>
        Parent
        <p className="child">Child1</p>
      </div>
      <p className="child">Child2</p>

      <h3>三、样式继承</h3>
      <p>Example:</p>
      <div className={styles.buttonOne}>1号按钮</div>
      <div className={styles.buttonTwo}>2号按钮</div>
      <div className={styles.buttonThree}>3号按钮(继承其他模块)</div>

      <h3>三、伪类选择器</h3>
      <p>Example:</p>
      <p className={ styles.text }>Text with hover</p>


      <h3>推荐阅读</h3>
      <a href="https://github.com/camsong/blog/issues/5">CSS Modules 详解及 React 中实践</a>
    </>
  )
};

export default Demo;

