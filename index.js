const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Comment = require('./models/comment')

mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) =>
{
    const comments = await Comment.find()
    res.render('index', { comments })
})

app.get('/:id', async (req, res) =>
{
    const { id } = req.params
    const details = await Comment.findById(id)
    res.render('detalis', { details })
})

app.post('/newcomment', async (req, res) =>
{
    const newComment = new Comment(req.body)
    await newComment.save()
    res.redirect('/')
})

app.patch('/editComment', async (req, res) =>
{
    const { id } = req.body
    await Comment.findByIdAndUpdate(id, req.body)
    res.redirect('/')
})

app.delete('/deleteComment/:id', async (req, res) =>
{
    const { id } = req.params
    await Comment.findByIdAndDelete(id)
    res.redirect('/')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})