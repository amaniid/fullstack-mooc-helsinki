import React from 'react'


const Person = ({ person, copy, deleteContact }) => {
    return (
        <div>
            {person.name} {person.number}&nbsp;
            <button onClick={deleteContact}>DELETE</button>&nbsp;
            <button onClick={copy}>COPY id</button>
        </div>
    )
}

export default Person