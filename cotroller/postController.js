const posts = require ("../data/postsList")


// INDEX
function getList (req, res){
    console.log('sei dentro la bacheca')
    res.json(posts)
}
// SHOW
function getById (req, res){
    console.log('stai prendendo l/oggetto ' + req.params.id)
    const id = parseInt(req.params.id);
    const resultId = posts.find((element) => element.id === id);

    if (!resultId) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
         });
    }

    res.json(resultId)
}


// STORE
function insert (req, res){
    console.log('hai creato l/oggetto ' + req.params)
    res.send('hai creato l/oggetto ' + req.params)
}


//UPDATE
function update (req, res){
    console.log('stai modificando l/oggetto ' + req.params.id)
    
    res.send('stai modificando l/oggetto ' + req.params.id)
}


//DELETE
function destroy (req, res){

    const id = parseInt(req.params.id);
    const index = posts.findIndex((element) => element.id === id);

    if (index < 0) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
         });
    }


    posts.splice(index, 1);
    console.log(posts);
    res.json(`Hai eliminato con successo il post con ID: ${id}`)
}

module.exports = {getList, getById, insert, update, destroy}