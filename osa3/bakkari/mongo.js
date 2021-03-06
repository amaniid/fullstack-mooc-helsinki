const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give pswd as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://test-user1:${password}@fullstack-23xx6.mongodb.net/note-app?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: 'is hot',
//     date: new Date(),
//     important: true,
// })

// note.save().then(result => {
//     console.log(result)
//     console.log('note saved')
//     mongoose.connection.close()
// })

//find alll
// Note.find({}).then(result => {
//     result.forEach(note => {
//         console.log(note)
//     })
//     mongoose.connection.close()
// })

//find important
Note.find({ important: true }).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})