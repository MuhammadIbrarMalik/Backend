import { Router } from "express";
import postController from "../../controller/post/index.js";
import postValidator from "../../validator/post/index.js";

const postRouter = Router();
postRouter.get("/post", postController.getall);
postRouter.get("/post/:postid", postController.getone);
postRouter.post("/post", postValidator.create, postController.create);
postRouter.put("/post/:postid", postValidator.update, postController.update);

export default postRouter;
