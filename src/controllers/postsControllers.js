import { getTodosPosts } from "../models/postsModel";

export async function listarPosts(req, res) {
    // Chama a função getTodosPosts() para obter todos os posts do banco de dados de forma assíncrona
    const posts = await getTodosPosts();
    // Envia a resposta HTTP com o código de status 200 (OK) e o array de posts no formato JSON
    res.status(200).json(posts);
    }
