const questionsModel = require('../models/quizzes/quizzes-model.js')

const findQuestionById = (qid) => quizzesModel.findById(qid)
const findAllQuestions = () => questionsModel.find()
const findQuestionsForQuiz = (quizId) => questionsModel.findById(quizId)
module.exports = { findAllQuestions, findQuestionsForQuiz, findQuestionById }