import express from "express";

import {
  submitQuiz,
  getUserResults,
} from "../controllers/resultControllers.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


// SUBMIT QUIZ
router.post(
  "/submit",
  protect,
  submitQuiz
);


// GET USER RESULTS
router.get(
  "/my-results",
  protect,
  getUserResults
);

export default router;