import React from 'react';
import styles from './Card.module.css';

export const Card = ({ad}) => {
  return (
    <div className={styles.adCard}>
      <img className={styles.adImage} src={ad.image} alt="Ad Preview" />
      <h3 className={styles.adTitle}>{ad.title}</h3>
      <p className={styles.adDescription}>{ad.description}</p>
      <button className={styles.adButton}>View Details</button>
    </div>
  );
};