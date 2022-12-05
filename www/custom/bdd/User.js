import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    nombreHuesped: { type: String, required: true, trim: true, index: { unique: true }, minLength: 6 },
    habitacionHuesped: { type: String, required: true, trim: true },
    contraseñaHuesped: { type: String, required: true, trim: true, minLength: 6 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
