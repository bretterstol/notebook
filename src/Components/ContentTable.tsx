import React, { useState } from 'react'

import {Note} from './Notebook';

interface ContentTableProps{
    notes: Note[]
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
                {notes.map(({description, tags, note}, index) => {
                    return (
                        <tr key={index} >
                            <td>{description}</td>
                            <td>{tags}</td>
                            <td>{note}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ContentTable;