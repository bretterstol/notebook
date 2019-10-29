import React, { useState } from 'react'

import {Note} from './Notebook';

interface ContentTableProps{
    notes: Note[];
    onClick: (a:string) => void
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
                        <tr key={_id} onClick={e => props.onClick(_id)}>
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