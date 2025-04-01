const express = require('express');

const app = express();
const port = 3500;
const homeRouter = require('./routers/post');
const notFound = require('./middleweres/errorNotFound');
const errorsHandler = require('./middleweres/errorHandlers');


//mi permette di poter far visualizzare gli elementi
app.use(express.json())
//mi permette di passare metadati in json per post/put
app.use(express.static('public'))
//setto l'endpoint
app.use("/posts", homeRouter)
//richiamo il middlewere
app.use(notFound)
app.use(errorsHandler)



app.listen(port, () =>{
    console.log('il server ti ascolta')
})