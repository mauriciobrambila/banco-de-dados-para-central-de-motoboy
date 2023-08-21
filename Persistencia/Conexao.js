import mysql from 'mysql2/promise';

export default async function Conectar(){
    if(global.conexao && global.conexao.status != "disconnected"){
        return global.conexao;
    }

    const conexao = await mysql.createConnection({
        host:"127.0.0.1",
        user:"aluno15-pfsii",
        port:3306, 
        password:"Y0FNf7a0TpDa35TK4ZBD",
        database:"backendvisitantes"
    });

    global.conexao = conexao;

    return conexao;
}
