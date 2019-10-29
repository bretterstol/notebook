import React, { useState } from 'react'
import {RouteComponentProps} from '@reach/router'
import { useQuery, useLazyQuery } from '@apollo/react-hooks';

import ContentTable from './ContentTable'
import Searchbar from './Searchbar';
import CreateNote from './CreateNote';
import { GET_NOTES, GET_NOTE } from '../queries';
import { QueryResult } from '@apollo/react-common';

export interface Note{
    description: string;
    tags: string[];
    note: string;
    _id: string;
    created: string;
    modified: string;
}

const Notebook = (props: RouteComponentProps) => {
    const [showNewNote, setShowNewNote] = useState(false);

    const {loading, error, data} = useQuery(GET_NOTES);

    const [getNote, noteData] = useLazyQuery(GET_NOTE);

    const handleClick = () => {
        setShowNewNote(!showNewNote);
    }
    const handleShowSpesficNote = (_id:string) => {
        getNote({variables: {_id}});
        handleClick();
    }
    if(error || noteData.error) return <p>{error}</p>;
    else if(loading || noteData.loading) return <p>loading...</p>
    else return(
        <div>
            <Searchbar />
            <button onClick={handleClick}>New note</button>
            {
                showNewNote ?
                    <CreateNote 
                        description={noteData.data.note.description || ""} 
                        tags={noteData.data.note.tags.join(", ") || ""}
                        text={noteData.data.note.text || ""}
                        goBack={handleClick}
                        /> :
                     <ContentTable notes={data.notes} onClick={handleShowSpesficNote}/>
            }
        </div>
    );
}

export default Notebook;