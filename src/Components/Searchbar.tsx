import React, {useState} from 'react';

const Searchbar = () => {
    const [text, setText] = useState("");
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event;
        setText(value);
    }

    return (
        <div>
            <label>
                Searchbar
            </label>
            <br />
            <input value={text} onChange={handleChange}/> 
        </div>
    )
}

export default Searchbar;