import { Router } from "express";

const routes = Router();

routes.get("/", () => console.log("teste"));

export { routes };
