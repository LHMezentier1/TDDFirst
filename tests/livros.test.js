import Livro from '../js/livro';

const books = [new Livro(1, "JavaScript", "Autor A", "Programação", 300, false), new Livro(2, "HTML e CSS", "Autor B", "Web", 250, true)]

test("if we add a book, pos 0 on it should be the book we added", () => {
    const book = new Livro(3, "A Arte de Dormir", "ZéDosDormes", "Vida", 300, false);
    const result = book.add(books);
    expect(result).toHaveLength(books.length+1);
    expect(result[0]).toEqual(book);
});
test("if we try to find a book that exists, it should return an array with all the books with that name", ()=>{
    const result = Livro.getLivro(books, "javascript")
    expect(result[0].genero).toBe("Programação")
})
test("If we try to find a book that doesn't exist, it should return null", ()=>{
    const result = Livro.getLivro(books, "a")
    expect(result).toEqual(null)
})
test("If we try to find a book that exists by it's id, it should return that book exclusively, not in an array.", ()=>{
    const result = Livro.getLivroById(books, 1)
    expect(result.id).toEqual(1)
})
test("If we try to find a book that doesn't exist by it's id, it should return null", ()=>{
    const result = Livro.getLivroById(books, 9)
    expect(result).toEqual(null)
})
test("if we try to pass something that isn't an array to any function, it should return null", () =>{
    const book = new Livro(3, "A Arte de Dormir", "ZéDosDormes", "Vida", 300, false);
    const result = [book.add(1, 3), Livro.getLivro(1, "a"), Livro.getNotRead(1), Livro.getLivroById(1, 7), Livro.markAsReadById(1, 4)]
    expect(result.every(e => e == null)).toEqual(true)
})
test("If we mark a book that exists as read, it should be returned as read.", () =>{
    const result = Livro.markAsReadById(books, 1);
    console.log(result)
    expect(Livro.getLivroById(result, 1).lido).toEqual(true)
})
test("If we try to mark a book that doesn't exist as read, it should return null.", () =>{
    const result = Livro.markAsReadById(books, 4);
    expect(result).toEqual(null)
})
test("If we try to find books by a substring which exists in one of the books, all the books returned must have the substring in it.", () =>{
    const substring = "ava";
    const result = Livro.getLivroThatIncludes(books, substring);
    expect(result.every(e => e.titulo.toLowerCase().includes(substring))).toEqual(true)
})
test("If we try to find books by a substring that none of them have, null should be returned.", () =>{
    const substring = "iadagdaufhj";
    const result = Livro.getLivroThatIncludes(books, substring);
    expect(result).toEqual(null)
})