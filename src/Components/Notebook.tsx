import React, { useState } from 'react'
import {RouteComponentProps} from '@reach/router'
import {useQuery} from '@apollo/react-hooks';

import ContentTable from './ContentTable'
import Searchbar from './Searchbar';
import CreateNote from './CreateNote';

export interface Note{
    description: string;
    tags: string[];
    note: string;
}

const Notebook = (props: RouteComponentProps) => {
    const [showNewNote, setShowNewNote] = useState(false);

    const [notes, setNotes] = useState<Note[]>([]);

    const handleSetNotes = (note:Note) => {
        setShowNewNote(false);
        setNotes([...notes, note])
    }

    const handleClick = () => {
        setShowNewNote(!showNewNote);
    }
    return(
        <div>
            <Searchbar />
            <button onClick={handleClick}>New note</button>
            {
                showNewNote ?
                    <CreateNote saveNote={handleSetNotes}/> :
                    <ContentTable notes={notes}/>
            }
        </div>
    );
}

export default Notebook;