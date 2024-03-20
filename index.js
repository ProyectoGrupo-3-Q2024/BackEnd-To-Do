import express from 'express'
const app = express();
const port = 4000
import { lista } from './routes/routeLista.js';

 //middlewares
app.use(express.json());

app.use('/api/lista', lista)

app.listen(port, ()=>{

    console.log(`Esuchando en el puerto ${port}`);

});

console.log("Hola Mundo")