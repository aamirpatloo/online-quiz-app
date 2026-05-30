import Quiz from "../models/Quiz.js";


// CREATE QUIZ
export const createQuiz = async (req, res) => {
  try {
    const { title, description } = req.body;

    const quiz = await Quiz.create({
      title,
      description,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Quiz created successfully",
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// GET ALL QUIZZES
export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate(
      "createdBy",
      "name email"
    );

    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// GET SINGLE QUIZ
export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found",
      });
    }

    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// UPDATE QUIZ
export const updateQuiz = async (req, res) => {
  try {
    const { title, description } = req.body;

    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Quiz updated successfully",
      updatedQuiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// DELETE QUIZ
export const deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Quiz deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};