import { Request, Response } from "express";
import { myDataSource } from "../comman/database";
import { TUser, User } from "../entity/User.entity";
// import { asyncErorHandler } from "../comman/util/error-handler";
import asyncErorHandler from "express-async-handler";
export const createUser = asyncErorHandler(
  async (req: Request, res: Response): Promise<void> => {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    const result = myDataSource.getRepository(User).save(user);
    res.send(result);
  }
);

export const findUser = asyncErorHandler(async (req: Request, res: Response): Promise<void> => {
  const user_id = req.params.id;
  if (!user_id) {
    res.send("user_id is required");
    return;
  }
  let user_num = Number(user_id);
  const result = await myDataSource
    .getRepository(User)
    .find({ where: { id: user_num }, relations: { projects: true } });
  res.send(result);
});

export const updateUser = asyncErorHandler(async (req: Request, res: Response): Promise<void> => {
  const user_id = req.params.id;
  if (!user_id) {
    res.send("user_id is required");
    return;
  }
  let user_num = Number(user_id);
  const result = await myDataSource
    .getRepository(User)
    .update({ id: user_num }, req.body);
  res.send(result);
});
export const getAllUser = asyncErorHandler(async (req: Request, res: Response): Promise<void> => {
  const result = await myDataSource
    .getRepository(User)
    .find();
  res.send(result);
});
