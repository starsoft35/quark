import * as React from 'react';
import styles from './index.module.scss';

interface IProps {
  style?: React.CSSProperties;
  state?: 'empty' | 'error';
  image?: string;
  tipText?: string | React.ReactElement;
}

const states = {
  empty: {
    imgClassName: 'imgEmpty',
    tipText: 'No Data'
  },
  error: {
    imgClassName: 'imgError',
    tipText: 'Sorry, Page Error'
  }
};

export default ({
  style = {}, state = 'empty', image, tipText
}: IProps) => {
  const matchState = states[state] || {};
  const imgClassName = styles[matchState.imgClassName];
  return (
    <div className={styles.box} style={style}>
      <div className={`${styles.img} ${imgClassName}`} style={{ ...(image ? { backgroundImage: `url(${image})` } : {}) }} />
      <p className={styles.tip}>{tipText || matchState.tipText}</p>
    </div>
  );
};
