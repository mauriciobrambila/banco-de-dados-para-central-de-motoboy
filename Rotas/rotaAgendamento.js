import { Router} from "express";
import AgendamentoCTRL from "../Controle(A)/AgendamentoCtrl.js";

const rotaAgendamento = new Router();
const agendamentoCtrl = new AgendamentoCTRL();

rotaAgendamento.post('/',agendamentoCtrl.gravar)
.put('/',agendamentoCtrl.atualizar)
.delete('/',agendamentoCtrl.excluir)
.get('/',agendamentoCtrl.consultar)


export default rotaAgendamento;