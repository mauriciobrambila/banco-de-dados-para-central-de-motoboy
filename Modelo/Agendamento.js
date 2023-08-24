import AgendamentoBD from '../Persistencia/AgendamentoBD.js';
export default class Agendamento{

    #registro;
    #visitante;
    #data;
    #horaEntrada;
    #horaSaida;
    #observacao;

    constructor(registro, visitante, data, horaEntrada, horaSaida, observacao){
        this.#registro = registro;
        this.#visitante = visitante;
        this.#data = data;
        this.#horaEntrada = horaEntrada;
        this.#horaSaida = horaSaida;
        this.#observacao = observacao
    }

    get registro(){
        return this.#registro
    }

    set registro(novoRegistro){
        this.#registro = novoRegistro
    }
    
    get visitante(){
        return this.#visitante
    }

    set visitante(novoVisitante){
        this.#visitante = novoVisitante
    }

    get horaEntrada(){
        return this.#horaEntrada
    }

    set horaEntrada(novaHoraEntrada){
        this.#horaEntrada = novaHoraEntrada
    }

    get horaSaida(){
        return this.#horaSaida
    }

    set horaSaida(novaHoraSaida){
        this.#horaSaida = novaHoraSaida
    }

    get data(){
        return this.#data
    }

    set data(novaData){
        this.#data = novaData
    }

    get observacao(){
        return this.#observacao
    }

    set observacao(novaObservacao){
        this.#observacao = novaObservacao
    }


    toJSON(){
        return{
            "registro"     : this.#registro,
            "visitante"    : this.#visitante,
            "data"         : this.#data,
            "horaEntrada"  : this.#horaEntrada,
            "horaSaida"    : this.#horaSaida,
            "observacao"   : this.#observacao
        }
    }

    async gravar(){
        const agendamentoBD = new AgendamentoBD();
        this.registro = await agendamentoBD.incluir(this);
    }

    async atualizar(){
        const agendamentoBD = new AgendamentoBD();
        await agendamentoBD.alterar(this);
    }

    async removerDoBancoDados(){
        const agendamentoBD = new AgendamentoBD();
        await agendamentoBD.excluir(this);
    }

    async consultar(termo){
        const agendamentoBD = new AgendamentoBD();
        const agendamentos = await agendamentoBD.consultar(termo);
        return agendamentos;
    }
}