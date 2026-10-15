import status from "./status";

const {arrayVazio} = require("./helperfuns");
export default class Livro{
    /**
     * @param {int} id 
     * @param {string} titulo 
     * @param {string} autor 
     * @param {string} genero 
     * @param {int} paginas 
     * @param {boolean} lido 
     */
    constructor(id, titulo, autor, genero, paginas, lido = false){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.paginas = paginas;
        this.lido = lido;
    }
    add(livros){
        if(!Array.isArray(livros)) return null;
        else return [this, ...livros];
    }
    static getLivro(livros, nome){
        if(arrayVazio(livros)) return null;
        const ret = livros.filter(e => e.titulo.toLowerCase() == nome.toLowerCase());
        if(arrayVazio(ret)) return null;
        return ret;
    }
    static getLivroThatIncludes(livros, trecho){
        if(arrayVazio(livros)) return null;
        const ret = livros.filter(e => e.titulo.toLowerCase().includes(trecho.toLowerCase()));
        if(arrayVazio(ret)) return null;
        return ret;
    }   
    static getLivroById(livros, id){
        if(arrayVazio(livros)) return null;
        const ret = livros.filter(e => e.id == id);
        if(ret.length <= 0) return null;
        return ret[0];
    }
    static getNotRead(livros){
        if(arrayVazio(livros)) return null;
        const ret = livros.filter(e => !e.lido);
        if(arrayVazio(ret)) return null;
        return ret;
    }
    static markAsReadById(livros, id){
        if(arrayVazio(livros)) return null;
        const target = livros.find(e => e.id == id);
        if(!target) return null;
        target.lido = true;
        return livros;
    }
    markAsRead(livros){
        if(arrayVazio(livros)) return null;
        const target = livros.find(e => e.id == this.id);
        if(!target) return null;
        target.lido = true;
        return livros;
    }

    static statistics = class {
        constructor(total, read, unread, totalpag){
            this.total = total
            this.read = read
            this.unread = unread
            this.totalpag = totalpag
        }
        static getStatistics(livros){
            if(!Array.isArray(livros)) return null
            const total = livros.length
            const read = livros.reduce((sum, e) => e.lido ? sum + 1 : sum, 0)
            const unread = livros.reduce((sum, e) => !e.lido ? sum + 1 : sum, 0)
            const pages = livros.reduce((sum, e) => Number.isInteger(e.paginas) ? sum += e.paginas : sum, 0)
            return new Livro.statistics(total, read, unread, pages)
        }
    }

    static saveBooks(livros){
        if(!Array.isArray(livros)) return new status(false, "Mande algo que seja um array!")
        localStorage.setItem("livros", JSON.stringify(livros))
        return new status(true, "Adicionado ao local storage!")
    }
    static getBooks(){
        if(!localStorage.hasOwnProperty("livros")) return []
        const ret = JSON.parse(localStorage.getItem("livros"))
        if(!ret) return []
        return ret
    }
    static allBooksRead(livros){
        if(!Array.isArray(livros)) return false
        if(livros.any(e => !e.lido)) return false;
        return true
    }
    static getNextId(livros){
        console.log(livros)
        if(arrayVazio(livros)) return 1;
        let nextId = 1;
        livros.forEach(e => e.id >= nextId ? nextId = e.id+1 : nextId = nextId)
        return nextId
    }

}