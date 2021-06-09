import React, {useState} from 'react';
import {CgSearch} from 'react-icons/cg';
import './Search.css';

const SearchTasks = () => {
    const [search, setSearch] = useState('');

    return(
        <div className="searchArea">
            <input type="search"
            className="searchTask"
            placeholder="Buscar tarefa"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            />

            <CgSearch className="searchBtn" />
        </div>
    )
}

export default SearchTasks;