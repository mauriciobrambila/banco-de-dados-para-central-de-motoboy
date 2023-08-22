import express from "express";
import cors from "cors";
import rotaVisitante from "./Rotas/rotaVisitante.js";

const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use('/visitantes', rotaVisitante);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // ou '*'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


app.listen(4015, '0.0.0.0', ()=>{
    console.log("Backend ouvindo em http://localhost:3005")
})