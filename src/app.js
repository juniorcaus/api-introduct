const express = require('express')

const app = express()

app.use(express.json());

app.get('/hello_world', (req, res) => {
    res.send('teste rota get')
})

app.post('/create', (req, res) => {

    const title = req.body.title

    

    res.send(`Titulo: ${title}`)
})


app.listen(5000, () => {
    console.log('Server running on port:' + 5000 )        
})