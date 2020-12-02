const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema({
   qid: String,
   question: String,
   options: [String],
   quizId: String
}, {collection: 'questions'})
module.exports = questionsSchema