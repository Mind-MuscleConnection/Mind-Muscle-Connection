const { Schema, Mongoose } = require("mongoose");

const templateSchema = new Schema({
  user_id: {type: Mongoose.Schema.Types.ObjectId, ref: 'User'},
  planName: String,
  numberOfDays: Number,
  type: String,
  day1: {
  exerciseName: String,
  set1goal: Number,
  set1reps: Number,
  set1weight: Number,
  set2goal: Number,
  set2reps: Number,
  set2weight: Number,
  set3goal: Number,
  set3reps: Number,
  set3weight: Number
  },
  day2: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day3: {
  exerciseName: String,
  set1goal: Number,
  set1reps: Number,
  set1weight: Number,
  set2goal: Number,
  set2reps: Number,
  set2weight: Number,
  set3goal: Number,
  set3reps: Number,
  set3weight: Number
  },
  day4: {
  exerciseName: String,
  set1goal: Number,
  set1reps: Number,
  set1weight: Number,
  set2goal: Number,
  set2reps: Number,
  set2weight: Number,
  set3goal: Number,
  set3reps: Number,
  set3weight: Number
  },
  day5: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day6: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day7: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day8: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day9: {
  exerciseName: String,
  set1goal: Number,
  set1reps: Number,
  set1weight: Number,
  set2goal: Number,
  set2reps: Number,
  set2weight: Number,
  set3goal: Number,
  set3reps: Number,
  set3weight: Number
  },
day10: {
  exerciseName: String,
  set1goal: Number,
  set1reps: Number,
  set1weight: Number,
  set2goal: Number,
  set2reps: Number,
  set2weight: Number,
  set3goal: Number,
  set3reps: Number,
  set3weight: Number
  },
  day11: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day12: {
  exerciseName: String,
  set1goal: Number,
  set1reps: Number,
  set1weight: Number,
  set2goal: Number,
  set2reps: Number,
  set2weight: Number,
  set3goal: Number,
  set3reps: Number,
  set3weight: Number
  },
  day13: {
  exerciseName: String,
  set1goal: Number,
  set1reps: Number,
  set1weight: Number,
  set2goal: Number,
  set2reps: Number,
  set2weight: Number,
  set3goal: Number,
  set3reps: Number,
  set3weight: Number
  },
  day14: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day15: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day16: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day17: {
    exerciseName: String,
    set1goal: Number,
    set1reps: Number,
    set1weight: Number,
    set2goal: Number,
    set2reps: Number,
    set2weight: Number,
    set3goal: Number,
    set3reps: Number,
    set3weight: Number
  },
  day18: {
  exerciseName: String,
  set1goal: Number,
  set1reps: Number,
  set1weight: Number,
  set2goal: Number,
  set2reps: Number,
  set2weight: Number,
  set3goal: Number,
  set3reps: Number,
  set3weight: Number
  }
})