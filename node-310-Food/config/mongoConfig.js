const PASSWORD = "12341234";
const mongoURL = `mongodb+srv://rlaeldud9502:${PASSWORD}@cluster0.9a2tt1b.mongodb.net/?retryWrites=true&w=majority`;

import mongoose from "mongoose";
const Schema = mongoose.Schema;
const foodSchema = Schema({
  d_id: String,
  d_date: String,
  d_food: String,
  d_qty: Number,
  d_cal: Number,
});
const food_model = mongoose.model("food", foodSchema);
export { mongoURL, food_model };
