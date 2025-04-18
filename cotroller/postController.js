const posts = require("../data/postsList")
const notFound = require("../middleweres/errorNotFound")


// INDEX
function getList(req, res) {

    res.json(posts)
}
// SHOW
function getById(req, res) {
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
function insert(req, res) {
    const newId = posts[posts.length - 1].id + 1;
    const newPost = {

        id: newId,
        title: req.body.title,
        content: req.body.content,
        // image: req.body.image,
        tags: req.body.tags
    }
    posts.push(newPost)
    res.status(201).json(newPost);
}

//UPDATE
function update(req, res) {
    const id = parseInt(req.params.id);
    const resultId = posts.find((element) => element.id === id);

    if (!resultId) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    resultId.title = req.body.title
    resultId.content = req.body.content
    // post.image= req.body.image
    resultId.tags = req.body.tags

    res.json({
        message: `Hai modificato con successo il post con ID: ${id}`,
        updatedPosts: resultId
    })
}

//DELETE
function destroy(req, res) {

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
    res.json({
        status: "approvato",
        message: `Hai eliminato con successo il post con ID: ${id}`,
        updatedPosts: posts
    });
}

module.exports = { getList, getById, insert, update, destroy }