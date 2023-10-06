import styles from './Card.module.scss';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSetIsFavorite } from '../../redux/store'

const Card = props => {

    const favorite = useSelector((state) =>
        state.cards.find((card) => card.id === props.cardId)?.isFavorite
    )
    const dispatch = useDispatch();

    const toggleFavorite = () => {
        dispatch(addSetIsFavorite(props.cardId));
    };

    return (
        <li className={styles.card}>{props.title}
            <ButtonFavorite favorite={favorite} onClick={toggleFavorite} />
        </li >
    );
};

export default Card;