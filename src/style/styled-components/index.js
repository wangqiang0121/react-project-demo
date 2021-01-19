import React, { Fragment } from "react";
import Basic from "./basic";
import PropsStyle from './props-styles';

const Demo = () => {
  return (
    <Fragment>
      <h1>Basic 基本用法</h1>
      <Basic />
      <h1>Dynamic Style 动态样式</h1>
      <PropsStyle />
    </Fragment>
  );
};

export default Demo;
