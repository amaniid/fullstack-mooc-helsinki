import React from 'react'

const AddPerson = ({addContactFunction, newName, handleNameChange, newNumber, setNewNumber}) => {
    return (
        <form onSubmit={addContactFunction}>
            <div>
                name:&nbsp;
                    <input
                    value={newName}
                    onChange={handleNameChange} />
            </div>

            <div>
                number:&nbsp;
                    <input
                    value={newNumber}
                    onChange={(event) => setNewNumber(event.target.value)}
                />
            </div>

            <div>
                <button type='submit'>ass</button>
            </div>
        </form>
    )
}

export default AddPerson