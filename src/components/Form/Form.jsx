import React, { useState } from "react";
import styles from "./Form.module.css";

export const Form = ({ onSubmit, advs, onClose }) => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAd = {
      id: Math.max(...advs.map((ad) => ad.id), 0) + 1,
      position,
      image,
      title,
    };

    onSubmit(newAd);

    setPosition({ lat: 0, lng: 0 });
    setImage("");
    setTitle("");
    onClose(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Latitude:
        <input
          type="text"
          value={position.lat}
          onChange={(e) =>
            setPosition({ ...position, lat: Number(e.target.value) })
          }
        />
      </label>
      <label>
        Longitude:
        <input
          type="text"
          value={position.lng}
          onChange={(e) =>
            setPosition({ ...position, lng: Number(e.target.value) })
          }
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button
        type="submit"
      >
        Create Advertisement
      </button>
    </form>
  );
};

