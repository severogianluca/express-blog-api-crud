const express = require('express');

const app = express();
const port = 3500;
const homeRouter = require('./routers/post')

app.use(express.json())
app.use(express.static('public'))
app.use("/posts", homeRouter)



app.listen(port, () =>{
    console.log('il server ti ascolta')
})