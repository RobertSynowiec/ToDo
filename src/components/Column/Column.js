import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { makeSelectFilteredCards } from '../../redux/searchStringRedux';
import { useMemo } from 'react';
import shortid from 'shortid';

const Column = props => {

    const selectFilteredCards = makeSelectFilteredCards();

    const filteredCards = useSelector((state) => selectFilteredCards(state, props.id));

    const renderedCards = useMemo(() => filteredCards.map(card =>
        <Card
            key={shortid()}
            title={card.title}
            cardId={card.id}
        />), [filteredCards])


    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h2>
            <ul className={styles.cards}>
                {renderedCards}
            </ul>
            <CardForm columnId={props.id} action={props.action} />
        </article>
    )
}

export default Column;