import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addSearchString } from '../../redux/store';

const SearchForm = () => {
    const [searchString, setsearchString] = useState('');

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