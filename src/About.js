import styles from '../src/components/PageTitle/PageTitle.module.scss';

const About = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.subtitle}>lorem ipsum</p>
        </div>
    );
};

export default About;