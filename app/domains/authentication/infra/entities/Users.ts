import bcrypt from 'bcrypt';
import mongoose, { Document, Schema } from 'mongoose';

type IUserDocument = Document & {
  name: string;
  email: string;
  password: string;
  role: ['admin' | 'user'];
};

export const usersSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    role: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    collection: 'tasks',
  }
);
usersSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;

  next();
});

export const User = mongoose.model<IUserDocument>('user', usersSchema);
