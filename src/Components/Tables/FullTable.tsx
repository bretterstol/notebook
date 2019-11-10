import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_NOTES } from '../../Graphql/queries';
import ContentTable from './ContentTable';
import { RouteComponentProps } from '@reach/router';

const FullTable = (props:RouteComponentProps) => {
    const {error, loading, data} = useQuery(GET_NOTES);
    if(error) return <p>{error}</p>;
    else if(loading) return <p>loading...</p>;
    else return(
        <ContentTable notes={data.notes} />
    )
}

export default FullTable;