import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

import { fetchTodo } from '../redux/actions/todoAction';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
];
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const Table = () => {
    const [search, setSearch] = useState('');


    const todo = useSelector(state => state.allTodo);

    const dispatch = useDispatch();

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filterTodo = {
        todo: todo.todo.filter((item) =>
            item.title.includes(search)
        ),
    };

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    return (
        <>
            <label htmlFor="search">
                Search by Task:
                <input id="search" type="text" onChange={handleSearch} />
            </label>
            <DataTable
                columns={columns}
                data={filterTodo.todo}
                progressPending={todo.todo.length > 0 ? false : true}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                pagination
            />
        </>
    )
}

export default Table