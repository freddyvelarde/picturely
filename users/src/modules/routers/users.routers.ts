import { Router } from "express";
import { createNewUsers, getAllUsers } from "../controllers/users.controllers";
const router = Router();

router.get("/all", getAllUsers);
router.get("/create", createNewUsers);

export default router;
