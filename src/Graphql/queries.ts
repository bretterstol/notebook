import {gql} from '@apollo/client';

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
`;
export const GET_NOTE = gql`
    query GetNote($_id: ID!) {
        note(_id: $_id) {
            description
            tags
            text
            created
            modified
            _id
        }
    }
`;
export const GET_NOTE_BY_TAG = gql`
    query GetNoteByTag($tag: String!) {
        noteByTag(tag: $tag) {
            description
            tags
            created
            modified
            _id
        }
    }
`;

export const GET_NOTE_IS_MODIFIED = gql`
    query GetNoteIsModified {
        isModified @client
    }
`;
