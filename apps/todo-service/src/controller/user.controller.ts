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
    user.isActive = true;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.deletedAt = new Date();
    const result = myDataSource.getRepository(User).save(user);
    res.send(result);
  }
)

export const findUser = asyncErorHandler(async (req: Request, res: Response): Promise<void> => {
  const user_id = req.params.id;
  if (!user_id) {
    res.send("user_id is required");
    return;
  }
  let user_num = Number(user_id);
  console.log(user_num);
  const result = await myDataSource
    .getRepository(User)
    .findOneBy({ id: user_num });
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
  console.log("why ");
  const result = await myDataSource
    .getRepository(User)
    .find();
  res.send(result);
});
