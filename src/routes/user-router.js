import { Router } from "express";
import { UserController } from "../controllers/user-controller.js";

export class UserRouter {
  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.loadRoutes();
  }

  loadRoutes() {
    this.router.post("/sign-up", this.userController.signUp);
  }
}
