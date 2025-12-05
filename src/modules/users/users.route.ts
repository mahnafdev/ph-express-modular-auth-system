import { Router } from "express";
import { usersController } from "./users.controller";

//* Router declaration
const router = Router();

//* POST /users/signup
router.post("/signup", usersController.createUser);

export const usersRoute = router;
