import React from 'react';
import styles from './Modal.module.css';
import { Form } from '../Form';

export const Modal = ({ isOpen, onClose, advs, onSubmit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <Form onSubmit={onSubmit} advs={advs} onClose={onClose} />
      </div>
    </div>
  );
};





