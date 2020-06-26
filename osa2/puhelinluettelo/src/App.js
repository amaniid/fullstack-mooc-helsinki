import React, { useState, useEffect } from 'react'

import Filter from './components/FilterCondition'
import AddPerson from './components/AddPerson'
import RenderPerson from './components/RenderPerson'

import personService from './services/persons.js'

const Notification = ({ message, msgColor }) => {
    if (message === null) {
        return null
    }

    //console.log(msgColor)

    const notificationStyle = {
        color: msgColor,
        backgroundColor: 'lightgray',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}


const App = () => {
    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('+358')
    const [filterCondition, setFilterCondition] = useState('')
    const [notification, setNotification] = useState([null, 'green'])

    const hook = () => {
        personService
            .getAll()
            .then(initialPhonebook => {
                setPersons(initialPhonebook)
            })
    }

    useEffect(hook, [])


    //form needs onSubmit function/action
    // this is it
    const addContact = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)

        if (persons.some(person => person.name === newName)) {
            // |persons.some(person => person.number === newNumber)
            //alert(`Name ${newName} and/or number ${newNumber} is/are already added to phonebook.`)
            //const giveNewNumber = false
            const giveNewNumber = window.confirm(
                `${newName} is already added to phonebook. Do you want to replace the old number with a new one?`
            )
            if (!giveNewNumber) {
                // setNotification([`Name ${newName} and/or number ${newNumber} is/are already added to phonebook.`,
                //     'red'])
                // setTimeout(() => {
                //     setNotification([null, 'green'])
                // }, 5000)
                setNewName('')
                setNewNumber('+358')
                return
            }
            //18.6.2020
            //code cannot go here !
            //this will be implemented later on
            //25.6.2020
            //code can go here again !
            const person = persons.find(p => p.name === newName)
            const personWithNewNumber = { ...person, number: newNumber }

            personService
                .update(personWithNewNumber.id, personWithNewNumber)
                .then(newNumberOldName => {
                    setPersons(persons.map(person => person.id !== newNumberOldName.id ? person : newNumberOldName))

                    setNotification([`Changed ${newNumberOldName.name}'s number!`, 'green'])
                    setNewName('')
                    setNewNumber('+358')
                    setTimeout(() => {
                        setNotification([null, 'green'])
                    }, 5000)

                })
                .catch(error => {
                    setNotification([`Information of ${person.name} has already been removed from server`,
                        'red'])
                    setNewName('')
                    setNewNumber('+358')
                    setTimeout(() => {
                        setNotification([null, 'green'])
                    }, 5000)
                    setPersons(persons.filter(p => p.name !== person.name))
                })

            return
        } else if (persons.some(person => person.number === newNumber)) {
            const id = persons.findIndex(person => person.number === newNumber)
            alert(`Number ${newNumber} is already added to phonebook for ${persons[id].name}.`)
            setNewNumber('+358')
            return
        }

        const personObject = {
            name: newName,
            number: newNumber,
        }

        personService
            .create(personObject)
            .then(
                returnedContact => {
                    console.log('CONTACT ADDED TO PHONEBOOK')
                    setPersons(persons.concat(returnedContact))

                    setNotification([`Added ${returnedContact.name}!`, 'green'])
                    setTimeout(() => {
                        setNotification([null, 'green'])
                    }, 5000)

                    setNewName('')
                    setNewNumber('+358')
                }
            )
            .catch(error => {
                console.log(error.response.data)

                setNotification([error.response.data.error, 'red'])
                setTimeout(() => {
                    setNotification([null, 'green'])
                }, 5000)
            })


    }

    const handleNameChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
    }


    const searchFilter = (person) => (
        person.name.toLowerCase().match(filterCondition.toLowerCase())
    )

    const deleteContactById = (name, id) => {
        const deleteContactB = window.confirm(`Are you sure u want to delete ${name}?`)

        if (deleteContactB) {
            personService
                .deleteId(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))

                    setNotification([`Deleted ${name}, GOOD RIDDANCE!`, 'red'])
                    setTimeout(() => {
                        setNotification([null, 'green'])
                    }, 5000)
                })
                .catch(error => {
                    setNotification([`Information of ${name} has already been removed from server`,
                        'red'])
                    setPersons(persons.filter(p => p.name !== name))

                    setTimeout(() => {
                        setNotification([null, 'green'])
                    }, 5000)
                })
        }
    }

    const copyId = (id) => {
        // Create a dummy input to copy the string array inside it
        var dummy = document.createElement("textarea")

        // Add it to the document
        document.body.appendChild(dummy)

        // Set its ID
        dummy.value = id

        // Select it
        dummy.select()

        // Copy its contents
        document.execCommand("copy")

        // Remove it as its not needed anymore
        document.body.removeChild(dummy)

        // Notify user
        setNotification([`Copied id ${id} to clipboard.`, 'green'])
        setTimeout(() => {
            setNotification([null, 'green'])
        }, 5000)
    }


    //const personsToShow = persons.filter(person => person.name.toLowerCase().match(filterCondition.toLowerCase()))
    const personsToShow = persons.filter(searchFilter)

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notification[0]} msgColor={notification[1]} />
            <Filter filterValue={filterCondition} filterFunction={setFilterCondition} />
            <h4>Found</h4>
            {personsToShow.map((person, i) =>
                <RenderPerson
                    key={i}
                    person={person}
                    copy={() => copyId(person.id)}
                    deleteContact={() => deleteContactById(person.name, person.id)}
                />
            )}

            <h3>Add new contact</h3>
            <AddPerson addContactFunction={addContact} newName={newName} handleNameChange={handleNameChange}
                newNumber={newNumber} setNewNumber={setNewNumber} />
        </div>
    )
}

export default App