import express from 'express'
const lista = express();
import { getLista, postLista } from '../controllers/apiLista.js';

lista.get('', getLista)
lista.post('', postLista)

export {lista}