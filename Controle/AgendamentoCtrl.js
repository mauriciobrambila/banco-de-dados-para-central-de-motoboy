import Agendamento from '../Modelo(A)/Agendamento.js'; 
export default class AgendamentoCTRL{

    gravar(requisiçao, resposta){
        resposta.type("application/json");

        if(requisiçao.method === "POST" && requisiçao.is('application/json')){
            const dados = requisiçao.body;
            const visitante = dados.visitante;
            const data = dados.data;
            const horaEntrada = dados.horaEntrada;
            const horaSaida = dados.horaSaida;
            const observacao = dados.observacao;
            if(visitante && data && horaEntrada && horaSaida){
                const agendamento = new Agendamento(0, visitante, data, horaEntrada, horaSaida, observacao);
                agendamento.gravar().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        Registro: agendamento.registro,
                        mensagem: "Visita agendada com sucesso!!" + "\ Registro: " + agendamento.registro,
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
            else{
                resposta.status(400).json({
                    status:false,
                    mensagem:"Informe adequadamente todos os dados para o agendamento conforme a documentação da API"
                });
            }
        }
        else{
            resposta.status(400).json({ 
                status:false,
                mensagem:"Método não permitido ou agendamento no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    atualizar(requisiçao, resposta){
        resposta.type("application/json");

        if(requisiçao.method === "PUT" && requisiçao.is('application/json')){
            const dados = requisiçao.body;
            const registro = dados.registro;
            const visitante = dados.visitante;
            const data = dados.data;
            const horaEntrada = dados.horaEntrada;
            const horaSaida = dados.horaSaida;
            const observacao = dados.observacao;
            if(registro && visitante && data && horaEntrada && horaSaida && observacao){
                const agendamento = new Agendamento(registro, visitante, data, horaEntrada, horaSaida, observacao);
                agendamento.atualizar().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        mensagem: "Visita agendada atualizada com sucesso!!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
            else{
                resposta.status(400).json({
                    status:false,
                    mensagem:"Informe adequadamente todos os dados para agendar a visita conforme a documentação da API"
                });
            }
        }
        else{
            resposta.status(400).json({ 
                status:false,
                mensagem:"Método não permitido ou agendamento no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    excluir(requisiçao, resposta){
        resposta.type("application/json");

        if(requisiçao.method === "DELETE" && requisiçao.is('application/json')){
            const dados = requisiçao.body;
            const registro = dados.registro;
            if(registro){
                const agendamento = new Agendamento(registro);
                agendamento.removerDoBancoDados().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        mensagem: "Agendamento de visita excluída com sucesso!!"
                    });
                }).catch((erro) => {
                    resposta.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
            else{
                resposta.status(400).json({
                    status:false,
                    mensagem:"Informe o registro do agendamento conforme a documentação da API"
                });
            }
        }
        else{
            resposta.status(400).json({ 
                status:false,
                mensagem:"Método não permitido ou agendamento no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    consultar(requisiçao, resposta){
        resposta.type("application/json");

        if(requisiçao.method === "GET"){
                const agendamento = new Agendamento();
                agendamento.consultar('').then((agendamentos)=>{
                    resposta.status(200).json(agendamentos);
                }).catch((erro) => {
                    resposta.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
        else{
            resposta.status(400).json({ 
                status:false,
                mensagem:"Método não permitido!  Consulte a documentação da API"
            });
        }
    }
}