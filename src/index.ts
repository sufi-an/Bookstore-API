

import express, { Application, Request, Response } from 'express'
import swaggerUi from "swagger-ui-express";
import routes from './api/routes'

import dbInit from './db/init'

dbInit()

const app: Application = express()
const port = 3000

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Hellooooo API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

app.use(express.static("public"));
app.use('/api/v1', routes)
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "swagger.json",
      },
    })
  );

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error:any) {
    console.log(`Error occurred: ${error.message}`)
}