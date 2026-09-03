require('dotenv/config');
const express = require("express")
const alunoRoutes = require("./routes/alunoRoutes");

const app = express();
app.use(express.json());
app.use("/alunos", alunoRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});

