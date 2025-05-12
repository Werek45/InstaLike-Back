import { MongoClient } from 'mongodb';

const conectarAoBanco = async (stringConexao) => {
    const cliente = new MongoClient(stringConexao, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await cliente.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso.");
        return cliente.db('imersao-instabytes'); // Nome do seu banco de dados
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
    }
};

export default conectarAoBanco;