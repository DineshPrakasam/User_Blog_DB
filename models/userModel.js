import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  dob: {
    type: Date,
  },
  phoneNumber: {
    type: String,
  },
  assembly: {
    type: String,
  },
  role: {
    type: String,
  },
});

userSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

userSchema.set("autoIndex", true);

const user = model("User", userSchema);

export default user;
