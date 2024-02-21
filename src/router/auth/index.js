import { Router } from "express";
import authController from "../../controller/auth/index.js";

const authRouter = Router();

authRouter.post("/login", authController.login);
export default authRouter;
