import Question from "../models/Question.js";


// ADD QUESTION
export const addQuestion = async (req, res) => {
  try {
    const {
      quizId,
      question,
      options,
      correctAnswer,
    } = req.body;

    const newQuestion = await Question.create({
      quizId,
      question,
      options,
      correctAnswer,
    });

    res.status(201).json({
      message: "Question added successfully",
      newQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// GET QUESTIONS BY QUIZ
export const getQuestionsByQuiz = async (req, res) => {
  try {
    const questions = await Question.find({
      quizId: req.params.quizId,
    });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};