import mysql from "mysql2/promise";

export default async function conectar() {
  if (global.conexao && global.conexao.status != "disconnected") {
    return global.conexao;
  }

  //const conexao = await mysql.createConnection({
   // host: "localhost",
   // user: "aluno45-pfsii",
   // password: "HBJl3ebV0H1hKIgMbEmO",
   // database: "motoboy",
   //});

   //LOCAL
  const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "aluno45-pfsii",
        database: "motoboys"
      });
    
      global.conexao = conexao;
      return conexao;
    }


    