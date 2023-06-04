import mongoose from "mongoose";

export const  connectDB =  (url) => {
    if (!url)
        throw new Error(
            "Please provide database connection string"
        );
    else {
        console.log("Mongo database connected successfully!");
    }

    return mongoose.connect(url);
};
