// Importa a biblioteca express para criar o servidor web
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express, que será usada para definir as rotas e configurar o servidor
const app = express();
routes(app)
// Inicia o servidor web na porta 3000
app.listen(3000, () => {
    // Imprime uma mensagem no console quando o servidor estiver pronto para receber requisições, indicando que está em execução
    console.log("Servidor escutando...");
});



