import express from "express";

import {
  addQuestion,
  getQuestionsByQuiz,
} from "../controllers/questionController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();


// ADD QUESTION
router.post(
  "/add",
  protect,
  adminOnly,
  addQuestion
);


// GET QUESTIONS OF QUIZ
router.get("/:quizId", getQuestionsByQuiz);

export default router;