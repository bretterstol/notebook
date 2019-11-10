
import {gql} from "@apollo/client";

export const typeDef = gql`
    extend type Query {
        isModified: Boolean!
    }    
`