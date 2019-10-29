import React, {useState, useEffect} from 'react';
import { Note } from './Notebook';
import { useMutation } from '@apollo/react-hooks';
import { ADD_NOTE } from '../mutations';

interface CreateNoteProps{
    description: string,
    tags: string,
    text: string,
    goBack: () => void;
}

const CreateNote = (props:CreateNoteProps) => {

    const [saveNote, {data}] = useMutation(ADD_NOTE);

    const [description, setDescription] = useState(props.description);
    const [tags, setTags] = useState(props.tags);
    const [note, setNote] = useState(props.text);

    const handleChage = (handler: React.Dispatch<React.SetStateAction<any>>) => {
        return (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
            const {target: {value}} = e;
            handler(value);
        }
    
    }
    const goBack = () => props.goBack();

    const onSave = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tagsToSave = tags.split(",").map(t => t.trim());
        saveNote({variables: {desc: description, tags: tagsToSave, text:note}})
        goBack();
    }

    return(
        <form onSubmit={onSave}>
             description: <input value={description} onChange={handleChage(setDescription)}/>
             tags: <input value={tags} onChange={handleChage(setTags)}/>
             note: <textarea rows={4} cols= {50} value={note} onChange={handleChage(setNote)}/>
            <button type="submit"> Save </button>
            <button onClick={goBack}> Back </button>
        </form>
    )
}

export default CreateNote;