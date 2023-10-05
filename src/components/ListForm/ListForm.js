import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { listId } = props;

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, listId }));
        setTitle('');
        setDescription('');
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label className={styles.label} >Title:</label> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <label className={styles.label}>Description:</label> <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>
                Add list
            </Button>
        </form>
    );
};

export default ListForm;