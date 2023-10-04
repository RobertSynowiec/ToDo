import styles from '../src/components/PageTitle/PageTitle.module.scss';

const Favorite = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>Favorite</h1>
            <p className={styles.subtitle}>lorem ipsum</p>
        </div>
    );
};

export default Favorite;