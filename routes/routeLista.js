import express from 'express'
const lista = express();
import { getLista, postLista, dltLista, putLista } from '../controllers/apiLista.js';

lista.get('', getLista)
lista.post('', postLista)
lista.delete('/:id', dltLista)
lista.put('/:id', putLista)

export {lista}