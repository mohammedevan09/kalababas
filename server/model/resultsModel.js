import mongoose from 'mongoose'

const ResultsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      public_id: String,
      url: String,
      asset_id: String,
    },
  },
  {
    timestamps: true,
  }
)

const Results = mongoose.model('Results', ResultsSchema)
export default Results
