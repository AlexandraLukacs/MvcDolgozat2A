import Termek from "./Termek.js";

export default class Termekek{

    #lista=[];
    #taroloElem;

    constructor(lista, taroloElem){
        this.#lista=lista;
        this.#taroloElem=taroloElem;
    }

    termekekKiir(){
        this.#lista.forEach((elem)=>{
            new Termek(elem, this.#taroloElem);
        })
    }

}