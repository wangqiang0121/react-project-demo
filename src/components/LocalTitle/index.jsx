import React from 'react';
import styles from './index.m.scss';

const Title = (props) => {
  return <p className={styles.title}>{props.children}</p>
}

export default Title;