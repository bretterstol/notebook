import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { RouteComponentProps, navigate } from '@reach/router';
import { GET_NOTE } from '../../queries';
import Note from './Note'

interface NoteContainerProps extends RouteComponentProps{
    _id ?: string;
}

const NoteContainer = (props:NoteContainerProps) => {
    const {_id} = props;
    const {loading, data} = useQuery(GET_NOTE, {variables: {_id}});

    const goBack = () => navigate("../notebook")

    if(loading) return <p>loading...</p>
    else if(data)return(
        <Note description={data.note.description} tags={data.note.tags} text={data.note.text} goBack={goBack}/>
    )
    else return(
        <Note description={""} tags={[]} text={""} goBack={goBack}/>
    )
}

export default NoteContainer;