import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addSearchString } from '../../redux/store';
import React, { useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';

const SearchForm = () => {
    console.log(' SearchForm działa')

    const [searchString, setsearchString] = useState('');

    const location = useLocation();

    useEffect(() => {
        console.log(' useEffect działa')
        dispatch(addSearchString(searchString));
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