import React, { useState } from "react";
import styles from "./Button.module.css";
import { Modal } from "../Modal";



export const Button = ({ onSubmit, advs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button type="button" className={styles.button} onClick={openModal}>
        Create advertisement
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        advs={advs}
        onSubmit={onSubmit}
      />
    </div>
  );
};
