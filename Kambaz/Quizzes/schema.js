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
        shuffleAnswers: String,
        timeLimit: Number,
        multipleAttempts: Boolean,
        howManyAttempts: Number,
        showCorrectAnswers: String,
        accessCode: String,
        oneQuestionAtATime: Boolean,
        webcamRequired: Boolean,
        lockQuestionsAFterAnswering: Boolean,
        dueDate: String,
        availableDate: String,
        untilDate: String
  },
  { collection: "quizzes" }
);
export default schema;
