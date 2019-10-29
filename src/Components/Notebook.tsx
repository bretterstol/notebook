import React, { useState } from 'react'
import {RouteComponentProps} from '@reach/router'
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

import ContentTable from './ContentTable'
import Searchbar from './Searchbar';
import CreateNote from './NoteContainer';
import { GET_NOTES, GET_NOTE } from '../queries';

export interface Note{
    description: string;
    tags: string[];
    text: string;
    _id: string;
    created: string;
    modified: string;
}

const Notebook = (props:any) => {
    const [showNewNote, setShowNewNote] = useState(false);

    const {loading, error, data} = useQuery(GET_NOTES);


    const handleClick = () => {
        setShowNewNote(!showNewNote);
    }
    if(error) return <p>{error}</p>;
    else if(loading) return <p>loading...</p>
    else return(
        <div>
            <Searchbar />
            <button onClick={handleClick}>New note</button>
            {
                showNewNote ?
                    <CreateNote goBack={handleClick} /> :
                     <ContentTable notes={data.notes} />
            }
        </div>
    );
}

export default Notebook;