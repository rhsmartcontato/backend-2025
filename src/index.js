import express from 'express';

const server = express();

const PORT = process.env.PORT || 3000;

server.get("/", (req, res)=>{
    res.status(200).send("Primeira rota do backend -alterado");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})