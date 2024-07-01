import 'dotenv/config';
import * as env from 'env-var';
import { injectable } from 'inversify';

@injectable()
class EnvironmentConfig {
  public readonly port: number;
  public readonly publicPath: string;

  constructor() {
    this.port = env.get('PORT').required().asPortNumber();
    this.publicPath = env.get('PUBLIC_PATH').default('public').asString();
  }
}
export default EnvironmentConfig;
