const USERNAME = "rlaeldud9502";
const PASSWORD = "12341234";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.9a2tt1b.mongodb.net/?retryWrites=true&w=majority`;

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  f_date: String,
  f_food: String,
  f_eat: Number,
  f_cal: String,
  f_scal: String,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
