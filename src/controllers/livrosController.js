import livros from "../models/Livro.js"

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id

        livros.findById(id, (err, livros) => {
            if (!err) {
                res.status(200).send(livros)
            } else {
                res.status(400).send({message: `${err.message} - Id do livro não localizado`})
            }
        })
    }

    static cadastrarLivro = (req, res) => {
            let livro = new livros(req.body)
            livro.save((err) => {
                if(err) {
                    res.status(500).send({message: `${err.message} - Falha ao cadastrar o livro`})
                } else {
                    res.status(201).send(livro.toJSON())
                }
            })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            } else {
                res.status(500).send({message: `${err.message} - Falha ao atualizar o livro`})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Livro excluido com sucesso!'})
            } else {
                res.status(500).send({message: `${err.message} - Erro ao excluir o livro`})
            }
        })
    }
}

export default LivroController