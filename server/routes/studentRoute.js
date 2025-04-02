import express from "express";
import StudentController from "../controllers/studentController.js";
const router=express.Router();


router.post("/addstudentallques",StudentController.addStudentAllQues);
router.post("/getstudentallques",StudentController.getStudentAllQues);
router.delete("/deletestuhistory/:stu_id",StudentController.deleteStuHistory);
router.get("/getallstudentallques",StudentController.getAllStudentAllQues);

export default router;