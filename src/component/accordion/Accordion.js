import React, { useState } from 'react';
import { questions } from './AccordionApi';
import './Accordion.css';
import MyAccordion from '../MyAccordion';

const Accordion = () => {
    const [data, setData] = useState(questions);
    return (
        <>
             <section className="main-div">
                <h1>React Interview Questions </h1>
        {
                data.map((curElem) => {
                    return <MyAccordion key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })        
        }
                 </section>
        </>
    );
}

export default Accordion;
