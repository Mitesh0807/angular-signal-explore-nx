import userRouter from "./user.router";
import ProjecrRouter from "./project.route";
import { Router } from "express";
const router = Router();
router.use("/user", userRouter);
router.use("/project", ProjecrRouter);
export default router;

