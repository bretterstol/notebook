import React, {useState, useEffect} from 'react';
import { Note } from './Notebook';

interface CreateNoteProps{
    saveNote: (note:Note) => void;
}

const CreateNote = (props:CreateNoteProps) => {

    const {saveNote} = props;

    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [note, setNote] = useState("");

    const handleChage = (handler: React.Dispatch<React.SetStateAction<any>>) => {
        return (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
            const {target: {value}} = e;
            handler(value);
        }
    }

    const onSave = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tagsToSave = tags.split(",").map(t => t.trim());
        saveNote({description, tags: tagsToSave, note})
    }

    return(
        <form onSubmit={onSave}>
             description: <input value={description} onChange={handleChage(setDescription)}/>
             tags: <input value={tags} onChange={handleChage(setTags)}/>
             note: <textarea rows={4} cols= {50} value={note} onChange={handleChage(setNote)}/>
            <button type="submit"> Save </button>
        </form>
    )
}

export default CreateNote;