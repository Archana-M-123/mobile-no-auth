// import { model, Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';

// export interface IUser extends Document {
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   active: boolean;
//   verified: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

export const User = mongoose.model('mobileAuth', UserSchema);


