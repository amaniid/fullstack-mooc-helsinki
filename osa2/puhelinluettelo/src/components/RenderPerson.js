import React from 'react'


const Person = ({ person, deleteContact }) => {
    return (
        <div>
            {person.name} {person.number}&nbsp;
            <button onClick={deleteContact}>DELETE</button> 
        </div>
    )
}

export default Person