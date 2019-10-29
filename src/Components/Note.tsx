import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {ADD_NOTE} from '../mutations';

interface NoteProps {
    description: string;
    tags: string[];
    text: string;
    goBack ?: () => void;
}

const Note = (props: NoteProps) =>  {
    const [saveNote, saveResult] = useMutation(ADD_NOTE);
    const [description, setDescription] = useState(props.description);
    const [tags, setTags] = useState(props.tags.join(","));
    const [note, setNote] = useState(props.text);


    const handleChage = (handler: React.Dispatch<React.SetStateAction<any>>) => {
        return (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
            const {target: {value}} = e;
            handler(value);
        }
    }
    const goBack = () => props.goBack && props.goBack();

    const onSave = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tagsToSave = tags.split(",").map((t:string) => t.trim());
        saveNote({variables: {desc: description, tags: tagsToSave, text:note}})
    }

    return (
        <form onSubmit={onSave}>
        description: <input value={description} onChange={handleChage(setDescription)}/>
        tags: <input value={tags} onChange={handleChage(setTags)}/>
        note: <textarea rows={4} cols= {50} value={note} onChange={handleChage(setNote)}/>
       <button type="submit"> Save </button>
       <button onClick={goBack}> Back </button>
   </form>

    )
}

export default Note;