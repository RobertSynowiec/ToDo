import styles from './ButtonFavorite.module.scss';
import React from 'react';
import clsx from 'clsx';

const ButtonFavorite = ({ favorite, onClick }) => {

    return (
        <button
            className={clsx(styles.favoriteButton, { [styles.favorite]: favorite })}
            onClick={onClick}
        >
            <span className="fa fa-star-o" />
        </button>
    );
}

export default ButtonFavorite;