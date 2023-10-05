import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {


    return (
        <nav className={styles.navBar} >
            <Container>
                <div className={styles.nav}>
                    <ul>
                        <li>< i className='fa fa-tasks'></i></li>
                    </ul>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>Favorite</a></li>
                        <li><a href='/favorite'>About</a> </li>
                    </ul>
                </div>
            </Container>
        </nav >
    );
};

export default NavBar;