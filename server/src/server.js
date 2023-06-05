import fastify from 'fastify'
import 'dotenv/config'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth.js'
import jwt from '@fastify/jwt'
import { Routes } from './routes/routes.js'

const app = fastify()
app.register(Routes)
app.register(authRoutes)
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'zolomonnajkndjksdnkajd',
})
app.listen({
  port: 3333,
  host: '0.0.0.0',
})
