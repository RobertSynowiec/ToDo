import styles from './ButtonRemove.module.scss';
import React from 'react';

const ButtonRemove = ({ onClick }) => {

    return (
        <button
            className={styles.removeButton}
            onClick={onClick}
        >
            <span className="fa fa-trash" />
        </button >
    );
}

export default ButtonRemove;