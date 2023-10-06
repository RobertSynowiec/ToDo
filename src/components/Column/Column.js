import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';
import { useMemo } from 'react';
import shortid from 'shortid';

const Column = props => {
    const cards = useSelector(state => getFilteredCards(state, props.id));

    const renderedCards = useMemo(() => cards.map(card =>
        <Card
            key={shortid()}
            title={card.title}
            cardId={card.id}
        />), [cards])


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