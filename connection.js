const express = require('express');

const app = express();

app.use(express.json());

const mysql = require("mysql2/promise");


const connectionPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: 'bdbiblioteca',
});

const port = 80;




app.delete('/alunos/:id', async (req, res) => {
    const alunoId = req.params.id;
    try {
        const connection = await connectionPool.getConnection();
        await connection.query('DELETE FROM alunos WHERE id = ?', [alunoId]);
        connection.release();
        res.status(200).send('Aluno deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar aluno:', error);
        res.status(500).send('Erro ao processar a solicitação');
    }
});


app.listen(port, () => {
    console.log(`O servidor está no endereço http://localhost:${port}`)
});
