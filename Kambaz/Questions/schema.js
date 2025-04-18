import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
        _id: String,
        title: String,
        points: Number,
        question: String,
        quiz: { type: String, ref: "QuizzesModel"}
  },
  { discriminatorKey: "questionType", collection: "questions" }
);
export default schema;

