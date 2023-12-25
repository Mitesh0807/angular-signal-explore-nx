import { Request, Response } from "express";
import { myDataSource } from "../comman/database";
import { TProject, Project } from "../entity/Project.entity";
import asyncErorHandler from "express-async-handler";
import { User } from "../entity/User.entity";
export const createProject = asyncErorHandler(
  async (req: Request, res: Response): Promise<void> => {
    const project = new Project();
    project.project_name = req.body.project_name;
    const user = await myDataSource.getRepository(User).findOneBy({ id: Number(req.body.user_id) });
    project.user_id = user;
    const result = myDataSource.getRepository(Project).create({
      project_name: req.body.project_name,
      user_id: user
    });
    // const result = myDataSource.getRepository(Project).save(project);
    res.send(result);
  }
);

export const findProject = asyncErorHandler(async (req: Request, res: Response): Promise<void> => {
  const project_id = req.params.id;
  if (!project_id) {
    res.send("project_id is required");
    return;
  }
  let project_num = Number(project_id);
  const result = await myDataSource
    .getRepository(Project)
    .findOneBy({ project_id: project_num })
  res.send(result);
});


export const getAllProject = asyncErorHandler(async (req: Request, res: Response): Promise<void> => {
  const result = await myDataSource
    .getRepository(Project)
    .find();
  res.send(result);
});

export const updateProject = asyncErorHandler(async (req: Request, res: Response): Promise<void> => {
  const project_id = req.params.id;
  if (!project_id) {
    res.send("project_id is required");
    return;
  }
  let project_num = Number(project_id);
  const result = await myDataSource
    .getRepository(Project)
    .update({ project_id: project_num }, req.body);
  res.send(result);
});

export const deleteProject = asyncErorHandler(async (req: Request, res: Response): Promise<void> => {
  const project_id = req.params.id;
  if (!project_id) {
    res.send("project_id is required");
    return;
  }
  let project_num = Number(project_id);
  const result = await myDataSource
    .getRepository(Project)
    .delete({ project_id: project_num });
  res.send(result);
});


