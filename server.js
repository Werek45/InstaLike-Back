import express from "express";

const posts = [//lista de dados de posts //Array em memoria
    {id: 1, descricao: "Paisagem de montanhas ao amanhecer",imagem: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",},
    {id: 2, descricao: "A beleza de um novo dia nos campos verdejantes.", imagem: "https://images.unsplash.com/photo-1518548414898-299cdb635378",},
    {id: 3, descricao: "A serenidade do lago refletindo o céu azul.", imagem: "https://images.unsplash.com/photo-1501785888023-7017b79c136c",},
];
    
    const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post)=> {
        return post.id === Number(id);
    });
}// dois pontos : significa que essa informação sera substituida por uma variavel 

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
    
});
