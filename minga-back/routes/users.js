import Router from 'express';
import read from '../controllers/users/read.js'

let auth_router = Router();

auth_router.get('/', read) //leer uno o todos


export default auth_router;