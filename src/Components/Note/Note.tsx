import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {ADD_NOTE} from '../../Graphql/mutations';
import { Link } from '@reach/router';
import PopUp from '../Popups/popup';
import { GET_NOTES } from '../../Graphql/queries';

interface NoteProps {
    description: string;
    tags: string[];
    text: string;
    goBack ?: () => void;
}

const Note = (props: NoteProps) =>  {
    const [saveNote, saveResult] = useMutation(ADD_NOTE, {
        refetchQueries: [{query: GET_NOTES}],
    });
    const [description, setDescription] = useState(props.description);
    const [tags, setTags] = useState(props.tags.join(","));
    const [note, setNote] = useState(props.text);
    const [error, setError] = useState(false);


    const handleChage = (handler: React.Dispatch<React.SetStateAction<any>>) => {
        return (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
            setError(false);
            const {target: {value}} = e;
            handler(value);
        }
    }
    const validate = () => {
           return [description, tags, note].every(value => value !== "");
    }

    const onSave = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tagsToSave = tags.split(",").map((t:string) => t.trim());
        if(validate()) saveNote({variables: {desc: description, tags: tagsToSave, text: note}})
        else setError(true);
    };
    console.log(saveResult.data)
    if(saveResult.error) return <p>{saveResult.error}</p>
    else return (
        <div>
            <form onSubmit={onSave}>
                description: <input value={description} onChange={handleChage(setDescription)} />
                tags: <input value={tags} onChange={handleChage(setTags)} />
                note: <textarea rows={4} cols={50} value={note} onChange={handleChage(setNote)} />
                <button type="submit"> Save </button>
            </form>
            {error ? <p style={{ color: "red" }}> Må fylle inn alle punkter </p> : null}
            <Link to="/notebook"> Back </Link>
            {(saveResult && saveResult.data) ? <PopUp /> : null}
        </div>
    )
}

export default Note;