import createError from 'http-errors'     //Modulo para crear/configurar errores en el servidor
import express from 'express'             //Levantar y configurar el servidor
import path from 'path'                   //Conocer la ubicacion de nuestro servidor
import cookieParser from 'cookie-parser'  //Maneja cookies
import logger from 'morgan'               //Libreria para registrar las peticiones que se realizan al servidor
import { __dirname } from './utils.js'
import indexRouter from './routes/index.js'  //enrutador principal de la aplicacion
//import usersRouter from './routes/users.js'  //
import "dotenv/config.js";
import "./config/database.js"
import cors from 'cors'

let app = express();          // variable con el modulo de express para crear el servidor

// view engine setup  //set de settear
app.set('views', path.join(__dirname, 'views'));  //configuro que las vistas generadas en el backedn esten generadas en "views"
app.set('view engine', 'ejs');    // configuro que las vistas se van a definir con el lenguaje de ".ejs" (motor de plantilla)

//MIDDLEWARES
//use es un metodo que OBLIGA (en este caso) A MI APLICACION A EJECUTAR UNA FUNCION
app.use(logger('dev')); //registro de peticiones 
app.use(cors());   
app.use(express.json());  //transformar/manejar formato json (post/put)
app.use(express.urlencoded({ extended: false })); //permite leer queris y params de una peticion
app.use(cookieParser());  // - - -no es usa en el bootcamp- - -(para manejar cookies)
app.use(express.static(path.join(__dirname, 'public')));//genera una carpeta de acceso publico

app.use('/', indexRouter);

export default app