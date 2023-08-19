import VisitanteBD from '../Persistencia/VisitanteBD.js';
export default class Visitante{

    #codigo;
    #nome;
    #sobrenome;
    #cpf;
    #rg;
    #telefone;
    #data;
    #observacao;

    constructor(codigo, nome, sobrenome, cpf, rg, telefone, data, observacao){
        this.#codigo = codigo;
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#cpf = cpf;
        this.#rg = rg;
        this.#telefone = telefone;
        this.#data = data;
        this.#observacao = observacao
    }

    get codigo(){
        return this.#codigo
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo
    }
    
    get nome(){
        return this.#nome
    }

    set nome(novoNome){
        this.#nome = novoNome
    }

    get sobrenome(){
        return this.#sobrenome
    }

    set sobrenome(novoSobrenome){
        this.#sobrenome = novoSobrenome
    }

    get cpf(){
        return this.#cpf
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf
    }

    get rg(){
        return this.#rg
    }

    set rg(novoRg){
        this.#rg = novoRg
    }

    get telefone(){
        return this.#telefone
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone
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
            "codigo"     : this.#codigo,
            "nome"       : this.#nome,
            "sobrenome"  : this.#sobrenome,
            "cpf"        : this.#cpf,
            "rg"         : this.#rg,
            "telefone"   : this.#telefone,
            "data"       : this.#data,
            "observacao" : this.#observacao
        }
    }

    async gravar(){
        const visitanteBD = new VisitanteBD();
        this.codigo = await visitanteBD.incluir(this);
    }

    async atualizar(){
        const visitanteBD = new VisitanteBD();
        await visitanteBD.alterar(this);
    }

    async removerDoBancoDados(){
        const visitanteBD = new VisitanteBD();
        await visitanteBD.excluir(this);
    }

    async consultar(termo){
        const visitanteBD = new VisitanteBD();
        const visitantes = await visitanteBD.consultar(termo);
        return visitantes;
    }
}