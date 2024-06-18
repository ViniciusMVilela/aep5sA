import { Schema, mongoose } from '../../node_modules/mongodb';
import { IUser } from '../types/userType';

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default mongoose.model<IUser>('User', UserSchema);
