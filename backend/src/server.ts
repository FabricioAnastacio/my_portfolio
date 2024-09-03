import { App } from './app';

const PORT = process.env.BACKEND_PORT || 3001;

new App().start(PORT);
