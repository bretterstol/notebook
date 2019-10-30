import React from 'react';

import {RouteComponentProps, Link} from '@reach/router'

const Front = (props:RouteComponentProps) => {
    return (
        <div className="front">
                <Link to="/notebook"> Notebook </Link>
        </div>

    )
}

export default Front;