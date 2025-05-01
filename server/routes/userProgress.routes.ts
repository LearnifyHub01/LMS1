import express from "express";
import { updateVideoProgress, getUserCourseProgress, getOverallProgress,markCertificateDownloaded } from "../controllers/userProgress.controller";
import {authorizeRoles, isAuthenticated} from '../middleware/auth'

const userProgress = express.Router();

userProgress.post("/update", isAuthenticated, updateVideoProgress);
userProgress.get("/getProgress/:courseId", isAuthenticated, getUserCourseProgress);
userProgress.get("/overall", isAuthenticated, getOverallProgress);
userProgress.post("/certificate",isAuthenticated,markCertificateDownloaded)

export default userProgress;
