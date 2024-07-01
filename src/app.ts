import 'reflect-metadata';
import ExpressServer from './presentation/rest/express.server';
import TYPES from './config/identifiers';
import DependencyContainer from './config/DependencyContainer';
import { mediatorSettings } from 'mediatr-ts';
import InversifyResolver from './config/inversify.resolver';

async function main() {
  const dependencyContainer = new DependencyContainer();

  const container = dependencyContainer.container();
  mediatorSettings.resolver = new InversifyResolver(container);

  const server = container.get<ExpressServer>(TYPES.ExpressServer);
  await server.start();
}

(async () => {
  await main();
})();
