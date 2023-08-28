import express from "express";
import cors from "cors";
import rotaVisitante from "./Rotas/rotaVisitante.js";
import rotaAgendamento from "./Rotas/rotaAgendamento.js";

const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use('/visitantes', rotaVisitante);
app.use('/agendamento', rotaAgendamento);


app.listen(4015, '0.0.0.0', ()=>{
    console.log("Backend ouvindo em http://localhost:3005")
})