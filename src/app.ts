import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import messageRoutes from './routes/MessageRoutes'
import userRoutes from './routes/UserRoutes'


class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect("mongodb+srv://darlan:d123456@cluster0.dqwados.mongodb.net/teste?retryWrites=true&w=majority", { useNewUrlParser: true })
  }

  private routes(): void {
    this.express.use('/usuarios', userRoutes);
    this.express.use('/mensagem', messageRoutes);
}
}

export default new App().express
