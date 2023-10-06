import styles from './Card.module.scss';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite'
import React from 'react';

const Card = props => {

    const [isActive, setIsActive] = React.useState(false);
    console.log('isActive ', isActive)

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <li className={styles.card}>{props.title}
            <ButtonFavorite active={isActive} onClick={toggleActive} />
        </li >
    );
};

export default Card;