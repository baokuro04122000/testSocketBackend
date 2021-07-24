import express from 'express';
import {isAuth} from '../helpers/jwtHelper.js';
import {
    userAdmin,
    contactAdmin,
    assignmentAdmin,
    assignmentMB
} from '../controllers/index.js'

const router = express.Router();

let initRoutes = (app) => {
    router.get('/',(req,res)=>{
        res.send("hello world");
    })
    // user model
    router.post('/api/signup',userAdmin.signUp);
    router.post('/api/signin',userAdmin.signIn);
    router.get('/api/getAllDevices',isAuth,userAdmin.getAllDevices) 
    
    // contact model
    router.post('/api/addContact',isAuth,contactAdmin.addContact);
    router.post('/api/getContact',isAuth,contactAdmin.getPhones);
    router.post('/api/getNameContact',isAuth,contactAdmin.getAllNamePhones);
    
    // assignment admin model
    router.post('/api/addAssignment',isAuth,assignmentAdmin.addAssignment);
    router.post('/api/getDevicesOfAdmin',isAuth,assignmentAdmin.getInfoDeviceOfAdmin);
    router.get('/api/assignment/details/:id',isAuth,assignmentAdmin.getDetailsAssignment)
    // assignment mobile model
    router.put('/api/updateContactsMB',isAuth,assignmentMB.updateContactsMB);
    router.put('/api/updateContactMB',isAuth,assignmentMB.updateStatusForEachContact);
    return app.use('/',router);
}
export default initRoutes;