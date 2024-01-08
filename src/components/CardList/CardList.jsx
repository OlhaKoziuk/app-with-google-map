import React, { useState } from 'react';
import { Card } from '../Card/Card';
import styles from './CardList.module.css';
import { Button } from '../AddAdButton';
import { Modal } from '../Modal';

export const CardList = ({ advs, ads, onSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className={styles.container}>
      <Button
        openModal={openModal}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        ads={ads}
        onSubmit={onSubmit}
      />
      {advs.map((ad) => (
        <Card key={ad.id} ad={ad} />
      ))}
    </div>
  );
};