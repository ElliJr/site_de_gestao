// para iniar o server digite node server.js
// para para o server digite Ctrl + C 
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const FILE_PATH = 'funcionarios.json';

// Função para ler o arquivo JSON
const lerFuncionarios = () => {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(FILE_PATH));
};

// Rota para adicionar funcionário
app.post('/adicionar-funcionario', (req, res) => {
    const { nome, cpf } = req.body;
    if (!nome || !cpf) {
        return res.status(400).json({ erro: "Nome e CPF são obrigatórios!" });
    }

    let funcionarios = lerFuncionarios();
    funcionarios.push({ nome, cpf });
    fs.writeFileSync(FILE_PATH, JSON.stringify(funcionarios, null, 2));

    res.json({ mensagem: "Funcionário adicionado com sucesso!" });
});

// Rota para obter funcionários
app.get('/funcionarios', (req, res) => {
    res.json(lerFuncionarios());
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
