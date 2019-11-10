import {gql} from '@apollo/client';

export const ADD_NOTE = gql`
    mutation AddNote($desc: String!, $tags: [String!]!, $text: String!) {
        addNote(description: $desc, tags: $tags, text: $text) {
            _id
            description
            hasFetched @client
        }
    }
`;

export const DELETE_NOTE = gql`
    mutation deleteNote($_id: ID!) {
        deleteNote(_id: $id) {
            _id
        }
    }
`;