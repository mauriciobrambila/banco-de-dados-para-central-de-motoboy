import mysql from 'mysql2/promise';

export default async function Conectar(){
    if(global.conexao && global.conexao.status != "disconnected"){
        return global.conexao;
    }

    const conexao = await mysql.createConnection({
        host:"localhost",
        user:"aluno15-pfsii",
        port:3306, 
        password:"fMv9LOO0NxxGDEDNktBA",
        database:"backendvisitantes"
    });

    global.conexao = conexao;

    return conexao;
}