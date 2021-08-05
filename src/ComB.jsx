import React, { useContext } from 'react';
import { FirstName, MiddleName, LastName } from './App';
import ComC from './ComC';

const ComB = () => {

    const fname = useContext(FirstName);
    const mname = useContext(MiddleName);
    const lname = useContext(LastName);

    return (
        <h1>
            My name is {fname} {mname} {lname}
        </h1>
    );
}

export default ComB;