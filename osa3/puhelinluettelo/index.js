require('dotenv').config()
const express = require('express')
const app = express()
const Contact = require('./models/contact')

const morgan = require('morgan')
//const cors = require('cors')
//const { default: contacts } = require('../../osa2/puhelinluettelo/src/services/persons')

app.use(express.static('build'))
app.use(express.json())
//app.use(morgan('tiny'))
//app.use(cors())

morgan.token('body', (request) => {
    if (request.body.name) {
        return JSON.stringify(request.body)
    }
    if (request.body.number) {
        return JSON.stringify(request.body)
    }
    //return "-"
})

// app.use(morgan('dev', {
//     skip: function (req, res) { return res.statusCode < 400 }
//   }))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

//front-ishhhy
app.get('/', (request, response) => {
    response.send('<h1>:) XD</h1>')
    console.log('morning <3')
})

app.get('/info', (request, response) => {
    //const numberOfContacts = persons.length
    Contact.find({})
        .then(contacts => {
            const numberOfContacts = contacts.length
            const date = new Date()
            response.send(`<div>Phonebook has info of ${numberOfContacts} people<br/><br/>${date}</div>`)
        })
        .catch(error => {
            const date = new Date()
            response.send(`ERROR: ${error.message}<br/><br/>${date}</div>`)
        })

})

//whole phonebook
app.get('/api/persons', (request, response) => {
    console.log('showing ALL contacts')
    //response.json(persons)
    Contact.find({}).then(persons => {
        response.json(persons)
    })
})

//one contact (by id)
app.get('/api/persons/:id', (request, response, next) => {
    Contact.findById(request.params.id)
        .then(contact => {
            if (contact) {
                response.json(contact)

            } else {
                response.status(404).end()
            }
        })
        .catch(error => {
            console.log(error)
            next(error)
        })
})

//18.6.2020
//database generates its own id's now
//this is not needed anymore
// const generateId = () => {
//     const id = Math.floor(Math.random() * 10000)
//     return id
// }

const errorMessage = (body) => {
    if (!body.name) {
        return 'name missing'
    }

    if (!body.number) {
        return 'number missing'
    }

    return
}

app.post('/api/persons', (request, response, next) => {
    //console.log(request.headers)

    const body = request.body

    //error handling for simple errors (something missing etc.):
    const errorMsg = errorMessage(body)

    if (errorMsg) {
        return response.status(400).json({
            error: errorMsg
        })
    }

    //make new Contact schema model etc.
    const contact = new Contact({
        name: body.name,
        number: body.number,
    })

    console.log(`Adding contact; name: ${contact.name}, number: ${contact.number} to DATABASE`)

    contact.save()
        .then(savedNote => {
            response.json(savedNote)
        })
        .catch(error => next(error))

    // // mongoose query (what Contact.find() returns) is not a promise: it is thenable !!
    // Contact.find().or([{ name: body.name }, { number: body.number }])
    //     .then(contacts => {
    //         // if no contacts with same name or number, continue normally
    //         if (!contacts.length) {
    //             //make new Contact schema model etc.
    //             const contact = new Contact({
    //                 name: body.name,
    //                 number: body.number,
    //             })

    //             console.log(`Adding contact; name: ${contact.name}, number: ${contact.number} to DATABASE`)

    //             contact.save()
    //                 .then(savedNote => {
    //                     response.json(savedNote)
    //                 })
    //             // if match(es) (should be 1!) found for names; update number !
    //         } else {
    //             const contact = {
    //                 name: body.name,
    //                 number: body.number,
    //             }

    //             if (contacts[0].name === contact.name & contacts[0].number === contact.number) {
    //                 return response.status(400).json({
    //                     error: "contact is already saved (same number & name)"
    //                 })
    //             } else if (contacts.some(person => person.number === contact.number)) {
    //                 const id = contacts.findIndex(person => person.number === contact.number)
    //                 return response.status(400).json({
    //                     error: `number is already saved to ${contacts[id].name}`
    //                 })
    //             } else if (contacts.some(person => person.name === contact.name)) {
    //                 const id = contacts.findIndex(person => person.name === contact.name)
    //                 //console.log(id)
    //                 console.log(`Updating contact; name: ${contact.name}, number: ${contact.number}`)
    //                 console.log("id:", contacts[id].id)
    //                 Contact.findByIdAndUpdate(contacts[id].id, contact, { new: true })
    //                     .then(updatedNote => {
    //                         response.json(updatedNote)
    //                     })
    //             }


    //         }

    //     })
    //     .catch(error => next(error))

})

app.delete('/api/persons/:id', (request, response, next) => {
    const id = request.params.id
    console.log('Deleting contact from id=', id)
    Contact.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))

})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const contact = {
        name: body.name,
        number: body.number,
    }

    Contact.findByIdAndUpdate(request.params.id, contact, { new: true })
        .then(updatedNote => {
            response.json(updatedNote)
        })
        .catch(error => next(error))

})

const PORT = process.env.PORT //|| 3001
//event listener
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)