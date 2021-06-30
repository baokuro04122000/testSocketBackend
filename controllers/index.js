import userAdminController from "./AdminControllers/userAdminController.js";
import contactAdminController from './AdminControllers/contactAdminController.js';
import assignmentAdminController from "./AdminControllers/assignmentAdminController.js";
import userMobile from './MobileControllers/userMobileController.js';


// admin page
export const userAdmin = userAdminController;
export const contactAdmin = contactAdminController;
export const assignmentAdmin = assignmentAdminController;
// mobile
export const userMB = userMobile;