const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API de Produtos funcionando" });
});

app.post("/produtos", async (req, res) => {
  const { nome, preco } = req.body;
  const result = await pool.query(
    "INSERT INTO produtos (nome, preco) VALUES ($1, $2) RETURNING *",
    [nome, preco]
  );
  res.status(201).json(result.rows[0]);
});

app.get("/produtos", async (req, res) => {
  const result = await pool.query("SELECT * FROM produtos");
  res.json(result.rows);
});

app.put("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;
  await pool.query(
    "UPDATE produtos SET nome=$1, preco=$2 WHERE id=$3",
    [nome, preco, id]
  );
  res.json({ mensagem: "Produto atualizado" });
});

app.delete("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM produtos WHERE id=$1", [id]);
  res.json({ mensagem: "Produto removido" });
});

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});
