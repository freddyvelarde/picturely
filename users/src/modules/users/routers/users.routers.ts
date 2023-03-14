import { Router } from "express";
import upload from "../../../middlewares/multer";
import { createNewUsers, getAllUsers } from "../controllers/users.controllers";
const router = Router();

router.get("/all", getAllUsers);
router.post("/create", upload.single("avatar"), createNewUsers);

export default router;
