export default class Model{

    #lista=[];

    constructor(lista){
        this.#lista=lista;
    }

    getLista(){
        return this.#lista;
    }

    setLista(id, ujDb){
        const termek = this.#lista.find(termek => termek.id === id);
        if (termek) {
            termek.db = ujDb;
        }
    }
}