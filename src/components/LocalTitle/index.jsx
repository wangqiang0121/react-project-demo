import React from 'react';
import styles from './index.m.scss';

const Title = (props) => {
  return <h1 className={styles.bigSize}>{props.children}</h1>
}

export default Title;