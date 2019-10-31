import React from 'react';

const TopNote = (props:any) => {
    return(
        <React.Fragment>
            <h1>Note</h1>
            {props.children}
        </React.Fragment>
    )
}

export default TopNote;