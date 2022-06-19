const mongoose = require('mongoose');
const Comment = require('./models/comment')

mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

const sampleComment = 
[
    {
        nickname: 'Tom',
        comment: 'XDDDDDDDDDDDDDDDDDDDDDDDDDDD'
    },
    {
        nickname: 'TomXPatty',
        comment: 'LOLOLOLOLOLOLOL!'
    },
    {
        nickname: 'Martin',
        comment: 'NOOB!!!'
    },
    {
        nickname: 'Dave',
        comment: 'Man shut up!!!'
    },
]

Comment.deleteMany()

Comment.insertMany(sampleComment)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })