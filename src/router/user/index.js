import { Router } from "express";
import userController from "../../controller/user/index.js";
import userValidator from "../../validator/user/index.js";

const userRouter = Router();
userRouter.get("/user", userController.getall);
userRouter.get("/user/:userid", userController.getone);
userRouter.delete("/user", userController.deleteall);
userRouter.delete("/user/:userid", userController.delete);
userRouter.post("/user", userValidator.create, userController.create);
userRouter.put("/user/:userid", userValidator.update, userController.update);

export default userRouter;
