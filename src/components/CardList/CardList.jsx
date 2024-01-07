import React from 'react';
import { Card } from '../Card/Card';
import styles from './CardList.module.css';
import { Button } from '../AddAdButton';

export const CardList = ({ advs, onSubmit}) => {
  return (
    <div className={styles.container}>
      <Button advs={advs} onSubmit={onSubmit} />
      {advs.map((ad, index) => (
        <Card key={index} ad={ad} />
      ))}
    </div>
  );
};