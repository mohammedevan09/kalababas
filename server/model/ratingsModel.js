import mongoose from 'mongoose'

const RatingsSchema = new mongoose.Schema(
  {
    star: { type: Number, require: true },
    comment: { type: String, require: true, maxlength: 120 },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    image: String,
  },
  {
    timestamps: true,
  }
)

const Ratings = mongoose.model('Ratings', RatingsSchema)
export default Ratings
