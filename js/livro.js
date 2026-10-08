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
    constructor(id, titulo, autor, genero, paginas, lido){
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

}