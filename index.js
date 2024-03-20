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

<<<<<<< HEAD
console.log("Hello work")
=======
console.log("Hola Mundo")
>>>>>>> 9c2a3ee3ab45b33559bd2a3f4b92dc8a2f96e670
