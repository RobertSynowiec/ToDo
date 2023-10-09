import styles from './Card.module.scss';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSetIsFavorite, removeCard } from '../../redux/cardsRedux'
import ButtonRemove from '../ButonRemove/ButtonRemove';

const Card = props => {

    const favorite = useSelector((state) =>
        state.cards.find((card) => card.id === props.cardId)?.isFavorite
    );

    const dispatch = useDispatch();

    const remove = e => {
        e.preventDefault();
        dispatch(removeCard(props.cardId));
    };

    const toggleFavorite = e => {
        e.preventDefault();
        dispatch(addSetIsFavorite(props.cardId));
    };

    return (
        <li className={styles.card}>{props.title}
            <div>
                <ButtonFavorite favorite={favorite} onClick={toggleFavorite} />
                <ButtonRemove onClick={remove} />
            </div>
        </li >
    );
};

export default Card;