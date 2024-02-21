import { Router } from "express";
import userRouter from "./user/index.js";
import postRouter from "./post/index.js";
import commentRouter from "./comment/index.js";
import authRouter from "./auth/index.js";

const allRouter = Router();
allRouter.use(userRouter);
allRouter.use(postRouter);
allRouter.use(commentRouter);
allRouter.use(authRouter);
export default allRouter;
