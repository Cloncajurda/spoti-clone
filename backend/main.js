import http from 'node:http'
import { app } from './src/app.js'
import { config } from 'dotenv'
import { connectToDataBase } from './src/config/db.js'

config()

const server = http.createServer(app)

const PORT = process.env.PORT || 3000
server.listen(PORT)

server.on('listening', () => {
    console.log(`Server on port ${PORT}`)
    connectToDataBase()
})

server.on('error', (error) => {
    console.log(error)
})