import React from 'react';

import styles from './card.module.css';

interface Props {
  title: string;
  content: string | JSX.Element;
  buttonText?: string;
  handleClick?: () => void;
}

const Card = ({ title, content, buttonText, handleClick }: Props) => (
  <div className={styles.card}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.content}>{content}</p>
    {buttonText && (
      <button className={styles.button} onClick={handleClick}>
        {buttonText}
      </button>
    )}
  </div>
);

export default Card;
