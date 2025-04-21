import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    user: { type: String, ref: "UserModel" },
    quiz: { type: String, ref: "QuizzesModel" },
    attemptNumber: Number,
    totalScore: Number,
    maxScore: Number,
    timeTaken: String,
    answers: [
      {
        question: { type: String, ref: "QuestionModel" },
        answer: mongoose.Schema.Types.Mixed,
        pointsEarned: Number,
      },
    ],
  },
  { collection: "quizAttempt" }
);
export default schema;
