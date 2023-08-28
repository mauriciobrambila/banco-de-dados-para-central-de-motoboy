import Visitante from '../Modelo/Visitante.js';
import Conectar from './Conexao.js';
export default class VisitanteBD{

    async incluir(visitante){
        if(visitante instanceof Visitante){
            const conexao = await Conectar();
            const sql = "INSERT INTO newvisitantes(nome, sobrenome, cpf, rg, telefone, data, observacao) VALUES(?,?,?,?,?,?,?)";
            const valores = [visitante.nome, visitante.sobrenome, visitante.cpf, visitante.rg, visitante.telefone, visitante.data, visitante.observacao];
            const resultado = await conexao.query(sql, valores);
            global.poolConexoes.release(conexao);
            return await resultado[0].insertId;
        }
    }

    async alterar(visitante){
        if(visitante instanceof Visitante){
            const conexao = await Conectar();
            const sql = "UPDATE newvisitantes SET nome=?, sobrenome=?, cpf=?, rg=?, telefone=?, data=?, observacao=? WHERE codigo=?";
            const valores = [visitante.nome, visitante.sobrenome, visitante.cpf, visitante.rg, visitante.telefone, visitante.data, visitante.observacao, visitante.codigo];
            await conexao.query(sql, valores);
            global.poolConexoes.release(conexao);
        }
    }

    async excluir(visitante){
        if(visitante instanceof Visitante){
            const conexao = await Conectar();
            const sql = "DELETE FROM newvisitantes WHERE codigo=?";
            const valores = [visitante.codigo];
            await conexao.query(sql, valores);
            global.poolConexoes.release(conexao);
        }
    }

    async consultar(termo){
        const conexao = await Conectar();
        const sql = "SELECT * FROM newvisitantes WHERE nome LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        global.poolConexoes.release(conexao);
        const listaVisitantes = [];
        for (const row of rows){
            const visitante = new Visitante(row['codigo'], row['nome'], row['sobrenome'], row['cpf'], row['rg'], row['telefone'], row['data'], row['observacao']);
            listaVisitantes.push(visitante);
        }
        return listaVisitantes;
    }

    
}