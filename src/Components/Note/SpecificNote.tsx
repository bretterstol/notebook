import React from 'react';
import {useQuery} from '@apollo/client';
import { RouteComponentProps } from '@reach/router';
import { GET_NOTE } from '../../Graphql/queries';
import Note from './Note'
import NewNote from './NewNote';

interface SpecificNoteProps extends RouteComponentProps{
    _id ?: string;
}

const SpecificNote = (props:SpecificNoteProps) => {
    const {_id} = props;
    const {loading, data} = useQuery(GET_NOTE, {variables: {_id}});


    if(loading) return <p>loading...</p>
    else if(data)return(
        <Note description={data.note.description} tags={data.note.tags} text={data.note.text}/>
    )
    else return(
        <NewNote />
    )
}

export default SpecificNote;