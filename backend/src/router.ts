import { Router } from "express";
import { UsersController } from "@/controllers/UsersController";
import { AuthController } from "@/controllers/AuthController";

export const router: Router = Router();

router.get("/users", UsersController.fetchAll);

router.post("/signin", AuthController.signin);
router.post("/signup", AuthController.signup);
