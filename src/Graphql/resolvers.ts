import {gql, Context} from '@apollo/client';
import { GET_NOTE_IS_MODIFIED } from './queries';

export const resolvers = {
    Note: {
        isModified: (_:any, __:null|undefined, {cache}:Context) => {
            const {isModified} = cache.readQuery({query: GET_NOTE_IS_MODIFIED});
            return !isModified;
        }
    }
}