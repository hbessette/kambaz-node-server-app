import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    published: Boolean,
    course: { type: String, ref: "CourseModel" },
    quizType: String,
    points: Number,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Boolean,
    timeLimitAmount: Number,
    multipleAttempts: Boolean,
    howManyAttempts: Number,
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    dueDate: String,
    availableDate: String,
    untilDate: String,
  },
  { collection: "quizzes" }
);
export default schema;
