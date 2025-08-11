import mongoose from "mongoose";

const consultancyFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  service: { type: String, required: true },
}, { timestamps: true });

const consultancyModel = mongoose.models.consultancy || mongoose.model("consultancy", consultancyFormSchema);
export default consultancyModel;
