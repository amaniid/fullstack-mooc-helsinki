const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
//app.use(morgan('tiny'))

morgan.token('body', (request) => {
    if (request.body.name) {
        return JSON.stringify(request.body)
    }
    //return "-"
})

// app.use(morgan('dev', {
//     skip: function (req, res) { return res.statusCode < 400 }
//   }))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
        name: "Ihana Nainen",
        number: "7-7044",
        id: 1
    },
    {
        name: "UPEA Nainen",
        number: "040404040666",
        id: 2
    },
    {
        name: "EEPPINEN Nainen",
        number: "7598301",
        id: 3
    },
    {
        name: "VAHVA Nainen",
        number: "120871-124786",
        id: 4
    }
]

//front-ishhhy
app.get('/', (request, response) => {
    response.send('<h1>I HATE</h1>')
    console.log('morning <3')
})

app.get('/info', (request, response) => {
    const numberOfContacts = persons.length
    const date = new Date()
    response.send(`<div>Phonebook has info of ${numberOfContacts} people<br/><br/>${date}</div>`)
})

//whole phonebook
app.get('/api/persons', (request, response) => {
    console.log('showing ALL contacts')
    response.json(persons)
})

//one contact
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const contact = persons.find(person => person.id === id)

    console.log('id: ', id)

    if (contact) {
        response.json(contact)
    } else {
        response.status(404).end()
    }
})

const generateId = () => {
    const id = Math.floor(Math.random() * 10000)
    return id
}

const errorMessage = (body) => {
    // const conditions = [!body.name,
    // !body.number,
    // persons.some(person => person.name === body.name),
    // persons.some(person => person.number === body.number)
    // ]

    if (!body.name) {
        return 'name missing'
    }

    if (!body.number) {
        return 'number missing'
    }

    if (persons.some(person => person.name === body.name)) {
        return 'name must be unique'
    }

    if (persons.some(person => person.number === body.number)) {
        return 'number must be unique'
    }

    return
}

app.post('/api/persons', (request, response) => {
    //console.log(request.headers)

    const body = request.body

    //error handling:
    const errorMsg = errorMessage(body)

    if (errorMsg) {
        return response.status(400).json({
            error: errorMsg
        })
    }

    const contact = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(contact)

    console.log(`Adding contact. Id: ${contact.id}, name: ${contact.name}, number: ${contact.number}`)
    response.json(contact)

})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log('Deleting contact from id=', id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const PORT = '3001'
//event listener!
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
