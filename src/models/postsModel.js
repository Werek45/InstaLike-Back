// Importa a função conectarAoBanco do arquivo dbConfig.js, que estabelece a conexão com o banco de dados MongoDB
import conectarAoBanco from "../config/dbConfig.js";
// Estabelece a conexão com o banco de dados MongoDB usando a string de conexão do arquivo .env e armazena a instância da conexão na variável 'conexao'
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Declara uma função chamada getTodosPosts, que busca todos os documentos da coleção 'posts' no banco de dados
export function getTodosPosts() {
    // Seleciona o banco de dados 'imersao-instabytes' usando a instância de conexão 'conexao'
    const db = conexao.db('imersao-instabytes');
    // Seleciona a coleção 'posts' dentro do banco de dados selecionado
    const colecao = db.collection("posts");
    // Utiliza o método find() para buscar todos os documentos na coleção e o método toArray() para convertê-los em um array de objetos
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db('imersao-instabytes');
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}