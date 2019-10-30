import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import ContentTable from './ContentTable';
import { GET_NOTE_BY_TAG } from '../../queries';
import { RouteComponentProps } from '@reach/router';

interface TagProps extends RouteComponentProps{
    tag?: string;
}

const TagTable = (props:TagProps) => {
    const {error, loading, data} = useQuery(GET_NOTE_BY_TAG, {variables: {tag: props.tag}});
    if(error) return <p>{error}</p>;
    else if(loading) return <p>loading...</p>
    return(
        <ContentTable notes={data.noteByTag} />
    )
}

export default TagTable;