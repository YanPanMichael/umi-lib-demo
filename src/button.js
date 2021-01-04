import React from 'react';
import classnames from 'classnames';
import styles from './button.module.less';

export default function(props) {
  return (
    <button
      style={{color: props.color}}
      className={classnames(styles.large, styles.bold)}
    >{props.children}</button>
  )
}