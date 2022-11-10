import { serverHttp } from './http';
import './websocket';

// import { app } from './app';

serverHttp.listen(3001, () => console.log('Server is running on PORT 3001'));
