import express from "express";

import allRouter from "./router/index.js";
import { connectDb } from "./Database/configuration.js";
import syncDb from "./Database/init.js";

const app = express();
app.listen(3000, () => console.log("Server has started"));
app.use(express.json());
app.use(allRouter);
connectDb();
syncDb().then(() => console.log("Database has been synced"));
