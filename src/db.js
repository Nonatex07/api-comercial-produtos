const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",       
  host: "127.0.0.1",
  database: "av1_produtos",   
  password: "041105",
  port: 5433,
});

// Teste a conexão
pool.connect()
  .then(() => console.log("Conectado ao PostgreSQL com sucesso!"))
  .catch((err) => console.error("Erro ao conectar ao PostgreSQL:", err));

module.exports = pool;
