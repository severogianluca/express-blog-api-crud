function notFound(req, res, next){
    res.status(404)
    res.json({
        error: "Not Found",
        messege: "Attenzione! pagina non trovata"
    })
}


module.exports = notFound;