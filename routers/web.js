import express from 'express';
import {isAuth} from '../helpers/jwtHelper.js';
import {
    userAdmin,
    contactAdmin,
    assignmentAdmin
} from '../controllers/index.js'

const router = express.Router();

let initRoutes = (app) => {
    router.post('/api/signin',userAdmin.signIn);
    router.post('/api/addContact',isAuth,contactAdmin.addContact)
    router.post('/api/addAssignment',isAuth,assignmentAdmin.addAssignment)
    return app.use('/',router);
}
export default initRoutes;