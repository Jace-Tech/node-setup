import mongoose from "mongoose";

interface IUser {
  firstname: string;
  lastname: string;
  middleName: string;
  email: string;
  address: string;
  dob: mongoose.Schema.Types.Date;
  phone: string;
  gender: string | null;
  imageUrl: string | null;
  password: string;
  isActive: boolean;
  isVerified: boolean;
  role: string;
}

interface INotification {
  user: mongoose.Schema.Types.ObjectId;
  message: string;
  title?: string;
  link?: string;
  isRead?: boolean;
}