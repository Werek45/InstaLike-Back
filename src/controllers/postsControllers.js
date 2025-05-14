import { getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função getTodosPosts() para obter todos os posts do banco de dados de forma assíncrona
    const posts = await getTodosPosts();
    // Envia a resposta HTTP com o código de status 200 (OK) e o array de posts no formato JSON
    res.status(200).json(posts);
    }

export async function postarNovoPost(req, res) {
        const novoPost = req.body;
        try {
            postCriado = await criarPost(novoPost);
            res.status(200).json(postCriado);
        } catch (erro) {
            console.error(`Falha na conexão com o banco! erro `+ erro.message);
            //Não dar tantos detalhes na parte da requisição para quem esta usando, como tipo de erro.message
            res.status(500).json({"Erro":"Falha na requisição"});
        }
}