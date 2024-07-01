import express, { Application } from 'express';
import path from 'path';
import { inject, injectable } from 'inversify';
import TYPES from '@config/identifiers';
import ApiRouter from './routes/api.router';

@injectable()
class ExpressServer {
  constructor(
    @inject(TYPES.Application) private readonly app: Application,
    @inject(TYPES.ApiRouter) private readonly apiRouter: ApiRouter
  ) {
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static('public'));
  }

  private initializeRoutes() {
    this.app.use('/api', this.apiRouter.router);

    this.app.get('*', (req, res) => {
      const indexPath = path.join(__dirname, `../../${'public'}`, 'index.html');
      res.sendFile(indexPath);
    });
  }
  public async start(): Promise<void> {
    this.app.listen(3000, () => {
      console.log(`Server running at ${3000}`);
    });
  }
}
export default ExpressServer;
