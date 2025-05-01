// import mongoose, { Document, Schema, Model, Types } from "mongoose";

// interface IVideoProgress {
//     videoId: Types.ObjectId;  
//     //watchedDuration: number; 
//     isCompleted: boolean;     
// }

// interface IUserProgress extends Document {
//     userId: Types.ObjectId;  
//     courseId: Types.ObjectId;  
//     videos: IVideoProgress[];  
//     progressPercentage: number; 
// }

// const videoProgressSchema = new Schema<IVideoProgress>({
//     videoId: { type: Schema.Types.ObjectId, required: true, ref: "CourseData" },
//     //watchedDuration: { type: Number, default: 0 },
//     isCompleted: { type: Boolean, default: false },
// });

// const userProgressSchema = new Schema<IUserProgress>({
//     userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
//     courseId: { type: Schema.Types.ObjectId, required: true, ref: "Course" },
//     videos: [videoProgressSchema],
//     progressPercentage: { type: Number, default: 0 },
// }, { timestamps: true });

// const UserProgressModel: Model<IUserProgress> = mongoose.model("UserProgress", userProgressSchema);
// export default UserProgressModel;




import mongoose, { Document, Schema, Model, Types } from "mongoose";

interface IVideoProgress {
    videoId: Types.ObjectId;  
    isCompleted: boolean;     
}

interface IUserProgress extends Document {
    userId: Types.ObjectId;  
    courseId: Types.ObjectId;  
    videos: IVideoProgress[];  
    progressPercentage: number; 
    certificateDownloaded: boolean;  // ✅ new field
}

const videoProgressSchema = new Schema<IVideoProgress>({
    videoId: { type: Schema.Types.ObjectId, required: true, ref: "CourseData" },
    isCompleted: { type: Boolean, default: false },
});

const userProgressSchema = new Schema<IUserProgress>({
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    courseId: { type: Schema.Types.ObjectId, required: true, ref: "Course" },
    videos: [videoProgressSchema],
    progressPercentage: { type: Number, default: 0 },
    certificateDownloaded: { type: Boolean, default: false }, // ✅ added here
}, { timestamps: true });

const UserProgressModel: Model<IUserProgress> = mongoose.model("UserProgress", userProgressSchema);
export default UserProgressModel;
