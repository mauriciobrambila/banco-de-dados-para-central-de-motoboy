import Agendamento from '../Modelo/Agendamento.js';
import Conectar from './Conexao.js';
export default class AgendamentoBD{

    async incluir(agendamento){
        if(agendamento instanceof Agendamento){
            const conexao = await Conectar();
            const sql = "INSERT INTO agendamentos(visitante, data, horaEntrada, horaSaida, observacao) VALUES(?,?,?,?,?)";
            const valores = [agendamento.visitante, agendamento.data, agendamento.horaEntrada, agendamento.horaSaida, agendamento.observacao];
            const resultado = await conexao.query(sql, valores);
            global.poolConexoes.release(conexao);
            return await resultado[0].insertId;
        }
    }

    async alterar(agendamento){
        if(agendamento instanceof Agendamento){
            const conexao = await Conectar();
            const sql = "UPDATE agendamentos SET visitante=?, data=?, horaEntrada=?, horaSaida=?, observacao=? WHERE registro=?";
            const valores = [agendamento.visitante, agendamento.data, agendamento.horaEntrada, agendamento.horaSaida, agendamento.observacao, agendamento.registro];
            await conexao.query(sql, valores);
            global.poolConexoes.release(conexao);
        }
    }

    async excluir(agendamento){
        if(agendamento instanceof Agendamento){
            const conexao = await Conectar();
            const sql = "DELETE FROM agendamentos WHERE registro=?";
            const valores = [agendamento.registro];
            await conexao.query(sql, valores);
            global.poolConexoes.release(conexao);
        }
    }

    async consultar(termo){
        const conexao = await Conectar();
        const sql = "SELECT * FROM agendamentos WHERE visitante LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        global.poolConexoes.release(conexao);
        const listaAgendamentos = [];
        for (const row of rows){
            const agendamento = new Agendamento(row['registro'], row['visitante'], row['data'], row['horaEntrada'], row['horaSaida'], row['observacao']);
            listaAgendamentos.push(agendamento);
        }
        return listaAgendamentos;
    }
    
}