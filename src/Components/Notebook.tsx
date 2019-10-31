import React from 'react'
import Searchbar from './Search/Searchbar';
import {navigate} from '@reach/router';

export interface Note{
    description: string;
    tags: string[];
    text: string;
    _id: string;
    created: string;
    modified: string;
}

const Notebook = (props:any) => {
    const handleClick = () => {
        navigate("/note/")
    }
    return(
        <div>
            <Searchbar />
            <button onClick={handleClick}>New note</button>
            {props.children}
        </div>
    );
}

export default Notebook;