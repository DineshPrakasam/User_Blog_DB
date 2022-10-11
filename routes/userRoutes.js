import {Router} from 'express'
const router = Router();
import { createUser, getAllUsers } from '../controller/userController.js';



router.route("/create").post(createUser);
router.route("/get").get(getAllUsers);

export default router;