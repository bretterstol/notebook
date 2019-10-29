import {gql} from 'apollo-boost';

export const ADD_NOTE = gql`
    mutation AddNote($desc: String!, $tags: [String!]!, $text: String!) {
        addNote(description: $desc, tags: $tags, text: $text) {
            _id
            description
        }
    }
`