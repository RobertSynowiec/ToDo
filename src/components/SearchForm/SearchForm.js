import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addSearchString } from '../../redux/store';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const SearchForm = () => {
    const [searchString, setsearchString] = useState('');
    const location = useLocation();

    const pathsToReset = ['/list/1', '/list/2'];

    useEffect(() => {
        const isReturningToTheSamePage = pathsToReset.includes(location.pathname);

        if (isReturningToTheSamePage) {
            dispatch(addSearchString(searchString));
            setsearchString('');
        }
    }, [location.pathname]);

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addSearchString(searchString));
        setsearchString('');
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput value={searchString} onChange={e => setsearchString(e.target.value)} placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};




export default SearchForm;