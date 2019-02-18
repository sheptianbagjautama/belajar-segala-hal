import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'am a {props.name} and I am {props.age} years old !</p>
            {/* props.children digunakan untuk ketika kita ingin menampilkan data diluar tag component */}
            <p>{props.children}</p>    
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;