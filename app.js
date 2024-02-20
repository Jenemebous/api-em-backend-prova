import express from 'express'

const app = express();

app.use(express.json());

//mock

const alunos = [
    {
      "aluno": "Jéssica",
      "idade": 20,
      "curso": "Desenvolvimento de Sistemas",
      "matricula": "123456",
      "ano_matricula": 2022
    },
    {
      "aluno": "Carlos",
      "idade": 22,
      "curso": "Engenharia Elétrica",
      "matricula": "789012",
      "ano_matricula": 2021
    },
    {
      "aluno": "Ana",
      "idade": 21,
      "curso": "Ciência da Computação",
      "matricula": "345678",
      "ano_matricula": 2023
    },
   
  ];
  

  const livros = [
    {
      "titulo": "O Senhor dos Anéis",
      "autor": "J.R.R. Tolkien",
      "ano_publicacao": 1954,
      "genero": "Fantasia"
    },
    {
      "titulo": "1984",
      "autor": "George Orwell",
      "ano_publicacao": 1949,
      "genero": "Distopia"
    },
    {
      "titulo": "Cem Anos de Solidão",
      "autor": "Gabriel García Márquez",
      "ano_publicacao": 1967,
      "genero": "Realismo Mágico"
    },
   
  ];
  

  
app.get('/alunos', (req, res) => {
    res.json(alunos)
});

app.get('/livros', (req, res) => {
    res.json(livros)
});

app.post('/alunos', (req, res) => {
    alunos.push(req.body)
    res.status(201).send("Seleção cadastrada com êxito!")
});

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send("Seleção cadastrada com êxito!")
});

app.put("/alunos/:id", (req, res) => {
    const idAluno = req.params.id
    const novoAluno = req.body

    if (idAluno < alunos.length) {
        alunos[idAluno] = novoAluno
        res.status(200).send("Atualizado!")
    }

    res.status(400).send("Erro!")

});

app.put("/livros/:id", (req, res) => {
    const idLivro = req.params.id
    const novoLivro = req.body

    if (idLivro < livros.length) {
        livros[idLivro] = novoLivro
        res.status(200).send("Atualizado com êxito!")
    }

    res.status(400).send("Erro!")

});

app.delete("/alunos/:id", (req, res) => {
    const idAluno = req.params.id

    if (idAluno < alunos.length) {
        alunos.splice(alunos[idAluno], 1)
        res.status(200).send("Deletado")
    }

    res.status(400).send("Erro!")

});

app.delete("/livros/:id", (req, res) => {
    const idLivro = req.params.id

    if (idLivro < livros.length) {
        livros.splice(livros[idLivro], 1)
        res.status(200).send("Deletado")
    }

    res.status(400).send("Erro!")

});


app.get('/', (req,res) => {
    res.send('teste')
});



export default app