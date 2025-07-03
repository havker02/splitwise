import mongoose, {Schema, Document} from "mongoose";

interface IHisab extends Document{
  name: string
  amount: number
  date: Date
  description?: string
}

const hisabSchema = new Schema<IHisab>({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  description: {
    type: String,
  },
}, {timestamps: true});

const Hisab = mongoose.models.Hisab || mongoose.model<IHisab>("Hisab", hisabSchema)

export default Hisab