const filmes = require("../model/filmes.json")
const fs = require('fs')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(filmes)
}

// Crie uma rota GET que retorne uma lista de ﬁlmes de um diretor especíﬁco
exports.getByDiretor = (req, res) => {
const director = req.params.director
const diretor = filmes.filter(item => item.director == director )
res.status(200).send(diretor)
console.log(director)
}

// Crie uma rota GET que retorne uma lista de ﬁlmes de um gênero especíﬁco 
exports.getByGenero = (req, res) => {
    const genre = req.params.genre
    const listFilms = filmes.filter(e => e.genre.includes(genre))
    res.status(200).send(listFilms);
}

//Crie uma rota Post que crie um novo ﬁlme e salve o resultado no arquivo json. 
exports.postNewMovie = (req, res) => {
    const {title, year, director, duration, genre, rate} = req.body
    filmes.push({title, year, director, duration, genre, rate})

    fs.writeFile("./src/model/filmes.json", JSON.stringify(filmes), 'utf8', function(err){
        if (err) {
            return res.status(500).send({message: err});
        }
        console.log("The file was saved!");
        });
    return res.status(201).send(filmes);
}




//Crie uma rota Post que adicione um novo gênero a um ﬁlme já existente e salve no arquivo json



