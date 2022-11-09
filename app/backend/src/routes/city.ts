import { Router } from 'express';

import CityController from '../controllers/city';

const routerCity = Router();

const cityController = new CityController();

routerCity.get(
  '/',
  cityController.getAll,
);

routerCity.get('/client', cityController.findCityToClient);

routerCity.get('/client/:id', cityController.findId);

export default routerCity;