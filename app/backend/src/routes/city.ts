import { Router } from 'express';

import CityController from '../controllers/city';

const routerCity = Router();

const cityController = new CityController();

routerCity.get('/', cityController.getAll);
routerCity.get('/count', cityController.count);
routerCity.get('/:id', cityController.findCityToClient);

export default routerCity;