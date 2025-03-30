const express = require("express")
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
        return res.status(404).json({ error: "Post non trovato" });
    }

    res.json(resultId)
}
// STORE
function insert (req, res){}
//UPDATE
function update (req, res){}
//DELETE
function destroy (req, res){}

module.exports = {getList, getById, insert, update, destroy}