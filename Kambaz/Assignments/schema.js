import mongoose from "mongoose";
const assignmentsSchema = new mongoose.Schema(
  {
        _id: String,
        title: String,
        description: String,
        points: Number,
        dueDate: String,
        availableFrom: String,
        availableUntil: String,
        course: {type: String, ref: "CourseModel"}
  },
  { collection: "assignments" }
);
export default assignmentsSchema;
