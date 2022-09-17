import express from "express";
import {
  addUser,
  getUser,
  getUsers,
  editUser,
  deleteUser,
} from "../controller/usercontroller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUser);
router.post("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
