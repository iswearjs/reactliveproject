import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom';

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);

    return (
        <>
            <h1>User {fname} {lname} Page.</h1>
            <p style={{ color: 'green' }}> My Current location is <sapn style={{ color: 'red' }}>{location.pathname}</sapn></p>
            {location.pathname === `/user/ishwar/dewangan` ? (
                <button onClick={() => history.goBack()}> Go Back</button>
            ) : null}&nbsp;
            {location.pathname === `/user/ishwar/dewangan` ? (
                <button onClick={() => history.push("/")}> HomePage</button>
            ) : null}
        </>
    );
}

export default User;