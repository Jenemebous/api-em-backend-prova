const mysql = require("mysql2/promise");

const connectionPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: meubdd,
});

const executeQuery = async (res, tableName) => {
    try {
        const [rows, fields] = await connectionPool.query(`SELECT * FROM ${meubdd}.${tableName}`);
        res.json(rows);
    } catch (err) {
        console.error(`Erro ao executar a consulta para ${tableName}:`, err);
        res.status(500).send("Erro interno do servidor");
    }
};


app.get("/autores", async (req, res) => await executeQuery(res, 'autores'));
app.get("/livros", async (req, res) => await executeQuery(res, 'livros'));
app.get("/emprestimos", async (req, res) => await executeQuery(res, 'emprestimos'));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


module.exports = connection;