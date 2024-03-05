// server/index.ts
import express from 'express';
import routes from './api';

const app = express();

app.use('/api/fluxos', routes.fluxos);


export default app;