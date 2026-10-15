require('dotenv/config');
const express = require("express")
const pessoaRoutes = require("./routes/pessoaRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use((request, response, next)=>{
    console.log("Executando antes das rotas");
    next();
});
app.use("/pessoas", pessoaRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/", authRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});

