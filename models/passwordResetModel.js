import mongoose from "mongoose";

const passwordResetSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    email: { type: String, required: true },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 1800 } // 30 minutes expiry
});

const passwordResetModel = mongoose.models.passwordReset || mongoose.model("passwordReset", passwordResetSchema);
export default passwordResetModel;