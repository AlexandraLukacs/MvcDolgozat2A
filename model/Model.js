export default class Model{

    #lista=[];

    constructor(lista){
        this.#lista=lista;
    }

    getLissta(){
        return this.#lista;
    }

    setLista(id, ertek){
        this.#lista=[id, ertek];
    }
}