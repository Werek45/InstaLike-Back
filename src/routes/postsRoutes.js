import express from "express";
import { listarPosts, postarNovoPost} from "../controllers/postsControllers.js";

const routes = (app) => {
    // Configura o middleware express.json(), que permite que o servidor analise o corpo das requisições HTTP que possuem o cabeçalho Content-Type: application/json
    app.use(express.json());
    // Define uma rota GET no endpoint '/posts' para retornar todos os posts do banco de dados
    app.get("/posts", listarPosts);
    //Define uma rota POST para Rota para criar um post
    app.post("/posts", postarNovoPost)
}

export default routes;
