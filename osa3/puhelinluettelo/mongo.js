const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give pswd as argument')
    process.exit(1)
}

const password = process.argv[2]

if (password.length < 3) {
    console.log('give pswd as argument')
    process.exit(1)
}

const url =
    `mongodb+srv://test-user1:${password}@fullstack-23xx6.mongodb.net/phonebook?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

//if enough arguments, save to database
//if not, check database
if (process.argv.length === 5) {
    const name = process.argv[3]
    const number = process.argv[4]

    const contact = new Contact({
        name: name,
        number: number,
    })

    contact.save().then(result => {
        console.log('contact saved')
        console.log(`added ${result.name} number ${result.number} to phonebook`)
        mongoose.connection.close()
        //process.exit(1)
    })
} else {
    //find all
    Contact.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(contact => {
            console.log(contact.name, contact.number)
        })
        mongoose.connection.close()
        //process.exit(1)
    })

}


//find important
// Contact.find({ important: true }).then(result => {
//     result.forEach(contact => {
//         console.log(contact)
//     })
//     mongoose.connection.close()
// })