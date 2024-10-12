import Termek from "./Termek.js";

export default class Termekek{

    #lista=[];
    #taroloElem;

    constructor(lista, taroloElem){
        this.#lista=lista;
        this.#taroloElem=taroloElem;
        this.termekekKiir();
    }

    termekekKiir(){
        this.#lista.forEach((elem)=>{
            new Termek(elem, this.#taroloElem);
        })
    }

}