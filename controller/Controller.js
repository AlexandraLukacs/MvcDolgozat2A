import { autokLista } from "../model/adat.js";
import Model from "../model/Model.js";
import Termekek from "../view/Termekek.js";

export default class Controller{

    constructor(){
        this.model = new Model(autokLista);
        this.termekekView = new Termekek(this.model.getLista(), $(".termekek"));
        this.esemenyKezeles();
        this.kosar=[];
    }

    esemenyKezeles() {
        $(window).on("kosarba", (event) => {
            this.kosarba(event.detail);
        });

        $(window).on("csokkent", (event) => {
            this.darabszamCsokkentese(event.detail.id);
        });
    }

    kosarba(termek) {
        this.kosar.push(termek);
        this.kosarMegjelenit();
    }
    
    kosarMegjelenit() {
        const kosarDiv = $(".kosar");
        kosarDiv.empty();
        this.kosar.forEach((termek, index) => {
            kosarDiv.append(`
                <div class="kosarElem">
                    <p>${termek.nev}</p>
                    <p>Ár: ${termek.ertek} Ft</p>
                </div>
                `);
        });
    }
    
    darabszamCsokkentese(id) {
        const termek = this.model.getLista().find(t => t.id === id);
        if (termek && termek.db > 0) {
            termek.db -= 1;
            this.model.setLista(id, termek.db);
            $(".termekek").empty(); // Frissítsük a termékeket
            this.termekekView.termekekKiir();
        }
    }
}