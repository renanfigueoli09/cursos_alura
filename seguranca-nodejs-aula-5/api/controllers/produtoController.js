const ProdutoService = require('../services/produtoService')
const produtoService = new ProdutoService()

class ProdutoController {
    static async cadastrarProduto(req, res) {
        const { nome, descricao, preco } = req.body
        
        try {
            const produto = await produtoService.cadastrarProduto({ nome, descricao, preco })
            
            res.status(201).json(produto)
            
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }
    
    static async buscarTodosProdutos(req, res) {
        const produtos = await produtoService.buscarTodosProdutos()
        
        res.status(200).json(produtos)
    }
    
    static async buscarProdutoPorId(req, res) {
        try {
            const { id } = req.params
            const produto = await produtoService.buscarProdutoPorId(id)
            
            res.status(200).json(produto) 
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }
    
    static async deletarProdutoPorId(req, res) {
        const { id } = req.params
        
        try {
            await produtoService.deletarProdutoPorId(id)
            
            res.status(200).send({ message: 'Produto deletada com sucesso!' })
            
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }
    
    static async editarProduto(req, res) {
        const { id } = req.params
        const { nome, descricao, preco } = req.body
        
        try {
            const produto = await produtoService.editarProduto({ id, nome, descricao, preco })
            
            res.status(200).json(produto)
        } catch (error) {
            console.log('Message error: ', error.message)
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = ProdutoController