import { Router } from 'express';

import notificationRoute from './notification.routes';
import uploadRoute from './upload.routes';


const routes = Router()

routes.use("/upload", uploadRoute)
routes.use("/notification", notificationRoute)

export default routes