import mongoose from 'mongoose';

export const connectionWithMongo = mongoose
  .connect(
    `mongodb+srv://raul233:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_INITDB_CLUSTER_NAME}/?retryWrites=true&w=majority`,
    {
      minPoolSize: 1,
      maxPoolSize: 20,
      socketTimeoutMS: 60000,
      serverSelectionTimeoutMS: 60000,
      loggerLevel: 'error',
    }
  )
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err: any) => {
    console.log(`Connection Failed. error${err.message}`);
  });
