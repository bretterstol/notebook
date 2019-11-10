import React, { useState } from 'react'

import {Note} from '../Notebook';
import { RouteComponentProps, navigate, NavigateOptions, Link } from '@reach/router';
import { QueryLazyOptions } from '@apollo/client';

interface ContentTableProps extends RouteComponentProps{
    notes: Note[];
    getByTag ?: (a:QueryLazyOptions<Record<string, any>>) => void;

}



const ContentTable = (props:ContentTableProps) => {
    const {notes} = props;
    return(
        <table className="content-table">
            <tbody>
            <tr>
                <th>Description</th>
                <th>Tags</th>
                <th>Date</th>
            </tr>
                {notes.map(({description, tags, _id, modified, created}) => {
                    const date = modified || created;
                    return (
                        <tr key={_id}>
                            <td><Link to={`/note/${_id}`}>{description}</Link> </td>
                            <td>{tags.map((tag, index) => (<Link key={index} to={`${tag}`}>{` ${tag} `}</Link>))}</td>
                            <td>{date}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ContentTable;