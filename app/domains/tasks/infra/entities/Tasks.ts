import mongoose, { Document, Schema } from 'mongoose';

type ITaskDocument = Document & {
  title: string;
  description: string;
  priority: number;
  status: 'pending' | 'in-progress' | 'done';
  members?: string[];
  tags: string[];
  startedAt: Date;
  finishedAt: Date;
};

const taskSchema = new Schema<ITaskDocument>(
  {
    title: { type: String, required: true },
    description: String,
    priority: { type: Number, required: true, min: 1, max: 8 },
    status: { type: String, required: true },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    tags: [String],
    startedAt: Date,
    finishedAt: Date,
  },
  {
    timestamps: true,
    collection: 'tasks',
  }
);

const Task = mongoose.model<ITaskDocument>('task', taskSchema);

export { Task };
