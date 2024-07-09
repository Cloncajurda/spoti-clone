import express from "express"
import cors from "cors"
import { api } from "./routes/api.js"

export const app = express()

// convierte el cuerpo de las solicitudes con formato JSON en objetos JavaScript accesibles a través de 'req.body'
app.use(express.json())

// habilita CORS para permitir solicitudes desde diferentes orígenes (dominios)
app.use(cors())

// Define una ruta base /api y asigna las rutas definidas en 'api' http://localhost:3000/api/
app.use('/api', api)