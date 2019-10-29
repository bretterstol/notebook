import {gql} from 'apollo-boost';

export const GET_NOTES = gql`
    query {
        notes {
            description
            tags
            created
            modified
            _id
        }
    }
`
export const GET_NOTE = gql`
    query GetNote($_id: String!) {
        note(_id: $_id) {
            description
            tags
            created
            modified
            _id
        }
    }
`