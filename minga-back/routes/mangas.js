import Router from 'express';
import read from '../controllers/mangas/read.js'

let manga_router = Router();

// manga_router.post() //crea un autor
manga_router.get('/', read) //leer uno o todos
// manga_router.purge() //actualizar un autor
// manga_router.delete() //elimina un autor


export default manga_router;