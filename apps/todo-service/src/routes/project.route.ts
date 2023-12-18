import * as ProjectController from "../controller/project.controller";
import { Router } from "express";
const router = Router();

router.get("/:id", ProjectController.findProject);
router.get("/", ProjectController.getAllProject);
router.post("/", ProjectController.createProject);
router.put("/:id", ProjectController.updateProject);
router.delete("/:id", ProjectController.deleteProject);

export default router;
