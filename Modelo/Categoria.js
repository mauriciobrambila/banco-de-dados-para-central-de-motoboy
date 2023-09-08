import CategoriaBD from '../Persistencia/CategoriaBD.js';
export default class Categoria{

    #codigo;
    #nome;
    #observacao;

    constructor(codigo, nome, observacao){
        this.#codigo = codigo;
        this.#nome = nome;
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
            "observacao" : this.#observacao
        }
    }

    async gravar(){
        const categoriaBD = new CategoriaBD();
        this.codigo = await categoriaBD.incluir(this);
    }

    async atualizar(){
        const categoriaBD = new CategoriaBD();
        await categoriaBD.alterar(this);
    }

    async removerDoBancoDados(){
        const categoriaBD = new CategoriaBD();
        await categoriaBD.excluir(this);
    }

    async consultar(termo){
        const categoriaBD = new CategoriaBD();
        const categorias = await categoriaBD.consultar(termo);
        return categorias;
    }

    async consultarCodigo(codigo){
        const categoriaBD = new CategoriaBD();
        const categorias = await categoriaBD.consultarCodigo(codigo);
        return categorias;
    }
}