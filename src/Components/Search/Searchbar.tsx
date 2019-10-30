import React, {useState} from 'react';

const Searchbar = () => {
    const [text, setText] = useState("");
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = event;
        setText(value);
    }

    return (
        <div className="searchbar">
            <label>
                Searchbar
            </label>
            <input value={text} onChange={handleChange}/> 
        </div>
    )
}

export default Searchbar;