import styles from '../PageTitle/PageTitle.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { selectFavoriteCards } from '../../redux/cardsRedux';
import shortid from 'shortid';

const Favorite = () => {

    //const favoriteCards = useSelector(selectFavoriteCards);

    const favoriteCards = useSelector((state) => selectFavoriteCards(state))

    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>Favorite</h1>
            <p className={styles.subtitle}>lorem ipsum</p>
            {favoriteCards.length === 0 ? (
                <p className={styles.subtitle}>No cards…</p>
            ) : (
                <ul>
                    {favoriteCards.map((card) => (
                        <Card key={shortid()}
                            title={card.title}
                            cardId={card.id} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorite;