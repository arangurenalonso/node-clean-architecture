import express, { Application } from 'express';
import path from 'path';
import { inject, injectable } from 'inversify';
import TYPES from '@config/identifiers';
import ApiRouter from './routes/api.router';
import EnvironmentConfig from '@config/EnvironmentConfig';

@injectable()
class ExpressServer {
  constructor(
    @inject(TYPES.Application) private readonly _app: Application,
    @inject(TYPES.ApiRouter) private readonly _apiRouter: ApiRouter,
    @inject(TYPES.EnvironmentConfig)
    private readonly _environmentConfig: EnvironmentConfig
  ) {
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares() {
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
    this._app.use(express.static(this._environmentConfig.publicPath));
  }

  private initializeRoutes() {
    this._app.use('/api', this._apiRouter.router);

    this._app.get('*', (req, res) => {
      const indexPath = path.join(
        __dirname,
        `../../${this._environmentConfig.publicPath}`,
        'index.html'
      );
      res.sendFile(indexPath);
    });
  }
  public async start(): Promise<void> {
    this._app.listen(this._environmentConfig.port, () => {
      console.log(`Server running at ${this._environmentConfig.port}`);
    });
  }
}
export default ExpressServer;
