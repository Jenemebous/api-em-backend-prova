import app from './src/app.js'

const port = 80;

app.listen(port, () => {
    console.log(`O servidor está no endereço http://localhost:${port}`)
});

