import Livro from "./livro"

let livros = Livro.getBooks()

const form1 = document.querySelector("#formLivro")
const st = document.querySelector("#estatisticas")
const listaLivros = document.querySelector("#listaLivros")

function reloadBooks(){
    listaLivros.innerHTML = ''
    livros.forEach(e =>{
        const div = document.createElement('div')
        const titulo = e.titulo
        const autor = e.autor
        const paginas = e.paginas
        const genero = e.genero
        const h1t = document.createElement('h1')
        h1t.innerText = titulo;
        const h1a = document.createElement('h1')
        h1a.innerText = autor;
        const h1p = document.createElement('h1')
        h1p.innerText = paginas;
        const h1g = document.createElement('h1')
        h1g.innerText = genero
        div.append(h1t, h1a, h1p, h1g)
        listaLivros.appendChild(div)
    })
}

function reloadStatistics(){
    st.innerHTML = ''
    const statistics = Livro.statistics.getStatistics(livros)
    const h1t = document.createElement('h1')
    const h1r = document.createElement('h1')
    const h1ur = document.createElement('h1')
    const h1tp = document.createElement('h1')
    h1t.innerText = `Total de livros: ${statistics.total}`
    h1r.innerText = `Livros lidos: ${statistics.read}`
    h1ur.innerText = `Livros nao lidos: ${statistics.unread}`
    h1tp.innerText = `Total de paginas: ${statistics.totalpag}`
    st.append(h1t, h1r, h1ur, h1tp)
}

form1.addEventListener("subimit", (event) => {
    const formData = new FormData(event.target)
    const form = Object.fromEntries(formData.entries())
    const titulo = form.titulo
    const genero = form.genero
    const autor = form.autor
    const paginas = form.paginas
    const livro = new Livro(Livro.getNextId(livros), titulo, autor, genero, paginas)
    livros = livro.add(livros)
    Livro.saveBooks(livros)
    reloadBooks()
    reloadStatistics()
})
reloadBooks()
reloadStatistics()
