import Visitante from '../Modelo/Visitante.js'; 
export default class VisitanteCTRL{

    gravar(requisiçao, resposta){
        resposta.type("application/json");

        if(requisiçao.method === "POST" && requisiçao.is('application/json')){
            const dados = requisiçao.body;
            const nome = dados.nome;
            const sobrenome = dados.sobrenome;
            const cpf = dados.cpf;
            const rg = dados.rg;
            const telefone = dados.telefone;
            const data = dados.data;
            const observacao = dados.observacao;
            if(nome && sobrenome && cpf && rg && telefone && data){
                const visitante = new Visitante(0, nome, sobrenome, cpf, rg, telefone, data, observacao);
                visitante.gravar().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        Código: visitante.codigo,
                        mensagem: "Visitante gravado com sucesso!!" + "\ Código: " + visitante.codigo
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
                    mensagem:"Informe adequadamente todos os dados do visitante conforme a documentação da API"
                });
            }
        }
        else{
            resposta.status(400).json({ 
                status:false,
                mensagem:"Método não permitido ou visitante no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    atualizar(requisiçao, resposta){
        resposta.type("application/json");

        if(requisiçao.method === "PUT" && requisiçao.is('application/json')){
            const dados = requisiçao.body;
            const codigo = dados.codigo;
            const nome = dados.nome;
            const sobrenome = dados.sobrenome;
            const cpf = dados.cpf;
            const rg = dados.rg;
            const telefone = dados.telefone;
            const data = dados.data;
            const observacao = dados.observacao;
            if(codigo && nome && sobrenome && cpf && rg && telefone && data && observacao){
                const visitante = new Visitante(codigo, nome, sobrenome, cpf, rg, telefone, data, observacao);
                visitante.atualizar().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        mensagem: "Visitante atualizado com sucesso!!"
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
                    mensagem:"Informe adequadamente todos os dados do visitante conforme a documentação da API"
                });
            }
        }
        else{
            resposta.status(400).json({ 
                status:false,
                mensagem:"Método não permitido ou visitante no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    excluir(requisiçao, resposta){
        resposta.type("application/json");

        if(requisiçao.method === "DELETE" && requisiçao.is('application/json')){
            const dados = requisiçao.body;
            const codigo = dados.codigo;
            if(codigo){
                const visitante = new Visitante(codigo);
                visitante.removerDoBancoDados().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        mensagem: "Visitante excluído com sucesso!!"
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
                    mensagem:"Informe codigo do visitante conforme a documentação da API"
                });
            }
        }
        else{
            resposta.status(400).json({ 
                status:false,
                mensagem:"Método não permitido ou visitante no formato JSON não fornecido! Consulte a documentação da API"
            });
        }
    }

    consultar(requisiçao, resposta){
        resposta.type("application/json");

        if(requisiçao.method === "GET"){
                const visitante = new Visitante();
                visitante.consultar('').then((visitantes)=>{
                    resposta.status(200).json(visitantes);
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