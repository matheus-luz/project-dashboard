// import { serverHttp } from './http';
// import './websocket';

// serverHttp.listen(3001, () => console.log('Server is running on PORT 3001'));

import { App } from './app';

import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);