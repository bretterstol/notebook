import React, { useState } from 'react'

import {Note} from './Notebook';
import { RouteComponentProps, navigate, NavigateOptions } from '@reach/router';

interface ContentTableProps extends RouteComponentProps{
    notes: Note[];
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
                        <tr key={_id} onClick={e => navigate(`notebook/${_id}`)}>
                            <td>{description}</td>
                            <td>{tags}</td>
                            <td>{String(date)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ContentTable;