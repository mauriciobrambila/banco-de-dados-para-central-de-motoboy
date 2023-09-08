import Categoria from '../Modelo/Categoria.js';
import Conectar from './Conexao.js';
export default class CategoriaBD{

    async incluir(categoria){
        if(categoria instanceof Categoria){
            const conexao = await Conectar();
            const sql = "INSERT INTO categorias(nome, observacao) VALUES(?,?)";
            const valores = [categoria.nome, categoria.observacao];
            const resultado = await conexao.query(sql, valores);
            conexao.release();
            return await resultado[0].insertId;
        }
    }

    async alterar(categoria){
        if(categoria instanceof Categoria){
            const conexao = await Conectar();
            const sql = "UPDATE categorias SET nome=?, observacao=? WHERE codigo=?";
            const valores = [categoria.nome, categoria.observacao, categoria.codigo];
            await conexao.query(sql, valores);
            conexao.release();
        }
    }

    async excluir(categoria){
        if(categoria instanceof Categoria){
            const conexao = await Conectar();
            const sql = "DELETE FROM categorias WHERE codigo=?";
            const valores = [categoria.codigo];
            await conexao.query(sql, valores);
            conexao.release();
        }
    }

    async consultar(termo){
        const conexao = await Conectar();
        const sql = "SELECT * FROM categorias WHERE nome LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        conexao.release();
        const listaCategorias = [];
        for (const row of rows){
            const categoria = new Categoria(row['codigo'], row['nome'], row['observacao']);
            listaCategorias.push(categoria);
        }
        return listaCategorias;
    }

    async consultarCodigo(codigo){
        const conexao = await Conectar();
        const sql = "SELECT * FROM categorias WHERE codigo = ?";
        const valores = [codigo]
        const [rows] = await conexao.query(sql, valores);
        conexao.release();
        const listaCategorias = [];
        for (const row of rows){
            const categoria = new Categoria(row['codigo'], row['nome'], row['observacao']);
            listaCategorias.push(categoria);
        }
        return listaCategorias;
    }
}