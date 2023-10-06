import styles from './ButtonFavorite.module.scss';
import React from 'react';
import clsx from 'clsx';

const ButtonFavorite = ({ active, onClick }) => {
    console.log(active);
    return (
        <button
            className={clsx(styles.favoriteButton, { [styles.active]: active })}
            onClick={onClick}
        >
            <span className="fa fa-star-o" />
        </button>
    );
}

export default ButtonFavorite;