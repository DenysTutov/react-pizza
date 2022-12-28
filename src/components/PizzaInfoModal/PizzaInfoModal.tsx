import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { LayoutModal } from 'layout/LayoutModal/LayoutModal';
import styles from './PizzaInfoModal.module.scss';

const PizzaInfoModal: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://6354da35da523ceadcf4f9d8.mockapi.io/items/${id}`
        );

        setPizza(data);
      } catch (error) {
        alert('Error while getting pizza');
        navigate('/');
      }
    };

    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <LayoutModal navTo={'/'}>
      <div className={styles.modal}>
        <img src={pizza.imageUrl} alt={pizza.title} className={styles.img} />
        <div>
          <h2>{pizza.title}</h2>
          <p>{pizza.price}</p>
        </div>
      </div>
    </LayoutModal>
  );
};

export default PizzaInfoModal;
