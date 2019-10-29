import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { RouteComponentProps } from '@reach/router';
import { GET_NOTE } from '../queries';
import Note from './Note'

interface NoteContainerProps extends RouteComponentProps{
    _id ?: string;
    goBack ?: () => void;
}

const NoteContainer = (props:NoteContainerProps) => {
    const {_id} = props;
    const {loading, error, data} = useQuery(GET_NOTE, {variables: {_id}});

    if(loading) return <p>loading...</p>
    return(
        <Note description={data.note.description} tags={data.note.tags} text={data.note.text} goback={props.goBack}/>
    )
}

export default NoteContainer;