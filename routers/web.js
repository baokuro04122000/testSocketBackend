import express from 'express';
import {isAuth} from '../helpers/jwtHelper.js';
import {
    userAdmin,
    contactAdmin,
    assignmentAdmin
} from '../controllers/index.js'

const router = express.Router();

let initRoutes = (app) => {
    router.get('/',(req,res)=>{
        res.send("hello world");
    })
    router.post('/api/signup',userAdmin.signUp);
    router.post('/api/signin',userAdmin.signIn);
    router.post('/api/getContact',isAuth,contactAdmin.getPhones);
    router.post('/api/getNameContact',isAuth,contactAdmin.getAllNamePhones);
    router.post('/api/addContact',isAuth,contactAdmin.addContact);
    router.post('/api/addAssignment',isAuth,assignmentAdmin.addAssignment);
    router.post('/api/getDevicesOfAdmin',isAuth,assignmentAdmin.getInfoDeviceOfAdmin);
    return app.use('/',router);
}
export default initRoutes;