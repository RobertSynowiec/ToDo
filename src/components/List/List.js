import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById, getColumnsByList } from '../../redux/store';

const List = () => {
    const listData = useSelector(getListById);
    const columns = useSelector(getColumnsByList);

    console.log('listData ', listData);
    console.log('columns ', columns);

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <section className={styles.columns}>
                {columns.map(column =>
                    <Column
                        key={column.id}
                        {...column} />)}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;