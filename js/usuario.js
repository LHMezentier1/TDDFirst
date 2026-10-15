import status from "./status"
export default class Usuario{
    /**
     * 
     * @param {int} id 
     * @param {string} nome 
     * @param {Date} datnas 
     * @param {string} cpf 
     */
    constructor(id, nome, datnas, cpf){
        this.id = id;
        this.nome = nome;
        this.datnas = datnas;
        this.cpf = cpf;
    }

    add(usuarios){
        if(!Array.isArray(usuarios)) return null;
        else return [this, ...usuarios];
    }

    static findById(usuarios, id){
        if(arrayVazio(usuarios)) return null
        const ret = usuarios.find(it => it.id == id)
        if(!ret) return null;
        return ret;
    }
    static saveUsers(users){
        if(!Array.isArray(users)) return new status(false, "mande algo que seja um array!")
        localStorage.setItem("usuarios", JSON.stringify(users))
        return new status(true, "salvo no local storage")
    }
    static getUsers(){
        if(!localStorage.hasOwnProperty("usuarios")) return []
        const ret = JSON.parse(localStorage.getItem("usuarios"))
        if(!ret) return []
        return ret
    }
    static getNextId(usuarios){
        if(arrayVazio(usuarios)) return 1;
        let nextId = 1;
        usuarios.foreach(e => e.id > nextId ? nextId = e.id : nextId = nextId)
        return nextId
    }
}