import fastify from 'fastify'
import 'dotenv/config'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth.js'
import jwt from '@fastify/jwt'
import { Routes } from './routes/routes.js'
const port = process.env.PORT || 5000
const app = fastify()
app.register(Routes)
app.register(authRoutes)
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'zolomonnajkndjksdnkajd',
})
app.listen(port, () => console.log(`Server is  running on port ${port}`))
