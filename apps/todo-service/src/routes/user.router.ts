import { Router } from "express";
import * as userController from "../controller/user.controller";
const router = Router();

router.get("/:id", userController.findUser);
router.get("/", userController.getAllUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
export default router;

