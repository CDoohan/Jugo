import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  console.log('Server is working');
  return res.json({ message: 'Server is working' });
});

export default routes;
