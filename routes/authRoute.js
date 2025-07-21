import express from 'express';
import { forgotPassword, verifyResetToken, resetPassword, googleAuth } from '../controllers/authController.js';

const authRouter = express.Router();

// Password reset routes
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/verify-reset-token", verifyResetToken);
authRouter.post("/reset-password", resetPassword);

// Google authentication route
authRouter.post("/google", googleAuth);

export default authRouter;