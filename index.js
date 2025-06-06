const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, seja bem vindo e aproveite as rotas deste site, que estão descritas na README do repositório no GitHub.');
});

app.get('/soma/:a/:b', (req, res) => {     
    const nA = Number(req.params.a);     
    const nB = Number(req.params.b);     
    const r = nA + nB;     
    res.send(r.toString());
});

app.get('/subtracao/:a/:b', (req, res) => {     
    const nA = Number(req.params.a);     
    const nB = Number(req.params.b);     
    const r = nA - nB;     
    res.send(r.toString());
});

app.get('/multiplicacao/:a/:b', (req, res) => {     
    const nA = Number(req.params.a);     
    const nB = Number(req.params.b);     
    const r = nA * nB;     
    res.send(r.toString());
});

app.get('/divisao/:a/:b', (req, res) => {     
    const nA = Number(req.params.a);     
    const nB = Number(req.params.b);     
    const r = nA / nB;   
    if(r != 0){  
    res.send(r.toString());
    }else{
        res.send("")
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
