import mongoose, { Model } from 'mongoose';

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      description: 'name of this QRCode',
      required: true,
      index: true,
      trim: true,
    },
  },
  {
    collection: 'User',
    timestamps: true,
  },
);

export interface IUser extends Document {
  name: string;
}

const UserModel: Model<IUser> = mongoose.model('User', Schema);

export default UserModel;
