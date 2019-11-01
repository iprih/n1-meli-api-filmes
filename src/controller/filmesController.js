const filmes = require("../model/filmes.json")

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
}




//Crie uma rota Post que crie um novo ﬁlme e salve o resultado no arquivo json. 





//Crie uma rota Post que adicione um novo gênero a um ﬁlme já existente e salve no arquivo json



