import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    user: { type: String, ref: "UserModel" },
    quiz: { type: String, ref: "QuizzesModel" },
    lastAttempt: String,
    attemptNumber: Number,
    totalScore: Number,
    maxScore: Number,
    answers: [
      {
        question: { type: String, ref: "QuestionModel" },
        answer: mongoose.Schema.Types.Mixed,
        pointsEarned: Number,
        maxPoints: Number
      },
    ],
  },
  { collection: "quizAttempt" }
);
export default schema;
