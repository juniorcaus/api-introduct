const express = require('express')

const app = express()

const Post = require('./models/Posts')

app.use(express.json());

app.get('/hello_world', (req, res) => {
    res.send('teste rota get')
})

app.post('/create', (req, res) => {

    const title = req.body.title

    res.send(`title: ${title}`)
})

app.post('/create_post', async (req, res) => {

        try {
            //const title = req.body.title   //const content = req.body.content
            const {title, content} = req.body
            
            const post = await Post.create({ title, content })
            
            res.send(post)
        }catch(err) {
            res.status(400).send(err)
        }
})

app.get('/list_posts', async (req, res) => {
   try {
       const posts = await Post.find()

       res.send({ posts })
   }catch(err) {
    res.status(400).send(err)
   }
})

app.get('/show_post/:post_id', async (req, res) => {
    try {
        const postId = req.params.post_id

        const post = await Post.findById(postId)
        
        res.send({post})
    } catch(err) {
        res.status(400).send(err)
    }
})

app.patch('/update_post/:post_id', async (req, res) => {
    try {   
        const postId = req.params.post_id
        
        const { title, content }  = req.body

        const post = await Post.findByIdAndUpdate(postId, { title, content }, { new: true })

        res.send({ post })

    } catch(err) {
        res.status(400).send
    }
})


app.listen(5000, () => {
    console.log('Server running on port:' + 5000 )        
})