import express from "express";
import cors from "cors";
import rotaMotoboy from "./Rotas/rotaMotoboy.js";
import rotaEntrega from "./Rotas/rotaEntrega.js";
import rotaPedido from "./Rotas/rotaPedido.js";

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use('/motoboys', rotaMotoboy);
app.use('/entrega', rotaEntrega);
app.use('/pedidos', rotaPedido);

app.listen(3000, "localhost", ()=>{
    console.log("Rodando em http://localhost:3000/motoboys")
});

//app.listen(4045, '0.0.0.0', ()=>{
    //console.log("Backend ouvindo em http://localhost:4045")
//})