import express from "express";
import multer from "multer";
import upload from "../middlewares/multer.js";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-profile", authUser, getProfile);
userRouter.post(
  "/update-profile",
  authUser,
  upload.single("image"),
  updateProfile
);

export default userRouter;
