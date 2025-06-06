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
    res.send("Resposta: " + r.toString());
});

app.get('/subtracao/:a/:b', (req, res) => {     
    const nA = Number(req.params.a);     
    const nB = Number(req.params.b);     
    const r = nA - nB;     
    res.send("Resposta: " + r.toString());
});

app.get('/multiplicacao/:a/:b', (req, res) => {     
    const nA = Number(req.params.a);     
    const nB = Number(req.params.b);     
    const r = nA * nB;     
    res.send("Resposta: " + r.toString());
});

app.get('/divisao/:a/:b', (req, res) => {     
    const nA = parseFloat(req.params.a);     
    const nB = parseFloat(req.params.b);     
    const r = nA / nB;   
    if(r != 0){  
    res.send("Resposta: " + r.toString());
    }else{
        res.send("Não é possível resolver essa divisão!")
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
