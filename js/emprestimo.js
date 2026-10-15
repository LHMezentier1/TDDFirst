import Livro from './livro'
import Usuario from './usuario'
import { arrayVazio } from './helperfuns';
import status from './status';

export default class Emprestimo{
    /**
     * 
     * @param {Usuario} usuario 
     * @param {Livro} livro 
     * @param {Date} datemp 
     * @param {Date} datdev 
     */
    constructor(id, usuario, livro, datemp, datdev){
        this.id = id;
        this.usuario = usuario;
        this.livro = livro;
        this.datemp = datemp;
        this.datdev = datdev;
    }
    static findById(emprestimos, id){
        if(arrayVazio(emprestimos)) return null
        const ret = emprestimos.find(it => it.id == id)
        if(!ret) return null;
        return ret;
    }
    static saveLoans(emprestimos){
        if(!Array.isArray(emprestimos)) return new status(false, "mande algo que seja um array!")
        localStorage.setItem("emprestimo", JSON.stringify(emprestimos))
        return new status(true, "Adicionado ao local storage!")
    }
    static getLoans(){
        if(!localStorage.hasOwnProperty("emprestimo")) return []
        const ret = JSON.parse(localStorage.getItem("emprestimo"))
        if(!ret) return []
        return ret
    }
    static getNextId(emprestimos){
        if(arrayVazio(emprestimos)) return 1;
        let nextId = 1;
        emprestimos.foreach(e => e.id > nextId ? nextId = e.id : nextId = nextId)
        return nextId
    }

}