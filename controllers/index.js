import userAdminController from "./AdminControllers/userAdminController.js";
import contactAdminController from './AdminControllers/contactAdminController.js';
import assignmentAdminController from "./AdminControllers/assignmentAdminController.js";
import userMobile from './MobileControllers/userMobile.js';
import assignmentMobile from './MobileControllers/assignmentMobile.js';


// admin page
export const userAdmin = userAdminController;
export const contactAdmin = contactAdminController;
export const assignmentAdmin = assignmentAdminController;
// mobile
export const userMB = userMobile;
export const assignmentMB = assignmentMobile;
