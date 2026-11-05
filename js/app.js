import Livro from "./livro.js"

let allLivros = Livro.getBooks()

const form1 = document.querySelector("#formLivro")
const st = document.querySelector("#estatisticas")
const listaLivros = document.querySelector("#listaLivros")
const pesquisa = document.querySelector("#pesquisa")

let currentBooks = allLivros
let isOnSearch = false

function reloadBooks(){
    listaLivros.innerHTML = ''
    currentBooks.forEach(e =>{
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
} reloadBooks()

function reloadStatistics(){
    st.innerHTML = ''
    const statistics = Livro.statistics.getStatistics(currentBooks)
    const h1t = document.createElement('h1')
    const h1r = document.createElement('h1')
    const h1ur = document.createElement('h1')
    const h1tp = document.createElement('h1')
    h1t.innerText = `Total de livros: ${statistics.total}`
    h1r.innerText = `Livros lidos: ${statistics.read}`
    h1ur.innerText = `Livros nao lidos: ${statistics.unread}`
    h1tp.innerText = `Total de paginas: ${statistics.totalpag}`
    st.append(h1t, h1r, h1ur, h1tp)
} reloadStatistics()

form1.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const formData = new FormData(event.target);
  const form = Object.fromEntries(formData.entries());
  const titulo = form.titulo;
  const genero = form.genero;
  const autor = form.autor;
  const paginas = parseInt(form.paginas, 10) || 0;
  const livro = new Livro(Livro.getNextId(allLivros), titulo, autor, genero, paginas);
  allLivros = livro.add(allLivros);
  Livro.saveBooks(allLivros);
  if(!isOnSearch) currentBooks = allLivros
  reloadBooks();
  reloadStatistics();
  form1.reset();
});
pesquisa.addEventListener('input', () =>{
    console.log('a')
    if(pesquisa.value.trim() === ''){
        currentBooks = allLivros
        isOnSearch = false
        reloadBooks()
        reloadStatistics()
        return
    }
    isOnSearch = true
    currentBooks = Livro.getLivroThatIncludes(allLivros, pesquisa.value)
    console.log(currentBooks)
    reloadBooks()
    reloadStatistics()
})
