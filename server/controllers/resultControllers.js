import Result from "../models/Result.js";
import Question from "../models/Question.js";
import Quiz from "../models/Quiz.js";


// SUBMIT QUIZ
export const submitQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;

    // Get quiz details
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found",
      });
    }

    // Get all questions of the quiz
    const questions = await Question.find({ quizId });

    let score = 0;

    // Compare answers
    questions.forEach((question) => {
      const userAnswer = answers[question._id];

      if (userAnswer === question.correctAnswer) {
        score++;
      }
    });

    // Save result in database
    const result = await Result.create({
      userId: req.user._id,
      quizId,
      score,
      totalQuestions: questions.length,
    });

    // Send response to frontend
    res.status(200).json({
      message: "Quiz submitted successfully",
      quizTitle: quiz.title,
      score,
      totalQuestions: questions.length,
      result,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// GET USER RESULTS
export const getUserResults = async (req, res) => {
  try {

    const results = await Result.find({
      userId: req.user._id,
    }).populate("quizId", "title");

    res.status(200).json(results);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};