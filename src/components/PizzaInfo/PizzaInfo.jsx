import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { Modal } from 'components/Modal/Modal';
import styles from './PizzaInfo.module.scss';

const PizzaInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://6354da35da523ceadcf4f9d8.mockapi.io/items/${id}`
        );

        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиц');
        navigate('/');
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <Modal>
      <img src={pizza.imageUrl} alt={pizza.title} className={styles.img} />
      <div>
        <h2>{pizza.title}</h2>
        <p>{pizza.price}</p>
      </div>
    </Modal>
  );
};

export default PizzaInfo;
