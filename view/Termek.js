export default class Termek{

    #obj={};
    #szuloElem;

    constructor(obj, szuloElem){
        this.#obj=obj;
        this.#szuloElem=szuloElem;
        this.termekElem=$(".termekek")
        this.termekKiir();
        this.esemenykezelo();
    }

    termekKiir(){
        this.#szuloElem.append(`
            <div class="divek">
                <h2>${this.#obj.nev}</h2>
                <img src="${this.#obj.kep}" alt="${this.#obj.kep}">
                <p>Ár ${this.#obj.ertek} Ft</p>
                <p>Darabszám: ${this.#obj.db}</p>
                <button>Darabszám csökkentése</button>
                <button>Kosárba</button>
            </div>
            `)
    }

    esemenykezelo(){
        this.termekElem.on("clcik", ()=>{
            const e = new CustomEvent("termekek", {detail: this.#obj})
            window.dispatchEvent(e)
        })
    }
}