import { Router } from "express";
import { getAllUsers } from "../controllers/users.controllers";
const router = Router();

router.get("/all", getAllUsers);

export default router;
