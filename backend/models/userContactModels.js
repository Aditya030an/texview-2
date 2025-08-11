import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      default: "",
    },

    service: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { minimize: false }
);

const contactModel = mongoose.models.contact || mongoose.model("contact", contactSchema);

export default contactModel;
