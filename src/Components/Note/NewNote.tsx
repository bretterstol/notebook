import React from 'react';
import Note from './Note';
import { RouteComponentProps } from '@reach/router';

const NewNote = (props:RouteComponentProps) => {
    return(
        <Note description={""} tags={[]} text={""}/>
    )
}

export default NewNote;