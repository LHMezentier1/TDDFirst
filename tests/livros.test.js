const {adicionarLivro, encontrarLivro, listarNaoLido, encontrarLivroPorId} = require("../js/livros")

const livros = [
{
id: 1,
titulo: "JavaScript",
autor: "Autor A",
genero: "Programação",
paginas: 300,
lido: false
},
{
id: 2,
titulo: "HTML e CSS",
autor: "Autor B",
genero: "Web",
paginas: 250,
lido: true
}]; 

test("if we add a book, pos 0 on it should be the book we added", () => {
    const livro = {
        id: 3,
        titulo: "A Arte de Dormir",
        autor: "ZéDosDormes",
        genero: "Vida",
        paginas: 300,
        lido: false
    }
    const resultado = adicionarLivro(livros, livro);
    expect(resultado).toHaveLength(livros.length+1);
    expect(resultado[0]).toEqual(livro);
});
test("if we try to find a book that exists, it should return an array with all the books with that name", ()=>{
    const livro = {id: 1,titulo: "JavaScript",autor: "Autor A",genero: "Programação",paginas: 300,lido: false}
    const resultado = encontrarLivro(livros, "javascript")
    expect(resultado[0]).toEqual(livro)
})
test("If we try to find a book that doesn't exist, it should return null", ()=>{
    const resultado = encontrarLivro(livros, "a")
    expect(resultado).toEqual(null)
})
test("If we try to find a book that exists by it's id, it should return that book exclusively, not in an array.", ()=>{
    const livro = {id: 1,titulo: "JavaScript",autor: "Autor A",genero: "Programação",paginas: 300,lido: false}
    const resultado = encontrarLivroPorId(livros, 1)
    expect(resultado).toEqual(livro)
})
test("If we try to find a book that doesn't exist by it's id, it should return null", ()=>{
    const resultado = encontrarLivroPorId(livros, 9)
    expect(resultado).toEqual(null)
})
test("if we try to pass something that isn't an array to any function, it should return null", () =>{
    const resultado = [adicionarLivro(1, 3), encontrarLivro(1, "a"), listarNaoLido(1), encontrarLivroPorId(1, 7)]
    expect(resultado.every(e => e == null)).toEqual(true)
})