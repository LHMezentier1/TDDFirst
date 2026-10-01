const adicionarLivro = (livros, livro) => arrayVazio(livros) ? null : [livro, ...livros];

const arrayVazio = (Arr) => !Array.isArray(Arr) || Arr.length < 0;

function encontrarLivro(livros, nome){
    if(arrayVazio(livros)) return null;
    const ret = livros.filter(e => e.titulo.toLowerCase() == nome.toLowerCase());
    if(ret.length <= 0) return null;
    return ret;
}

function encontrarLivroComComeco(livros, comeco){
    if(arrayVazio(livros)) return null;
    const ret = livros.filter(e => e.titulo.toLowerCase().startsWith(comeco.toLowerCase()));
    if(ret.length <= 0) return null;
    return ret;
}

function encontrarLivroPorId(livros, id){
    if(arrayVazio(livros)) return null;
    const ret = livros.filter(e => e.id == id);
    if(ret.length <= 0) return null;
    return ret[0];
}

function listarNaoLido(livros){
    if(arrayVazio(livros)) return null;
    const ret = livros.filter(e => !e.lido);
    if(ret.length <= 0) return null;
    return ret;
}

function marcarComoLidoPorId(livros, id){
    if(arrayVazio(livros)) return null;

}

module.exports = {adicionarLivro, encontrarLivro, listarNaoLido, encontrarLivroPorId, encontrarLivroComComeco};
