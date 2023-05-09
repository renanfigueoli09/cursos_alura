const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class ProdutoService {
    async cadastrarProduto(dto) {
        const produto = await database.produtos.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (produto) {
            throw new Error('Produto já cadastrado');
        }

        try {
            const newProduto = await database.produtos.create({ 
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao,
                preco: dto.preco
            });

            return newProduto;
        } catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }

    async buscarTodosProdutos() {
        const produtos = await database.produtos.findAll()

        return produtos;
    }

    async buscarProdutoPorId(id) {
        const produto = await database.produtos.findOne({
            where: {
                id: id
            }
        });

        if (!produto) {
            throw new Error('Produto informado não cadastrado!')
        }

        return produto;
    }

    async deletarProdutoPorId(id) {
        const produto = await database.produtos.findOne({
            where: {
                id: id
            }
        });

        if (!produto) {
            throw new Error('Produto informado não cadastrado!')
        }

        try {
            await database.produtos.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error;
        }
    }

    async editarProduto(dto) {
        const produto = await database.produtos.findOne({
            where: {
                id: dto.id
            }
        });

        if (!produto) {
            throw new Error('Produto informado não cadastrado!')
        }

        try {
            produto.nome = dto.nome
            produto.descricao = dto.descricao
            produto.preco = dto.preco

            await produto.save()

            return await produto.reload()
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error
        }
    }
}

module.exports = ProdutoService