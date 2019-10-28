import {gql} from 'apollo-boost';

export const GET_NOTES = gql`
    query {
        notes {
            description
            tags
            created
            modified
        }
    }
`