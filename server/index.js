const bodyParser = require('body-parser');
const express = require('express');
const port = 3000
const app = express()

app.use(bodyParser.json())
app.use( express.static( __dirname + '/../public/build' ) );

const messagesController = require('./controllers/messages_controller.js')

app.post('/api/messages', messagesController.create)
app.get('/api/messages', messagesController.read)
app.put('/api/messages/:id', messagesController.update)
app.delete('/api/messages/:id', messagesController.delete)

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );