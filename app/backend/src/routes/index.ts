<<<<<<< HEAD
// import { Application as App } from 'express';
// import routerClient from './client';
=======
import { Application as App } from 'express';
import routerCity from './city';
import routerClient from './client';
>>>>>>> origin

// import routerUsers from './login';

<<<<<<< HEAD
// const Routes = (app: App) => {
//   app.use('/login', routerUsers);
//   app.use('/client', routerClient);
// };
=======
const Routes = (app: App) => {
  app.use('/login', routerUsers);
  app.use('/client', routerClient);
  app.use('/city', routerCity);
};
>>>>>>> origin

// export default Routes;