import { Application as App } from 'express';

import routerUsers from './login';

const Routes = (app: App) => {
  app.use('/login', routerUsers);
};

export default Routes;