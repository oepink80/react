import React from 'react';
import styles from './Card.module.css';

interface Props {
  title: string;
  content: string | JSX.Element;
  buttonText?: string;
}



const Card = ({ title, content, buttonText }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      {buttonText && (
        <button className={styles.button}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;