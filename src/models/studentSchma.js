import mongoose from "mongoose";
import validator from "validator";

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        enrolementNumber: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);