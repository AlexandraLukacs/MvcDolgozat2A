export default class Termek{

    #obj={};
    #szuloElem;

    constructor(obj, szuloElem){
        this.#obj=obj;
        this.#szuloElem=szuloElem;
        this.termekKiir();
        this.esemenykezelo();
    }

    termekKiir(){
        this.#szuloElem.append(`
            <div class="divek">
                <h2>${this.#obj.nev}</h2>
                <img class="w-100 rounded" src="${this.#obj.kep}" alt="${this.#obj.kep}">
                <p>Ár ${this.#obj.ertek} Ft</p>
                <p>Darabszám: ${this.#obj.db}</p>
                <button class="csokkent">Darabszám csökkentése</button>
                <button class="kosarba">Kosárba</button>
            </div>
            `)
    }

    esemenykezelo(){
    
        this.#szuloElem.find(".kosarba:last").on("click", () => {
            const esemeny = new CustomEvent("kosarba", { detail: this.#obj });
            window.dispatchEvent(esemeny);
        });

        this.#szuloElem.find(".csokkent:last").on("click", () => {
            const esemeny = new CustomEvent("csokkent", { detail: { id: this.#obj.id } });
            window.dispatchEvent(esemeny);
        });

    }
}