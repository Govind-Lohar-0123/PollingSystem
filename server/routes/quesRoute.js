import express from "express";
import QuestionsController from "../controllers/QuestionsController.js";
const router=express.Router();


router.get("/getallques",QuestionsController.getAllQuestions);
router.get("/getoneques/:qNum",QuestionsController.getOneQuestions);

export default router;