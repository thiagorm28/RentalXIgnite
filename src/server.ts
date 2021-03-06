import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const app = express()
const port = 3333

app.use(express.json())

app.use('/categories', categoriesRoutes)

app.listen(port)
