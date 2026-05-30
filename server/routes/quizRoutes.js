import express from "express";

import {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} from "../controllers/quizControllers.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();


// CREATE QUIZ
router.post(
  "/create",
  protect,
  adminOnly,
  createQuiz
);


// GET ALL QUIZZES
router.get("/", getAllQuizzes);


// GET SINGLE QUIZ
router.get("/:id", getQuizById);


// UPDATE QUIZ
router.put(
  "/:id",
  protect,
  adminOnly,
  updateQuiz
);


// DELETE QUIZ
router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteQuiz
);

export default router;