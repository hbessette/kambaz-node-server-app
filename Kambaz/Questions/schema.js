import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    points: Number,
    question: String,
    questionType: String,
    quiz: { type: String, ref: "QuizzesModel" },
    choices: [String],
    correctAnswer: String,
    correctAnswers: [String]
  },
  { collection: "questions" }
);
export default schema;
