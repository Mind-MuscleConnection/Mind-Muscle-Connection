const mongoose = require("mongoose");
const Template = require("../models/Template");
require("dotenv").config();

const templates = [
  {
    planName: "Push-Pull-Leg",
    ref: true,
    type: "gym",
    numberOfDays: 3,
    day1: [
      {
        name: "Deadlift",
        set1goal: 5,
        d1ex1set1reps: 0,
        d1ex1set1weight: 0,
        set2goal: 8,
        d1ex1set2reps: 0,
        d1ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d1ex2set1reps: 0,
        d1ex2set1weight: 0,
        set2goal: 12,
        d1ex2set2reps: 0,
        d1ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d1ex3set1reps: 0,
        d1ex3set1weight: 0,
        set2goal: 12,
        d1ex3set2reps: 0,
        d1ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d1ex4set1reps: 0,
        d1ex4set1weight: 0,
        set2goal: 12,
        d1ex4set2reps: 0,
        d1ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d1ex5set1reps: 0,
        d1ex5set1weight: 0,
        set2goal: 12,
        d1ex5set2reps: 0,
        d1ex5set2weight: 0,
        set3goal: 12,
        d1ex5set3reps: 0,
        d1ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d1ex6set1reps: 0,
        d1ex6set1weight: 0,
        set2goal: 12,
        d1ex6set2reps: 0,
        d1ex6set2weight: 0,
      },
    ],
    day2: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d2ex1set1reps: 0,
        d2ex1set1weight: 0,
        set2goal: 12,
        d2ex1set2reps: 0,
        d2ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d2ex2set1reps: 0,
        d2ex2set1weight: 0,
        set2goal: 12,
        d2ex2set2reps: 0,
        d2ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d2ex3set1reps: 0,
        d2ex3set1weight: 0,
        set2goal: 12,
        d2ex3set2reps: 0,
        d2ex3set2weight: 0,
        set3goal: 12,
        d2ex3set3reps: 0,
        d2ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d2ex4set1reps: 0,
        d2ex4set1weight: 0,
        set2goal: 12,
        d2ex4set2reps: 0,
        d2ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d2ex5set1reps: 0,
        d2ex5set1weight: 0,
        set2goal: 12,
        d2ex5set2reps: 0,
        d2ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d2ex6set1reps: 0,
        d2ex6set1weight: 0,
        set2goal: 12,
        d2ex6set2reps: 0,
        d2ex6set2weight: 0,
        set3goal: 12,
        d2ex6set3reps: 0,
        d2ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d2ex7set1reps: 0,
        d2ex7set1weight: 0,
        set2goal: 12,
        d2ex7set2reps: 0,
        d2ex7set2weight: 0,
      },
    ],
    day3: [
      {
        name: "Front squat",
        set1goal: 8,
        d3ex1set1reps: 0,
        d3ex1set1weight: 0,
        set2goal: 12,
        d3ex1set2reps: 0,
        d3ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d3ex2set1reps: 0,
        d3ex2set1weight: 0,
        set2goal: 12,
        d3ex2set2reps: 0,
        d3ex2set2weight: 0,
        set3goal: 12,
        d3ex2set3reps: 0,
        d3ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d3ex3set1reps: 0,
        d3ex3set1weight: 0,
        set2goal: 12,
        d3ex3set2reps: 0,
        d3ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d3ex4set1reps: 0,
        d3ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d3ex5set1reps: 0,
        d3ex5set1weight: 0,
        set2goal: 20,
        d3ex5set2reps: 0,
        d3ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d3ex6set1reps: 0,
        d3ex6set1weight: 0,
        set2goal: 15,
        d3ex6set2reps: 0,
        d3ex6set2weight: 0,
      },
    ],
    day4: [
      {
        name: "Deadlift",
        set1goal: 5,
        d4ex1set1reps: 0,
        d4ex1set1weight: 0,
        set2goal: 8,
        d4ex1set2reps: 0,
        d4ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d4ex2set1reps: 0,
        d4ex2set1weight: 0,
        set2goal: 12,
        d4ex2set2reps: 0,
        d4ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d4ex3set1reps: 0,
        d4ex3set1weight: 0,
        set2goal: 12,
        d4ex3set2reps: 0,
        d4ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d4ex4set1reps: 0,
        d4ex4set1weight: 0,
        set2goal: 12,
        d4ex4set2reps: 0,
        d4ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d4ex5set1reps: 0,
        d4ex5set1weight: 0,
        set2goal: 12,
        d4ex5set2reps: 0,
        d4ex5set2weight: 0,
        set3goal: 12,
        d4ex5set3reps: 0,
        d4ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d4ex6set1reps: 0,
        d4ex6set1weight: 0,
        set2goal: 12,
        d4ex6set2reps: 0,
        d4ex6set2weight: 0,
      },
    ],
    day5: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d5ex1set1reps: 0,
        d5ex1set1weight: 0,
        set2goal: 12,
        d5ex1set2reps: 0,
        d5ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d5ex2set1reps: 0,
        d5ex2set1weight: 0,
        set2goal: 12,
        d5ex2set2reps: 0,
        d5ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d5ex3set1reps: 0,
        d5ex3set1weight: 0,
        set2goal: 12,
        d5ex3set2reps: 0,
        d5ex3set2weight: 0,
        set3goal: 12,
        d5ex3set3reps: 0,
        d5ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d5ex4set1reps: 0,
        d5ex4set1weight: 0,
        set2goal: 12,
        d5ex4set2reps: 0,
        d5ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d5ex5set1reps: 0,
        d5ex5set1weight: 0,
        set2goal: 12,
        d5ex5set2reps: 0,
        d5ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d5ex6set1reps: 0,
        d5ex6set1weight: 0,
        set2goal: 12,
        d5ex6set2reps: 0,
        d5ex6set2weight: 0,
        set3goal: 12,
        d5ex6set3reps: 0,
        d5ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d5ex7set1reps: 0,
        d5ex7set1weight: 0,
        set2goal: 12,
        d5ex7set2reps: 0,
        d5ex7set2weight: 0,
      },
    ],
    day6: [
      {
        name: "Front squat",
        set1goal: 8,
        d6ex1set1reps: 0,
        d6ex1set1weight: 0,
        set2goal: 12,
        d6ex1set2reps: 0,
        d6ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d6ex2set1reps: 0,
        d6ex2set1weight: 0,
        set2goal: 12,
        d6ex2set2reps: 0,
        d6ex2set2weight: 0,
        set3goal: 12,
        d6ex2set3reps: 0,
        d6ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d6ex3set1reps: 0,
        d6ex3set1weight: 0,
        set2goal: 12,
        d6ex3set2reps: 0,
        d6ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d6ex4set1reps: 0,
        d6ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d6ex5set1reps: 0,
        d6ex5set1weight: 0,
        set2goal: 20,
        d6ex5set2reps: 0,
        d6ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d6ex6set1reps: 0,
        d6ex6set1weight: 0,
        set2goal: 15,
        d6ex6set2reps: 0,
        d6ex6set2weight: 0,
      },
    ],
    day7: [
      {
        name: "Deadlift",
        set1goal: 5,
        d7ex1set1reps: 0,
        d7ex1set1weight: 0,
        set2goal: 8,
        d7ex1set2reps: 0,
        d7ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d7ex2set1reps: 0,
        d7ex2set1weight: 0,
        set2goal: 12,
        d7ex2set2reps: 0,
        d7ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d7ex3set1reps: 0,
        d7ex3set1weight: 0,
        set2goal: 12,
        d7ex3set2reps: 0,
        d7ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d7ex4set1reps: 0,
        d7ex4set1weight: 0,
        set2goal: 12,
        d7ex4set2reps: 0,
        d7ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d7ex5set1reps: 0,
        d7ex5set1weight: 0,
        set2goal: 12,
        d7ex5set2reps: 0,
        d7ex5set2weight: 0,
        set3goal: 12,
        d7ex5set3reps: 0,
        d7ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d7ex6set1reps: 0,
        d7ex6set1weight: 0,
        set2goal: 12,
        d7ex6set2reps: 0,
        d7ex6set2weight: 0,
      },
    ],
    day8: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d8ex1set1reps: 0,
        d8ex1set1weight: 0,
        set2goal: 12,
        d8ex1set2reps: 0,
        d8ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d8ex2set1reps: 0,
        d8ex2set1weight: 0,
        set2goal: 12,
        d8ex2set2reps: 0,
        d8ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d8ex3set1reps: 0,
        d8ex3set1weight: 0,
        set2goal: 12,
        d8ex3set2reps: 0,
        d8ex3set2weight: 0,
        set3goal: 12,
        d8ex3set3reps: 0,
        d8ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d8ex4set1reps: 0,
        d8ex4set1weight: 0,
        set2goal: 12,
        d8ex4set2reps: 0,
        d8ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d8ex5set1reps: 0,
        d8ex5set1weight: 0,
        set2goal: 12,
        d8ex5set2reps: 0,
        d8ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d8ex6set1reps: 0,
        d8ex6set1weight: 0,
        set2goal: 12,
        d8ex6set2reps: 0,
        d8ex6set2weight: 0,
        set3goal: 12,
        d8ex6set3reps: 0,
        d8ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d8ex7set1reps: 0,
        d8ex7set1weight: 0,
        set2goal: 12,
        d8ex7set2reps: 0,
        d8ex7set2weight: 0,
      },
    ],
    day9: [
      {
        name: "Front squat",
        set1goal: 8,
        d9ex1set1reps: 0,
        d9ex1set1weight: 0,
        set2goal: 12,
        d9ex1set2reps: 0,
        d9ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d9ex2set1reps: 0,
        d9ex2set1weight: 0,
        set2goal: 12,
        d9ex2set2reps: 0,
        d9ex2set2weight: 0,
        set3goal: 12,
        d9ex2set3reps: 0,
        d9ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d9ex3set1reps: 0,
        d9ex3set1weight: 0,
        set2goal: 12,
        d9ex3set2reps: 0,
        d9ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d9ex4set1reps: 0,
        d9ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d9ex5set1reps: 0,
        d9ex5set1weight: 0,
        set2goal: 20,
        d9ex5set2reps: 0,
        d9ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d9ex6set1reps: 0,
        d9ex6set1weight: 0,
        set2goal: 15,
        d9ex6set2reps: 0,
        d9ex6set2weight: 0,
      },
    ],
  },
  {
    planName: "Push-Pull-Leg",
    ref: true,
    type: "gym",
    numberOfDays: 5,
    day1: [
      {
        name: "Deadlift",
        set1goal: 5,
        d1ex1set1reps: 0,
        d1ex1set1weight: 0,
        eset2goal: 8,
        d1ex1set2reps: 0,
        d1ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d1ex2set1reps: 0,
        d1ex2set1weight: 0,
        set2goal: 12,
        d1ex2set2reps: 0,
        d1ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d1ex3set1reps: 0,
        d1ex3set1weight: 0,
        set2goal: 12,
        d1ex3set2reps: 0,
        d1ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d1ex4set1reps: 0,
        d1ex4set1weight: 0,
        set2goal: 12,
        d1ex4set2reps: 0,
        d1ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d1ex5set1reps: 0,
        d1ex5set1weight: 0,
        set2goal: 12,
        d1ex5set2reps: 0,
        d1ex5set2weight: 0,
        set3goal: 12,
        d1ex5set3reps: 0,
        d1ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d1ex6set1reps: 0,
        d1ex6set1weight: 0,
        set2goal: 12,
        d1ex6set2reps: 0,
        d1ex6set2weight: 0,
      },
    ],
    day2: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d2ex1set1reps: 0,
        d2ex1set1weight: 0,
        set2goal: 12,
        d2ex1set2reps: 0,
        d2ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d2ex2set1reps: 0,
        d2ex2set1weight: 0,
        set2goal: 12,
        d2ex2set2reps: 0,
        d2ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d2ex3set1reps: 0,
        d2ex3set1weight: 0,
        set2goal: 12,
        d2ex3set2reps: 0,
        d2ex3set2weight: 0,
        set3goal: 12,
        d2ex3set3reps: 0,
        d2ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d2ex4set1reps: 0,
        d2ex4set1weight: 0,
        set2goal: 12,
        d2ex4set2reps: 0,
        d2ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d2ex5set1reps: 0,
        d2ex5set1weight: 0,
        set2goal: 12,
        d2ex5set2reps: 0,
        d2ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d2ex6set1reps: 0,
        d2ex6set1weight: 0,
        set2goal: 12,
        d2ex6set2reps: 0,
        d2ex6set2weight: 0,
        set3goal: 12,
        d2ex6set3reps: 0,
        d2ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d2ex7set1reps: 0,
        d2ex7set1weight: 0,
        set2goal: 12,
        d2ex7set2reps: 0,
        d2ex7set2weight: 0,
      },
    ],
    day3: [
      {
        name: "Front squat",
        set1goal: 8,
        d3ex1set1reps: 0,
        d3ex1set1weight: 0,
        set2goal: 12,
        d3ex1set2reps: 0,
        d3ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d3ex2set1reps: 0,
        d3ex2set1weight: 0,
        set2goal: 12,
        d3ex2set2reps: 0,
        d3ex2set2weight: 0,
        set3goal: 12,
        d3ex2set3reps: 0,
        d3ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d3ex3set1reps: 0,
        d3ex3set1weight: 0,
        set2goal: 12,
        d3ex3set2reps: 0,
        d3ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d3ex4set1reps: 0,
        d3ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d3ex5set1reps: 0,
        d3ex5set1weight: 0,
        set2goal: 20,
        d3ex5set2reps: 0,
        d3ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d3ex6set1reps: 0,
        d3ex6set1weight: 0,
        set2goal: 15,
        d3ex6set2reps: 0,
        d3ex6set2weight: 0,
      },
    ],
    day4: [
      {
        name: "Deadlift",
        set1goal: 5,
        d4ex1set1reps: 0,
        d4ex1set1weight: 0,
        set2goal: 8,
        d4ex1set2reps: 0,
        d4ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d4ex2set1reps: 0,
        d4ex2set1weight: 0,
        set2goal: 12,
        d4ex2set2reps: 0,
        d4ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d4ex3set1reps: 0,
        d4ex3set1weight: 0,
        set2goal: 12,
        d4ex3set2reps: 0,
        d4ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d4ex4set1reps: 0,
        d4ex4set1weight: 0,
        set2goal: 12,
        d4ex4set2reps: 0,
        d4ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d4ex5set1reps: 0,
        d4ex5set1weight: 0,
        set2goal: 12,
        d4ex5set2reps: 0,
        d4ex5set2weight: 0,
        set3goal: 12,
        d4ex5set3reps: 0,
        d4ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d4ex6set1reps: 0,
        d4ex6set1weight: 0,
        set2goal: 12,
        d4ex6set2reps: 0,
        d4ex6set2weight: 0,
      },
    ],
    day5: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d5ex1set1reps: 0,
        d5ex1set1weight: 0,
        set2goal: 12,
        d5ex1set2reps: 0,
        d5ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d5ex2set1reps: 0,
        d5ex2set1weight: 0,
        set2goal: 12,
        d5ex2set2reps: 0,
        d5ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d5ex3set1reps: 0,
        d5ex3set1weight: 0,
        set2goal: 12,
        d5ex3set2reps: 0,
        d5ex3set2weight: 0,
        set3goal: 12,
        d5ex3set3reps: 0,
        d5ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d5ex4set1reps: 0,
        d5ex4set1weight: 0,
        set2goal: 12,
        d5ex4set2reps: 0,
        d5ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d5ex5set1reps: 0,
        d5ex5set1weight: 0,
        set2goal: 12,
        d5ex5set2reps: 0,
        d5ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d5ex6set1reps: 0,
        d5ex6set1weight: 0,
        set2goal: 12,
        d5ex6set2reps: 0,
        d5ex6set2weight: 0,
        set3goal: 12,
        d5ex6set3reps: 0,
        d5ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d5ex7set1reps: 0,
        d5ex7set1weight: 0,
        set2goal: 12,
        d5ex7set2reps: 0,
        d5ex7set2weight: 0,
      },
    ],
    day6: [
      {
        name: "Front squat",
        set1goal: 8,
        d6ex1set1reps: 0,
        d6ex1set1weight: 0,
        set2goal: 12,
        d6ex1set2reps: 0,
        d6ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d6ex2set1reps: 0,
        d6ex2set1weight: 0,
        set2goal: 12,
        d6ex2set2reps: 0,
        d6ex2set2weight: 0,
        set3goal: 12,
        d6ex2set3reps: 0,
        d6ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d6ex3set1reps: 0,
        d6ex3set1weight: 0,
        set2goal: 12,
        d6ex3set2reps: 0,
        d6ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d6ex4set1reps: 0,
        d6ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d6ex5set1reps: 0,
        d6ex5set1weight: 0,
        set2goal: 20,
        d6ex5set2reps: 0,
        d6ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d6ex6set1reps: 0,
        d6ex6set1weight: 0,
        set2goal: 15,
        d6ex6set2reps: 0,
        d6ex6set2weight: 0,
      },
    ],
    day7: [
      {
        name: "Deadlift",
        set1goal: 5,
        d7ex1set1reps: 0,
        d7ex1set1weight: 0,
        set2goal: 8,
        d7ex1set2reps: 0,
        d7ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d7ex2set1reps: 0,
        d7ex2set1weight: 0,
        set2goal: 12,
        d7ex2set2reps: 0,
        d7ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d7ex3set1reps: 0,
        d7ex3set1weight: 0,
        set2goal: 12,
        d7ex3set2reps: 0,
        d7ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d7ex4set1reps: 0,
        d7ex4set1weight: 0,
        set2goal: 12,
        d7ex4set2reps: 0,
        d7ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d7ex5set1reps: 0,
        d7ex5set1weight: 0,
        set2goal: 12,
        d7ex5set2reps: 0,
        d7ex5set2weight: 0,
        set3goal: 12,
        d7ex5set3reps: 0,
        d7ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d7ex6set1reps: 0,
        d7ex6set1weight: 0,
        set2goal: 12,
        d7ex6set2reps: 0,
        d7ex6set2weight: 0,
      },
    ],
    day8: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d8ex1set1reps: 0,
        d8ex1set1weight: 0,
        set2goal: 12,
        d8ex1set2reps: 0,
        d8ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d8ex2set1reps: 0,
        d8ex2set1weight: 0,
        set2goal: 12,
        d8ex2set2reps: 0,
        d8ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d8ex3set1reps: 0,
        d8ex3set1weight: 0,
        set2goal: 12,
        d8ex3set2reps: 0,
        d8ex3set2weight: 0,
        set3goal: 12,
        d8ex3set3reps: 0,
        d8ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d8ex4set1reps: 0,
        d8ex4set1weight: 0,
        set2goal: 12,
        d8ex4set2reps: 0,
        d8ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d8ex5set1reps: 0,
        d8ex5set1weight: 0,
        set2goal: 12,
        d8ex5set2reps: 0,
        d8ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d8ex6set1reps: 0,
        d8ex6set1weight: 0,
        set2goal: 12,
        d8ex6set2reps: 0,
        d8ex6set2weight: 0,
        set3goal: 12,
        d8ex6set3reps: 0,
        d8ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d8ex7set1reps: 0,
        d8ex7set1weight: 0,
        set2goal: 12,
        d8ex7set2reps: 0,
        d8ex7set2weight: 0,
      },
    ],
    day9: [
      {
        name: "Front squat",
        set1goal: 8,
        d9ex1set1reps: 0,
        d9ex1set1weight: 0,
        set2goal: 12,
        d9ex1set2reps: 0,
        d9ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d9ex2set1reps: 0,
        d9ex2set1weight: 0,
        set2goal: 12,
        d9ex2set2reps: 0,
        d9ex2set2weight: 0,
        set3goal: 12,
        d9ex2set3reps: 0,
        d9ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d9ex3set1reps: 0,
        d9ex3set1weight: 0,
        set2goal: 12,
        d9ex3set2reps: 0,
        d9ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d9ex4set1reps: 0,
        d9ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d9ex5set1reps: 0,
        d9ex5set1weight: 0,
        set2goal: 20,
        d9ex5set2reps: 0,
        d9ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d9ex6set1reps: 0,
        d9ex6set1weight: 0,
        set2goal: 15,
        d9ex6set2reps: 0,
        d9ex6set2weight: 0,
      },
    ],
    day10: [
      {
        name: "Bent over row",
        set1goal: 8,
        d10ex1set1reps: 0,
        d10ex1set1weight: 0,
        set2goal: 12,
        d10ex1set2reps: 0,
        d10ex1set2weight: 0,
      },
      {
        name: "T-Bar row",
        set1goal: 8,
        d10ex2set1reps: 0,
        d10ex1set1weight: 0,
        set2goal: 8,
        d10ex1set2reps: 0,
        d10ex1set2weight: 0,
      },
      {
        name: "Close grip chin-up",
        set1goal: 8,
        d10ex2set1reps: 0,
        d10ex2set1weight: 0,
        set2goal: 8,
        d10ex2set2reps: 0,
        d10ex2set2weight: 0,
        set3goal: 8,
        d10ex2set3reps: 0,
        d10ex2set3weight: 0,
      },
      {
        name: "Rack deadlift",
        set1goal: 5,
        d10ex3set1reps: 0,
        d10ex3set1weight: 0,
        set2goal: 8,
        d10ex3set2reps: 0,
        d10ex3set2weight: 0,
      },
      {
        name: "Barbell curls",
        set1goal: 12,
        d10ex4set1reps: 0,
        d10ex4set1weight: 0,
        set2goal: 12,
        d10ex4set2reps: 0,
        d10ex4set2weight: 0,
        set3goal: 12,
        d10ex4set3reps: 0,
        d10ex4set3weight: 0,
      },
      {
        name: "Reverse grip cable curls",
        set1goal: 12,
        d10ex5set1reps: 0,
        d10ex5set1weight: 0,
        set2goal: 12,
        d10ex5set2reps: 0,
        d10ex5set2weight: 0,
      },
    ],
    day11: [
      {
        name: "Declined bench press",
        set1goal: 8,
        d11ex1set1reps: 0,
        d11ex1set1weight: 0,
        set2goal: 12,
        d11ex1set2reps: 0,
        d11ex1set2weight: 0,
      },
      {
        name: "Inclined dumbbell press",
        set1goal: 12,
        d11ex2set1reps: 0,
        d11ex2set1weight: 0,
        set2goal: 12,
        d11ex2set2reps: 0,
        d11ex2set2weight: 0,
      },
      {
        name: "Flat machine press",
        set1goal: 12,
        d11ex3set1reps: 0,
        d11ex3set1weight: 0,
        set2goal: 12,
        d11ex3set2reps: 0,
        d11ex3set2weight: 0,
      },
      {
        name: "Seated Smith shoulder press",
        set1goal: 12,
        d11ex4set1reps: 0,
        d11ex4set1weight: 0,
        set2goal: 12,
        d11ex4set2reps: 0,
        d11ex4set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d11ex5set1reps: 0,
        d11ex5set1weight: 0,
        set2goal: 12,
        d11ex5set2reps: 0,
        d11ex5set2weight: 0,
      },
      {
        name: "Close grip Smith bench press",
        set1goal: 8,
        d11ex6set1reps: 0,
        d11ex6set1weight: 0,
        set2goal: 8,
        d11ex6set2reps: 0,
        d11ex6set2weight: 0,
      },
      {
        name: "Overhead rope extension",
        set1goal: 12,
        d11ex7set1reps: 0,
        d11ex7set1weight: 0,
        set2goal: 12,
        d11ex7set2reps: 0,
        d11ex7set2weight: 0,
        set3goal: 12,
        d11ex7set3reps: 0,
        d11ex7set3weight: 0,
      },
    ],
    day12: [
      {
        name: "Back squat",
        set1goal: 8,
        d12ex1set1reps: 0,
        d12ex1set1weight: 0,
        set2goal: 8,
        d12ex1set2reps: 0,
        d12ex1set2weight: 0,
        set3goal: 8,
        d12ex1set3reps: 0,
        d12ex1set3weight: 0,
      },
      {
        name: "Front squat",
        set1goal: 8,
        d12ex2set1reps: 0,
        d12ex2set1weight: 0,
        set2goal: 8,
        d12ex2set2reps: 0,
        d12ex2set2weight: 0,
        set3goal: 8,
        d12ex2set3reps: 0,
        d12ex2set3weight: 0,
      },
      {
        name: "Laying leg curl",
        set1goal: 12,
        d12ex3set1reps: 0,
        d12ex3set1weight: 0,
        set2goal: 12,
        d12ex3set2reps: 0,
        d12ex3set2weight: 0,
      },
      {
        name: "Adductor",
        set1goal: 12,
        d12ex4set1reps: 0,
        d12ex4set1weight: 0,
        set2goal: 12,
        d12ex4set2reps: 0,
        d12ex4set2weight: 0,
      },
      {
        name: "Abductor",
        set1goal: 12,
        d12ex5set1reps: 0,
        d12ex5set1weight: 0,
        set2goal: 12,
        d12ex5set2reps: 0,
        d12ex5set2weight: 0,
        set3goal: 12,
        d12ex5set3reps: 0,
        d12ex5set3weight: 0,
      },
      {
        name: "Seated calves",
        set1goal: 12,
        d12ex6set1reps: 0,
        d12ex6set1weight: 0,
        set2goal: 12,
        d12ex6set2reps: 0,
        d12ex6set2weight: 0,
      },
    ],
    day13: [
      {
        name: "Deadlift",
        set1goal: 5,
        d13ex1set1reps: 0,
        d13ex1set1weight: 0,
        set2goal: 8,
        d13ex1set2reps: 0,
        d13ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d13ex2set1reps: 0,
        d13ex2set1weight: 0,
        set2goal: 12,
        d13ex2set2reps: 0,
        d13ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d13ex3set1reps: 0,
        d13ex3set1weight: 0,
        set2goal: 12,
        d13ex3set2reps: 0,
        d13ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d13ex4set1reps: 0,
        d13ex4set1weight: 0,
        set2goal: 12,
        d13ex4set2reps: 0,
        d13ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d13ex5set1reps: 0,
        d13ex5set1weight: 0,
        set2goal: 12,
        d13ex5set2reps: 0,
        d13ex5set2weight: 0,
        set3goal: 12,
        d13ex5set3reps: 0,
        d13ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d13ex6set1reps: 0,
        d13ex6set1weight: 0,
        set2goal: 12,
        d13ex6set2reps: 0,
        d13ex6set2weight: 0,
      },
    ],
    day14: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d14ex1set1reps: 0,
        d14ex1set1weight: 0,
        set2goal: 12,
        d14ex1set2reps: 0,
        d14ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d14ex2set1reps: 0,
        d14ex2set1weight: 0,
        set2goal: 12,
        d14ex2set2reps: 0,
        d14ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d14ex3set1reps: 0,
        d14ex3set1weight: 0,
        set2goal: 12,
        d14ex3set2reps: 0,
        d14ex3set2weight: 0,
        set3goal: 12,
        d14ex3set3reps: 0,
        d14ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d14ex4set1reps: 0,
        d14ex4set1weight: 0,
        set2goal: 12,
        d14ex4set2reps: 0,
        d14ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d14ex5set1reps: 0,
        d14ex5set1weight: 0,
        set2goal: 12,
        d14ex5set2reps: 0,
        d14ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d14ex6set1reps: 0,
        d14ex6set1weight: 0,
        set2goal: 12,
        d14ex6set2reps: 0,
        d14ex6set2weight: 0,
        set3goal: 12,
        d14ex6set3reps: 0,
        d14ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d14ex7set1reps: 0,
        d14ex7set1weight: 0,
        set2goal: 12,
        d14ex7set2reps: 0,
        d14ex7set2weight: 0,
      },
    ],
    day15: [
      {
        name: "Front squat",
        set1goal: 8,
        d15ex1set1reps: 0,
        d15ex1set1weight: 0,
        set2goal: 12,
        d15ex1set2reps: 0,
        d15ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d15ex2set1reps: 0,
        d15ex2set1weight: 0,
        set2goal: 12,
        d15ex2set2reps: 0,
        d15ex2set2weight: 0,
        set3goal: 12,
        d15ex2set3reps: 0,
        d15ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d15ex3set1reps: 0,
        d15ex3set1weight: 0,
        set2goal: 12,
        d15ex3set2reps: 0,
        d15ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d15ex4set1reps: 0,
        d15ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d15ex5set1reps: 0,
        d15ex5set1weight: 0,
        set2goal: 20,
        d15ex5set2reps: 0,
        d15ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d15ex6set1reps: 0,
        d15ex6set1weight: 0,
        set2goal: 15,
        d15ex6set2reps: 0,
        d15ex6set2weight: 0,
      },
    ],
  },
  {
    planName: "Push-Pull-Leg",
    ref: true,
    type: "gym",
    numberOfDays: 6,
    day1: [
      {
        name: "Deadlift",
        set1goal: 5,
        d1ex1set1reps: 0,
        d1ex1set1weight: 0,
        eset2goal: 8,
        d1ex1set2reps: 0,
        d1ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d1ex2set1reps: 0,
        d1ex2set1weight: 0,
        set2goal: 12,
        d1ex2set2reps: 0,
        d1ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d1ex3set1reps: 0,
        d1ex3set1weight: 0,
        set2goal: 12,
        d1ex3set2reps: 0,
        d1ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d1ex4set1reps: 0,
        d1ex4set1weight: 0,
        set2goal: 12,
        d1ex4set2reps: 0,
        d1ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d1ex5set1reps: 0,
        d1ex5set1weight: 0,
        set2goal: 12,
        d1ex5set2reps: 0,
        d1ex5set2weight: 0,
        set3goal: 12,
        d1ex5set3reps: 0,
        d1ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d1ex6set1reps: 0,
        d1ex6set1weight: 0,
        set2goal: 12,
        d1ex6set2reps: 0,
        d1ex6set2weight: 0,
      },
    ],
    day2: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d2ex1set1reps: 0,
        d2ex1set1weight: 0,
        set2goal: 12,
        d2ex1set2reps: 0,
        d2ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d2ex2set1reps: 0,
        d2ex2set1weight: 0,
        set2goal: 12,
        d2ex2set2reps: 0,
        d2ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d2ex3set1reps: 0,
        d2ex3set1weight: 0,
        set2goal: 12,
        d2ex3set2reps: 0,
        d2ex3set2weight: 0,
        set3goal: 12,
        d2ex3set3reps: 0,
        d2ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d2ex4set1reps: 0,
        d2ex4set1weight: 0,
        set2goal: 12,
        d2ex4set2reps: 0,
        d2ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d2ex5set1reps: 0,
        d2ex5set1weight: 0,
        set2goal: 12,
        d2ex5set2reps: 0,
        d2ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d2ex6set1reps: 0,
        d2ex6set1weight: 0,
        set2goal: 12,
        d2ex6set2reps: 0,
        d2ex6set2weight: 0,
        set3goal: 12,
        d2ex6set3reps: 0,
        d2ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d2ex7set1reps: 0,
        d2ex7set1weight: 0,
        set2goal: 12,
        d2ex7set2reps: 0,
        d2ex7set2weight: 0,
      },
    ],
    day3: [
      {
        name: "Front squat",
        set1goal: 8,
        d3ex1set1reps: 0,
        d3ex1set1weight: 0,
        set2goal: 12,
        d3ex1set2reps: 0,
        d3ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d3ex2set1reps: 0,
        d3ex2set1weight: 0,
        set2goal: 12,
        d3ex2set2reps: 0,
        d3ex2set2weight: 0,
        set3goal: 12,
        d3ex2set3reps: 0,
        d3ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d3ex3set1reps: 0,
        d3ex3set1weight: 0,
        set2goal: 12,
        d3ex3set2reps: 0,
        d3ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d3ex4set1reps: 0,
        d3ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d3ex5set1reps: 0,
        d3ex5set1weight: 0,
        set2goal: 20,
        d3ex5set2reps: 0,
        d3ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d3ex6set1reps: 0,
        d3ex6set1weight: 0,
        set2goal: 15,
        d3ex6set2reps: 0,
        d3ex6set2weight: 0,
      },
    ],
    day4: [
      {
        name: "Deadlift",
        set1goal: 5,
        d4ex1set1reps: 0,
        d4ex1set1weight: 0,
        set2goal: 8,
        d4ex1set2reps: 0,
        d4ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d4ex2set1reps: 0,
        d4ex2set1weight: 0,
        set2goal: 12,
        d4ex2set2reps: 0,
        d4ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d4ex3set1reps: 0,
        d4ex3set1weight: 0,
        set2goal: 12,
        d4ex3set2reps: 0,
        d4ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d4ex4set1reps: 0,
        d4ex4set1weight: 0,
        set2goal: 12,
        d4ex4set2reps: 0,
        d4ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d4ex5set1reps: 0,
        d4ex5set1weight: 0,
        set2goal: 12,
        d4ex5set2reps: 0,
        d4ex5set2weight: 0,
        set3goal: 12,
        d4ex5set3reps: 0,
        d4ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d4ex6set1reps: 0,
        d4ex6set1weight: 0,
        set2goal: 12,
        d4ex6set2reps: 0,
        d4ex6set2weight: 0,
      },
    ],
    day5: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d5ex1set1reps: 0,
        d5ex1set1weight: 0,
        set2goal: 12,
        d5ex1set2reps: 0,
        d5ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d5ex2set1reps: 0,
        d5ex2set1weight: 0,
        set2goal: 12,
        d5ex2set2reps: 0,
        d5ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d5ex3set1reps: 0,
        d5ex3set1weight: 0,
        set2goal: 12,
        d5ex3set2reps: 0,
        d5ex3set2weight: 0,
        set3goal: 12,
        d5ex3set3reps: 0,
        d5ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d5ex4set1reps: 0,
        d5ex4set1weight: 0,
        set2goal: 12,
        d5ex4set2reps: 0,
        d5ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d5ex5set1reps: 0,
        d5ex5set1weight: 0,
        set2goal: 12,
        d5ex5set2reps: 0,
        d5ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d5ex6set1reps: 0,
        d5ex6set1weight: 0,
        set2goal: 12,
        d5ex6set2reps: 0,
        d5ex6set2weight: 0,
        set3goal: 12,
        d5ex6set3reps: 0,
        d5ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d5ex7set1reps: 0,
        d5ex7set1weight: 0,
        set2goal: 12,
        d5ex7set2reps: 0,
        d5ex7set2weight: 0,
      },
    ],
    day6: [
      {
        name: "Front squat",
        set1goal: 8,
        d6ex1set1reps: 0,
        d6ex1set1weight: 0,
        set2goal: 12,
        d6ex1set2reps: 0,
        d6ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d6ex2set1reps: 0,
        d6ex2set1weight: 0,
        set2goal: 12,
        d6ex2set2reps: 0,
        d6ex2set2weight: 0,
        set3goal: 12,
        d6ex2set3reps: 0,
        d6ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d6ex3set1reps: 0,
        d6ex3set1weight: 0,
        set2goal: 12,
        d6ex3set2reps: 0,
        d6ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d6ex4set1reps: 0,
        d6ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d6ex5set1reps: 0,
        d6ex5set1weight: 0,
        set2goal: 20,
        d6ex5set2reps: 0,
        d6ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d6ex6set1reps: 0,
        d6ex6set1weight: 0,
        set2goal: 15,
        d6ex6set2reps: 0,
        d6ex6set2weight: 0,
      },
    ],
    day7: [
      {
        name: "Deadlift",
        set1goal: 5,
        d7ex1set1reps: 0,
        d7ex1set1weight: 0,
        set2goal: 8,
        d7ex1set2reps: 0,
        d7ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d7ex2set1reps: 0,
        d7ex2set1weight: 0,
        set2goal: 12,
        d7ex2set2reps: 0,
        d7ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d7ex3set1reps: 0,
        d7ex3set1weight: 0,
        set2goal: 12,
        d7ex3set2reps: 0,
        d7ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d7ex4set1reps: 0,
        d7ex4set1weight: 0,
        set2goal: 12,
        d7ex4set2reps: 0,
        d7ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d7ex5set1reps: 0,
        d7ex5set1weight: 0,
        set2goal: 12,
        d7ex5set2reps: 0,
        d7ex5set2weight: 0,
        set3goal: 12,
        d7ex5set3reps: 0,
        d7ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d7ex6set1reps: 0,
        d7ex6set1weight: 0,
        set2goal: 12,
        d7ex6set2reps: 0,
        d7ex6set2weight: 0,
      },
    ],
    day8: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d8ex1set1reps: 0,
        d8ex1set1weight: 0,
        set2goal: 12,
        d8ex1set2reps: 0,
        d8ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d8ex2set1reps: 0,
        d8ex2set1weight: 0,
        set2goal: 12,
        d8ex2set2reps: 0,
        d8ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d8ex3set1reps: 0,
        d8ex3set1weight: 0,
        set2goal: 12,
        d8ex3set2reps: 0,
        d8ex3set2weight: 0,
        set3goal: 12,
        d8ex3set3reps: 0,
        d8ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d8ex4set1reps: 0,
        d8ex4set1weight: 0,
        set2goal: 12,
        d8ex4set2reps: 0,
        d8ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d8ex5set1reps: 0,
        d8ex5set1weight: 0,
        set2goal: 12,
        d8ex5set2reps: 0,
        d8ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d8ex6set1reps: 0,
        d8ex6set1weight: 0,
        set2goal: 12,
        d8ex6set2reps: 0,
        d8ex6set2weight: 0,
        set3goal: 12,
        d8ex6set3reps: 0,
        d8ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d8ex7set1reps: 0,
        d8ex7set1weight: 0,
        set2goal: 12,
        d8ex7set2reps: 0,
        d8ex7set2weight: 0,
      },
    ],
    day9: [
      {
        name: "Front squat",
        set1goal: 8,
        d9ex1set1reps: 0,
        d9ex1set1weight: 0,
        set2goal: 12,
        d9ex1set2reps: 0,
        d9ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d9ex2set1reps: 0,
        d9ex2set1weight: 0,
        set2goal: 12,
        d9ex2set2reps: 0,
        d9ex2set2weight: 0,
        set3goal: 12,
        d9ex2set3reps: 0,
        d9ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d9ex3set1reps: 0,
        d9ex3set1weight: 0,
        set2goal: 12,
        d9ex3set2reps: 0,
        d9ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d9ex4set1reps: 0,
        d9ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d9ex5set1reps: 0,
        d9ex5set1weight: 0,
        set2goal: 20,
        d9ex5set2reps: 0,
        d9ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d9ex6set1reps: 0,
        d9ex6set1weight: 0,
        set2goal: 15,
        d9ex6set2reps: 0,
        d9ex6set2weight: 0,
      },
    ],
    day10: [
      {
        name: "Bent over row",
        set1goal: 8,
        d10ex1set1reps: 0,
        d10ex1set1weight: 0,
        set2goal: 12,
        d10ex1set2reps: 0,
        d10ex1set2weight: 0,
      },
      {
        name: "T-Bar row",
        set1goal: 8,
        d10ex2set1reps: 0,
        d10ex1set1weight: 0,
        set2goal: 8,
        d10ex1set2reps: 0,
        d10ex1set2weight: 0,
      },
      {
        name: "Close grip chin-up",
        set1goal: 8,
        d10ex2set1reps: 0,
        d10ex2set1weight: 0,
        set2goal: 8,
        d10ex2set2reps: 0,
        d10ex2set2weight: 0,
        set3goal: 8,
        d10ex2set3reps: 0,
        d10ex2set3weight: 0,
      },
      {
        name: "Rack deadlift",
        set1goal: 5,
        d10ex3set1reps: 0,
        d10ex3set1weight: 0,
        set2goal: 8,
        d10ex3set2reps: 0,
        d10ex3set2weight: 0,
      },
      {
        name: "Barbell curls",
        set1goal: 12,
        d10ex4set1reps: 0,
        d10ex4set1weight: 0,
        set2goal: 12,
        d10ex4set2reps: 0,
        d10ex4set2weight: 0,
        set3goal: 12,
        d10ex4set3reps: 0,
        d10ex4set3weight: 0,
      },
      {
        name: "Reverse grip cable curls",
        set1goal: 12,
        d10ex5set1reps: 0,
        d10ex5set1weight: 0,
        set2goal: 12,
        d10ex5set2reps: 0,
        d10ex5set2weight: 0,
      },
    ],
    day11: [
      {
        name: "Declined bench press",
        set1goal: 8,
        d11ex1set1reps: 0,
        d11ex1set1weight: 0,
        set2goal: 12,
        d11ex1set2reps: 0,
        d11ex1set2weight: 0,
      },
      {
        name: "Inclined dumbbell press",
        set1goal: 12,
        d11ex2set1reps: 0,
        d11ex2set1weight: 0,
        set2goal: 12,
        d11ex2set2reps: 0,
        d11ex2set2weight: 0,
      },
      {
        name: "Flat machine press",
        set1goal: 12,
        d11ex3set1reps: 0,
        d11ex3set1weight: 0,
        set2goal: 12,
        d11ex3set2reps: 0,
        d11ex3set2weight: 0,
      },
      {
        name: "Seated Smith shoulder press",
        set1goal: 12,
        d11ex4set1reps: 0,
        d11ex4set1weight: 0,
        set2goal: 12,
        d11ex4set2reps: 0,
        d11ex4set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d11ex5set1reps: 0,
        d11ex5set1weight: 0,
        set2goal: 12,
        d11ex5set2reps: 0,
        d11ex5set2weight: 0,
      },
      {
        name: "Close grip Smith bench press",
        set1goal: 8,
        d11ex6set1reps: 0,
        d11ex6set1weight: 0,
        set2goal: 8,
        d11ex6set2reps: 0,
        d11ex6set2weight: 0,
      },
      {
        name: "Overhead rope extension",
        set1goal: 12,
        d11ex7set1reps: 0,
        d11ex7set1weight: 0,
        set2goal: 12,
        d11ex7set2reps: 0,
        d11ex7set2weight: 0,
        set3goal: 12,
        d11ex7set3reps: 0,
        d11ex7set3weight: 0,
      },
    ],
    day12: [
      {
        name: "Back squat",
        set1goal: 8,
        d12ex1set1reps: 0,
        d12ex1set1weight: 0,
        set2goal: 8,
        d12ex1set2reps: 0,
        d12ex1set2weight: 0,
        set3goal: 8,
        d12ex1set3reps: 0,
        d12ex1set3weight: 0,
      },
      {
        name: "Front squat",
        set1goal: 8,
        d12ex2set1reps: 0,
        d12ex2set1weight: 0,
        set2goal: 8,
        d12ex2set2reps: 0,
        d12ex2set2weight: 0,
        set3goal: 8,
        d12ex2set3reps: 0,
        d12ex2set3weight: 0,
      },
      {
        name: "Laying leg curl",
        set1goal: 12,
        d12ex3set1reps: 0,
        d12ex3set1weight: 0,
        set2goal: 12,
        d12ex3set2reps: 0,
        d12ex3set2weight: 0,
      },
      {
        name: "Adductor",
        set1goal: 12,
        d12ex4set1reps: 0,
        d12ex4set1weight: 0,
        set2goal: 12,
        d12ex4set2reps: 0,
        d12ex4set2weight: 0,
      },
      {
        name: "Abductor",
        set1goal: 12,
        d12ex5set1reps: 0,
        d12ex5set1weight: 0,
        set2goal: 12,
        d12ex5set2reps: 0,
        d12ex5set2weight: 0,
        set3goal: 12,
        d12ex5set3reps: 0,
        d12ex5set3weight: 0,
      },
      {
        name: "Seated calves",
        set1goal: 12,
        d12ex6set1reps: 0,
        d12ex6set1weight: 0,
        set2goal: 12,
        d12ex6set2reps: 0,
        d12ex6set2weight: 0,
      },
    ],
    day13: [
      {
        name: "Deadlift",
        set1goal: 5,
        d13ex1set1reps: 0,
        d13ex1set1weight: 0,
        set2goal: 8,
        d13ex1set2reps: 0,
        d13ex1set2weight: 0,
      },
      {
        name: "Underhand pull-down",
        set1goal: 12,
        d13ex2set1reps: 0,
        d13ex2set1weight: 0,
        set2goal: 12,
        d13ex2set2reps: 0,
        d13ex2set2weight: 0,
      },
      {
        name: "Dumbbel one row",
        set1goal: 8,
        d13ex3set1reps: 0,
        d13ex3set1weight: 0,
        set2goal: 12,
        d13ex3set2reps: 0,
        d13ex3set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d13ex4set1reps: 0,
        d13ex4set1weight: 0,
        set2goal: 12,
        d13ex4set2reps: 0,
        d13ex4set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d13ex5set1reps: 0,
        d13ex5set1weight: 0,
        set2goal: 12,
        d13ex5set2reps: 0,
        d13ex5set2weight: 0,
        set3goal: 12,
        d13ex5set3reps: 0,
        d13ex5set3weight: 0,
      },
      {
        name: "Cable hammer curls",
        set1goal: 12,
        d13ex6set1reps: 0,
        d13ex6set1weight: 0,
        set2goal: 12,
        d13ex6set2reps: 0,
        d13ex6set2weight: 0,
      },
    ],
    day14: [
      {
        name: "Inclined bench press",
        set1goal: 8,
        d14ex1set1reps: 0,
        d14ex1set1weight: 0,
        set2goal: 12,
        d14ex1set2reps: 0,
        d14ex1set2weight: 0,
      },
      {
        name: "Flat dumbbell press",
        set1goal: 12,
        d14ex2set1reps: 0,
        d14ex2set1weight: 0,
        set2goal: 12,
        d14ex2set2reps: 0,
        d14ex2set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d14ex3set1reps: 0,
        d14ex3set1weight: 0,
        set2goal: 12,
        d14ex3set2reps: 0,
        d14ex3set2weight: 0,
        set3goal: 12,
        d14ex3set3reps: 0,
        d14ex3set3weight: 0,
      },
      {
        name: "Dumbbell shoulder press",
        set1goal: 12,
        d14ex4set1reps: 0,
        d14ex4set1weight: 0,
        set2goal: 12,
        d14ex4set2reps: 0,
        d14ex4set2weight: 0,
      },
      {
        name: "Arnold press",
        set1goal: 12,
        d14ex5set1reps: 0,
        d14ex5set1weight: 0,
        set2goal: 12,
        d14ex5set2reps: 0,
        d14ex5set2weight: 0,
      },
      {
        name: "Skull crusher",
        set1goal: 12,
        d14ex6set1reps: 0,
        d14ex6set1weight: 0,
        set2goal: 12,
        d14ex6set2reps: 0,
        d14ex6set2weight: 0,
        set3goal: 12,
        d14ex6set3reps: 0,
        d14ex6set3weight: 0,
      },
      {
        name: "Underhand push down",
        set1goal: 12,
        d14ex7set1reps: 0,
        d14ex7set1weight: 0,
        set2goal: 12,
        d14ex7set2reps: 0,
        d14ex7set2weight: 0,
      },
    ],
    day15: [
      {
        name: "Front squat",
        set1goal: 8,
        d15ex1set1reps: 0,
        d15ex1set1weight: 0,
        set2goal: 12,
        d15ex1set2reps: 0,
        d15ex1set2weight: 0,
      },
      {
        name: "Leg press",
        set1goal: 12,
        d15ex2set1reps: 0,
        d15ex2set1weight: 0,
        set2goal: 12,
        d15ex2set2reps: 0,
        d15ex2set2weight: 0,
        set3goal: 12,
        d15ex2set3reps: 0,
        d15ex2set3weight: 0,
      },
      {
        name: "Romanian deadlift",
        set1goal: 8,
        d15ex3set1reps: 0,
        d15ex3set1weight: 0,
        set2goal: 12,
        d15ex3set2reps: 0,
        d15ex3set2weight: 0,
      },
      {
        name: "Glute ham raises",
        set1goal: 20,
        d15ex4set1reps: 0,
        d15ex4set1weight: 0,
      },
      {
        name: "Walking lunges",
        set1goal: 20,
        d15ex5set1reps: 0,
        d15ex5set1weight: 0,
        set2goal: 20,
        d15ex5set2reps: 0,
        d15ex5set2weight: 0,
      },
      {
        name: "Standing calves",
        set1goal: 15,
        d15ex6set1reps: 0,
        d15ex6set1weight: 0,
        set2goal: 15,
        d15ex6set2reps: 0,
        d15ex6set2weight: 0,
      },
    ],
    day16: [
      {
        name: "Bent over row",
        set1goal: 8,
        d16ex1set1reps: 0,
        d16ex1set1weight: 0,
        set2goal: 12,
        d16ex1set2reps: 0,
        d16ex1set2weight: 0,
      },
      {
        name: "T-Bar row",
        set1goal: 8,
        d16ex2set1reps: 0,
        d16ex2set1weight: 0,
        set2goal: 8,
        d16ex2set2reps: 0,
        d16ex2set2weight: 0,
      },
      {
        name: "Close grip chin-up",
        set1goal: 8,
        d16ex3set1reps: 0,
        d16ex3set1weight: 0,
        set2goal: 8,
        d16ex3set2reps: 0,
        d16ex3set2weight: 0,
        set3goal: 8,
        d16ex3set3reps: 0,
        d16ex3set3weight: 0,
      },
      {
        name: "Rack deadlift",
        set1goal: 5,
        d16ex4set1reps: 0,
        d16ex4set1weight: 0,
        set2goal: 8,
        d16ex4set2reps: 0,
        d16ex4set2weight: 0,
      },
      {
        name: "Barbell curls",
        set1goal: 12,
        d16ex5set1reps: 0,
        d16ex5set1weight: 0,
        set2goal: 12,
        d16ex5set2reps: 0,
        d16ex5set2weight: 0,
        set3goal: 12,
        d16ex5set3reps: 0,
        d16ex5set3weight: 0,
      },
      {
        name: "Reverse grip cable curls",
        set1goal: 12,
        d16ex6set1reps: 0,
        d16ex6set1weight: 0,
        set2goal: 12,
        d16ex6set2reps: 0,
        d16ex6set2weight: 0,
      },
    ],
    day17: [
      {
        name: "Declined bench press",
        set1goal: 8,
        d17ex1set1reps: 0,
        d17ex1set1weight: 0,
        set2goal: 12,
        d17ex1set2reps: 0,
        d17ex1set2weight: 0,
      },
      {
        name: "Inclined dumbbell press",
        set1goal: 12,
        d17ex2set1reps: 0,
        d17ex2set1weight: 0,
        set2goal: 12,
        d17ex2set2reps: 0,
        d17ex2set2weight: 0,
      },
      {
        name: "Flat machine press",
        set1goal: 12,
        d17ex3set1reps: 0,
        d17ex3set1weight: 0,
        set2goal: 12,
        d17ex3set2reps: 0,
        d17ex3set2weight: 0,
      },
      {
        name: "Seated Smith shoulder press",
        set1goal: 12,
        d17ex4set1reps: 0,
        d17ex4set1weight: 0,
        set2goal: 12,
        d17ex4set2reps: 0,
        d17ex4set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d17ex5set1reps: 0,
        d17ex5set1weight: 0,
        set2goal: 12,
        d17ex5set2reps: 0,
        d17ex5set2weight: 0,
      },
      {
        name: "Close grip Smith bench press",
        set1goal: 8,
        d17ex6set1reps: 0,
        d17ex6set1weight: 0,
        set2goal: 8,
        d17ex6set2reps: 0,
        d17ex6set2weight: 0,
      },
      {
        name: "Overhead rope extension",
        set1goal: 12,
        d17ex7set1reps: 0,
        d17ex7set1weight: 0,
        set2goal: 12,
        d17ex7set2reps: 0,
        d17ex7set2weight: 0,
        set3goal: 12,
        d17ex7set3reps: 0,
        d17ex7set3weight: 0,
      },
    ],
    day18: [
      {
        name: "Back squat",
        set1goal: 8,
        d18ex1set1reps: 0,
        d18ex1set1weight: 0,
        set2goal: 8,
        d18ex1set2reps: 0,
        d18ex1set2weight: 0,
        set3goal: 8,
        d18ex1set3reps: 0,
        d18ex1set3weight: 0,
      },
      {
        name: "Front squat",
        set1goal: 8,
        d18ex2set1reps: 0,
        d18ex2set1weight: 0,
        set2goal: 8,
        d18ex2set2reps: 0,
        d18ex2set2weight: 0,
        set3goal: 8,
        d18ex2set3reps: 0,
        d18ex2set3weight: 0,
      },
      {
        name: "Laying leg curl",
        set1goal: 12,
        d18ex3set1reps: 0,
        d18ex3set1weight: 0,
        set2goal: 12,
        d18ex3set2reps: 0,
        d18ex3set2weight: 0,
      },
      {
        name: "Adductor",
        set1goal: 12,
        d18ex4set1reps: 0,
        d18ex4set1weight: 0,
        set2goal: 12,
        d18ex4set2reps: 0,
        d18ex4set2weight: 0,
      },
      {
        name: "Abductor",
        set1goal: 12,
        d18ex5set1reps: 0,
        d18ex5set1weight: 0,
        set2goal: 12,
        d18ex5set2reps: 0,
        d18ex5set2weight: 0,
        set3goal: 12,
        d18ex5set3reps: 0,
        d18ex5set3weight: 0,
      },
      {
        name: "Seated calves",
        set1goal: 12,
        d18ex6set1reps: 0,
        d18ex6set1weight: 0,
        set2goal: 12,
        d18ex6set2reps: 0,
        d18ex6set2weight: 0,
      },
    ],
  },
  {
    planName: "Full-body",
    ref: true,
    type: "gym",
    numberOfDays: 6,
    day1: [
      {
        name: "Deadlift",
        set1goal: 5,
        d1ex1set1reps: 0,
        d1ex1set1weight: 0,
        set2goal: 8,
        d1ex1set2reps: 0,
        d1ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d1ex2set1reps: 0,
        d1ex2set1weight: 0,
        set2goal: 12,
        d1ex2set2reps: 0,
        d1ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d1ex3set1reps: 0,
        d1ex3set1weight: 0,
        set2goal: 12,
        d1ex3set2reps: 0,
        d1ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d1ex4set1reps: 0,
        d1ex4set1weight: 0,
        set2goal: 12,
        d1ex4set2reps: 0,
        d1ex4set2weight: 0,
        set3goal: 12,
        d1ex4set3reps: 0,
        d1ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d1ex5set1reps: 0,
        d1ex5set1weight: 0,
        set2goal: 12,
        d1ex5set2reps: 0,
        d1ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d1ex6set1reps: 0,
        d1ex6set1weight: 0,
        set2goal: 12,
        d1ex6set2reps: 0,
        d1ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d1ex7set1reps: 0,
        d1ex7set1weight: 0,
        set2goal: 12,
        d1ex7set2reps: 0,
        d1ex7set2weight: 0,
      },
    ],
    day2: [
      {
        name: "Deadlift",
        set1goal: 5,
        d2ex1set1reps: 0,
        d2ex1set1weight: 0,
        set2goal: 8,
        d2ex1set2reps: 0,
        d2ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d2ex2set1reps: 0,
        d2ex2set1weight: 0,
        set2goal: 12,
        d2ex2set2reps: 0,
        d2ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d2ex3set1reps: 0,
        d2ex3set1weight: 0,
        set2goal: 12,
        d2ex3set2reps: 0,
        d2ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d2ex4set1reps: 0,
        d2ex4set1weight: 0,
        set2goal: 12,
        d2ex4set2reps: 0,
        d2ex4set2weight: 0,
        set3goal: 12,
        d2ex4set3reps: 0,
        d2ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d2ex5set1reps: 0,
        d2ex5set1weight: 0,
        set2goal: 12,
        d2ex5set2reps: 0,
        d2ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d2ex6set1reps: 0,
        d2ex6set1weight: 0,
        set2goal: 12,
        d2ex6set2reps: 0,
        d2ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d2ex7set1reps: 0,
        d2ex7set1weight: 0,
        set2goal: 12,
        d2ex7set2reps: 0,
        d2ex7set2weight: 0,
      },
    ],
    day3: [
      {
        name: "Deadlift",
        set1goal: 5,
        d3ex1set1reps: 0,
        d3ex1set1weight: 0,
        set2goal: 8,
        d3ex1set2reps: 0,
        d3ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d3ex2set1reps: 0,
        d3ex2set1weight: 0,
        set2goal: 12,
        d3ex2set2reps: 0,
        d3ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d3ex3set1reps: 0,
        d3ex3set1weight: 0,
        set2goal: 12,
        d3ex3set2reps: 0,
        d3ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d3ex4set1reps: 0,
        d3ex4set1weight: 0,
        set2goal: 12,
        d3ex4set2reps: 0,
        d3ex4set2weight: 0,
        set3goal: 12,
        d3ex4set3reps: 0,
        d3ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d3ex5set1reps: 0,
        d3ex5set1weight: 0,
        set2goal: 12,
        d3ex5set2reps: 0,
        d3ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d3ex6set1reps: 0,
        d3ex6set1weight: 0,
        set2goal: 12,
        d3ex6set2reps: 0,
        d3ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d1ex7set1reps: 0,
        d3ex7set1weight: 0,
        set2goal: 12,
        d3ex7set2reps: 0,
        d3ex7set2weight: 0,
      },
    ],
    day4: [
      {
        name: "Deadlift",
        set1goal: 5,
        d4ex1set1reps: 0,
        d4ex1set1weight: 0,
        set2goal: 8,
        d4ex1set2reps: 0,
        d4ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d4ex2set1reps: 0,
        d4ex2set1weight: 0,
        set2goal: 12,
        d4ex2set2reps: 0,
        d4ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d4ex3set1reps: 0,
        d4ex3set1weight: 0,
        set2goal: 12,
        d4ex3set2reps: 0,
        d4ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d4ex4set1reps: 0,
        d4ex4set1weight: 0,
        set2goal: 12,
        d4ex4set2reps: 0,
        d4ex4set2weight: 0,
        set3goal: 12,
        d4ex4set3reps: 0,
        d4ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d4ex5set1reps: 0,
        d4ex5set1weight: 0,
        set2goal: 12,
        d4ex5set2reps: 0,
        d4ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d4ex6set1reps: 0,
        d4ex6set1weight: 0,
        set2goal: 12,
        d4ex6set2reps: 0,
        d4ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d4ex7set1reps: 0,
        d4ex7set1weight: 0,
        set2goal: 12,
        d4ex7set2reps: 0,
        d4ex7set2weight: 0,
      },
    ],
    day5: [
      {
        name: "Deadlift",
        set1goal: 5,
        d5ex1set1reps: 0,
        d5ex1set1weight: 0,
        set2goal: 8,
        d5ex1set2reps: 0,
        d5ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d5ex2set1reps: 0,
        d5ex2set1weight: 0,
        set2goal: 12,
        d5ex2set2reps: 0,
        d5ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d5ex3set1reps: 0,
        d5ex3set1weight: 0,
        set2goal: 12,
        d5ex3set2reps: 0,
        d5ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d5ex4set1reps: 0,
        d5ex4set1weight: 0,
        set2goal: 12,
        d5ex4set2reps: 0,
        d5ex4set2weight: 0,
        set3goal: 12,
        d5ex4set3reps: 0,
        d5ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d5ex5set1reps: 0,
        d5ex5set1weight: 0,
        set2goal: 12,
        d5ex5set2reps: 0,
        d5ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d5ex6set1reps: 0,
        d5ex6set1weight: 0,
        set2goal: 12,
        d5ex6set2reps: 0,
        d5ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d5ex7set1reps: 0,
        d5ex7set1weight: 0,
        set2goal: 12,
        d5ex7set2reps: 0,
        d5ex7set2weight: 0,
      },
    ],
    day6: [
      {
        name: "Deadlift",
        set1goal: 5,
        d6ex1set1reps: 0,
        d6ex1set1weight: 0,
        set2goal: 8,
        d6ex1set2reps: 0,
        d6ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d6ex2set1reps: 0,
        d6ex2set1weight: 0,
        set2goal: 12,
        d6ex2set2reps: 0,
        d6ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d6ex3set1reps: 0,
        d6ex3set1weight: 0,
        set2goal: 12,
        d6ex3set2reps: 0,
        d6ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d6ex4set1reps: 0,
        d6ex4set1weight: 0,
        set2goal: 12,
        d6ex4set2reps: 0,
        d6ex4set2weight: 0,
        set3goal: 12,
        d6ex4set3reps: 0,
        d6ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d6ex5set1reps: 0,
        d6ex5set1weight: 0,
        set2goal: 12,
        d6ex5set2reps: 0,
        d6ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d6ex6set1reps: 0,
        d6ex6set1weight: 0,
        set2goal: 12,
        d6ex6set2reps: 0,
        d6ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d6ex7set1reps: 0,
        d6ex7set1weight: 0,
        set2goal: 12,
        d6ex7set2reps: 0,
        d6ex7set2weight: 0,
      },
    ],
    day7: [
      {
        name: "Deadlift",
        set1goal: 5,
        d7ex1set1reps: 0,
        d7ex1set1weight: 0,
        set2goal: 8,
        d7ex1set2reps: 0,
        d7ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d7ex2set1reps: 0,
        d7ex2set1weight: 0,
        set2goal: 12,
        d7ex2set2reps: 0,
        d7ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d7ex3set1reps: 0,
        d7ex3set1weight: 0,
        set2goal: 12,
        d7ex3set2reps: 0,
        d7ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d7ex4set1reps: 0,
        d7ex4set1weight: 0,
        set2goal: 12,
        d7ex4set2reps: 0,
        d7ex4set2weight: 0,
        set3goal: 12,
        d7ex4set3reps: 0,
        d7ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d7ex5set1reps: 0,
        d7ex5set1weight: 0,
        set2goal: 12,
        d7ex5set2reps: 0,
        d7ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d7ex6set1reps: 0,
        d7ex6set1weight: 0,
        set2goal: 12,
        d7ex6set2reps: 0,
        d7ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d7ex7set1reps: 0,
        d7ex7set1weight: 0,
        set2goal: 12,
        d7ex7set2reps: 0,
        d7ex7set2weight: 0,
      },
    ],
    day8: [
      {
        name: "Deadlift",
        set1goal: 5,
        d8ex1set1reps: 0,
        d8ex1set1weight: 0,
        set2goal: 8,
        d8ex1set2reps: 0,
        d8ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d8ex2set1reps: 0,
        d8ex2set1weight: 0,
        set2goal: 12,
        d8ex2set2reps: 0,
        d8ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d8ex3set1reps: 0,
        d8ex3set1weight: 0,
        set2goal: 12,
        d8ex3set2reps: 0,
        d8ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d8ex4set1reps: 0,
        d8ex4set1weight: 0,
        set2goal: 12,
        d8ex4set2reps: 0,
        d8ex4set2weight: 0,
        set3goal: 12,
        d8ex4set3reps: 0,
        d8ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d8ex5set1reps: 0,
        d8ex5set1weight: 0,
        set2goal: 12,
        d8ex5set2reps: 0,
        d8ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d8ex6set1reps: 0,
        d8ex6set1weight: 0,
        set2goal: 12,
        d8ex6set2reps: 0,
        d8ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d8ex7set1reps: 0,
        d8ex7set1weight: 0,
        set2goal: 12,
        d8ex7set2reps: 0,
        d8ex7set2weight: 0,
      },
    ],
    day9: [
      {
        name: "Deadlift",
        set1goal: 5,
        d9ex1set1reps: 0,
        d9ex1set1weight: 0,
        set2goal: 8,
        d9ex1set2reps: 0,
        d9ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d9ex2set1reps: 0,
        d9ex2set1weight: 0,
        set2goal: 12,
        d9ex2set2reps: 0,
        d9ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d9ex3set1reps: 0,
        d9ex3set1weight: 0,
        set2goal: 12,
        d9ex3set2reps: 0,
        d9ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d9ex4set1reps: 0,
        d9ex4set1weight: 0,
        set2goal: 12,
        d9ex4set2reps: 0,
        d9ex4set2weight: 0,
        set3goal: 12,
        d9ex4set3reps: 0,
        d9ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d9ex5set1reps: 0,
        d9ex5set1weight: 0,
        set2goal: 12,
        d9ex5set2reps: 0,
        d9ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d9ex6set1reps: 0,
        d9ex6set1weight: 0,
        set2goal: 12,
        d9ex6set2reps: 0,
        d9ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d9ex7set1reps: 0,
        d9ex7set1weight: 0,
        set2goal: 12,
        d9ex7set2reps: 0,
        d9ex7set2weight: 0,
      },
    ],
    day10: [
      {
        name: "Deadlift",
        set1goal: 5,
        d10ex1set1reps: 0,
        d10ex1set1weight: 0,
        set2goal: 8,
        d10ex1set2reps: 0,
        d10ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d10ex2set1reps: 0,
        d10ex2set1weight: 0,
        set2goal: 12,
        d10ex2set2reps: 0,
        d10ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d10ex3set1reps: 0,
        d10ex3set1weight: 0,
        set2goal: 12,
        d10ex3set2reps: 0,
        d10ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d10ex4set1reps: 0,
        d10ex4set1weight: 0,
        set2goal: 12,
        d10ex4set2reps: 0,
        d10ex4set2weight: 0,
        set3goal: 12,
        d10ex4set3reps: 0,
        d10ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d10ex5set1reps: 0,
        d10ex5set1weight: 0,
        set2goal: 12,
        d10ex5set2reps: 0,
        d10ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d10ex6set1reps: 0,
        d10ex6set1weight: 0,
        set2goal: 12,
        d10ex6set2reps: 0,
        d10ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d10ex7set1reps: 0,
        d10ex7set1weight: 0,
        set2goal: 12,
        d10ex7set2reps: 0,
        d10ex7set2weight: 0,
      },
    ],
    day11: [
      {
        name: "Deadlift",
        set1goal: 5,
        d11ex1set1reps: 0,
        d11ex1set1weight: 0,
        set2goal: 8,
        d11ex1set2reps: 0,
        d11ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d11ex2set1reps: 0,
        d11ex2set1weight: 0,
        set2goal: 12,
        d11ex2set2reps: 0,
        d11ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d11ex3set1reps: 0,
        d11ex3set1weight: 0,
        set2goal: 12,
        d11ex3set2reps: 0,
        d11ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d11ex4set1reps: 0,
        d11ex4set1weight: 0,
        set2goal: 12,
        d11ex4set2reps: 0,
        d11ex4set2weight: 0,
        set3goal: 12,
        d11ex4set3reps: 0,
        d11ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d11ex5set1reps: 0,
        d11ex5set1weight: 0,
        set2goal: 12,
        d11ex5set2reps: 0,
        d11ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d11ex6set1reps: 0,
        d11ex6set1weight: 0,
        set2goal: 12,
        d11ex6set2reps: 0,
        d11ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d11ex7set1reps: 0,
        d11ex7set1weight: 0,
        set2goal: 12,
        d11ex7set2reps: 0,
        d11ex7set2weight: 0,
      },
    ],
    day12: [
      {
        name: "Deadlift",
        set1goal: 5,
        d12ex1set1reps: 0,
        d12ex1set1weight: 0,
        set2goal: 8,
        d12ex1set2reps: 0,
        d12ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d12ex2set1reps: 0,
        d12ex2set1weight: 0,
        set2goal: 12,
        d12ex2set2reps: 0,
        d12ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d12ex3set1reps: 0,
        d12ex3set1weight: 0,
        set2goal: 12,
        d12ex3set2reps: 0,
        d12ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d12ex4set1reps: 0,
        d12ex4set1weight: 0,
        set2goal: 12,
        d12ex4set2reps: 0,
        d12ex4set2weight: 0,
        set3goal: 12,
        d12ex4set3reps: 0,
        d12ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d12ex5set1reps: 0,
        d12ex5set1weight: 0,
        set2goal: 12,
        d12ex5set2reps: 0,
        d12ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d12ex6set1reps: 0,
        d12ex6set1weight: 0,
        set2goal: 12,
        d12ex6set2reps: 0,
        d12ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d12ex7set1reps: 0,
        d12ex7set1weight: 0,
        set2goal: 12,
        d12ex7set2reps: 0,
        d12ex7set2weight: 0,
      },
    ],
    day13: [
      {
        name: "Deadlift",
        set1goal: 5,
        d13ex1set1reps: 0,
        d13ex1set1weight: 0,
        set2goal: 8,
        d13ex1set2reps: 0,
        d13ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d13ex2set1reps: 0,
        d13ex2set1weight: 0,
        set2goal: 12,
        d13ex2set2reps: 0,
        d13ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d13ex3set1reps: 0,
        d13ex3set1weight: 0,
        set2goal: 12,
        d13ex3set2reps: 0,
        d13ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d13ex4set1reps: 0,
        d13ex4set1weight: 0,
        set2goal: 12,
        d13ex4set2reps: 0,
        d13ex4set2weight: 0,
        set3goal: 12,
        d13ex4set3reps: 0,
        d13ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d13ex5set1reps: 0,
        d13ex5set1weight: 0,
        set2goal: 12,
        d13ex5set2reps: 0,
        d13ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d13ex6set1reps: 0,
        d13ex6set1weight: 0,
        set2goal: 12,
        d13ex6set2reps: 0,
        d13ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d13ex7set1reps: 0,
        d13ex7set1weight: 0,
        set2goal: 12,
        d13ex7set2reps: 0,
        d13ex7set2weight: 0,
      },
    ],
    day14: [
      {
        name: "Deadlift",
        set1goal: 5,
        d14ex1set1reps: 0,
        d14ex1set1weight: 0,
        set2goal: 8,
        d14ex1set2reps: 0,
        d14ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d14ex2set1reps: 0,
        d14ex2set1weight: 0,
        set2goal: 12,
        d14ex2set2reps: 0,
        d14ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d14ex3set1reps: 0,
        d14ex3set1weight: 0,
        set2goal: 12,
        d14ex3set2reps: 0,
        d14ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d14ex4set1reps: 0,
        d14ex4set1weight: 0,
        set2goal: 12,
        d14ex4set2reps: 0,
        d14ex4set2weight: 0,
        set3goal: 12,
        d14ex4set3reps: 0,
        d14ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d14ex5set1reps: 0,
        d14ex5set1weight: 0,
        set2goal: 12,
        d14ex5set2reps: 0,
        d14ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d14ex6set1reps: 0,
        d14ex6set1weight: 0,
        set2goal: 12,
        d14ex6set2reps: 0,
        d14ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d14ex7set1reps: 0,
        d14ex7set1weight: 0,
        set2goal: 12,
        d14ex7set2reps: 0,
        d14ex7set2weight: 0,
      },
    ],
    day15: [
      {
        name: "Deadlift",
        set1goal: 5,
        d15ex1set1reps: 0,
        d15ex1set1weight: 0,
        set2goal: 8,
        d15ex1set2reps: 0,
        d15ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d15ex2set1reps: 0,
        d15ex2set1weight: 0,
        set2goal: 12,
        d15ex2set2reps: 0,
        d15ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d15ex3set1reps: 0,
        d15ex3set1weight: 0,
        set2goal: 12,
        d15ex3set2reps: 0,
        d15ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d15ex4set1reps: 0,
        d15ex4set1weight: 0,
        set2goal: 12,
        d15ex4set2reps: 0,
        d15ex4set2weight: 0,
        set3goal: 12,
        d15ex4set3reps: 0,
        d15ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d15ex5set1reps: 0,
        d15ex5set1weight: 0,
        set2goal: 12,
        d15ex5set2reps: 0,
        d15ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d15ex6set1reps: 0,
        d15ex6set1weight: 0,
        set2goal: 12,
        d15ex6set2reps: 0,
        d15ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d15ex7set1reps: 0,
        d15ex7set1weight: 0,
        set2goal: 12,
        d15ex7set2reps: 0,
        d15ex7set2weight: 0,
      },
    ],
    day16: [
      {
        name: "Deadlift",
        set1goal: 5,
        d16ex1set1reps: 0,
        d16ex1set1weight: 0,
        set2goal: 8,
        d16ex1set2reps: 0,
        d16ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d16ex2set1reps: 0,
        d16ex2set1weight: 0,
        set2goal: 12,
        d16ex2set2reps: 0,
        d16ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d16ex3set1reps: 0,
        d16ex3set1weight: 0,
        set2goal: 12,
        d16ex3set2reps: 0,
        d16ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d16ex4set1reps: 0,
        d16ex4set1weight: 0,
        set2goal: 12,
        d16ex4set2reps: 0,
        d16ex4set2weight: 0,
        set3goal: 12,
        d16ex4set3reps: 0,
        d16ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d16ex5set1reps: 0,
        d16ex5set1weight: 0,
        set2goal: 12,
        d16ex5set2reps: 0,
        d16ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d16ex6set1reps: 0,
        d16ex6set1weight: 0,
        set2goal: 12,
        d16ex6set2reps: 0,
        d16ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d16ex7set1reps: 0,
        d16ex7set1weight: 0,
        set2goal: 12,
        d16ex7set2reps: 0,
        d16ex7set2weight: 0,
      },
    ],
    day17: [
      {
        name: "Deadlift",
        set1goal: 5,
        d17ex1set1reps: 0,
        d17ex1set1weight: 0,
        set2goal: 8,
        d17ex1set2reps: 0,
        d17ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d17ex2set1reps: 0,
        d17ex2set1weight: 0,
        set2goal: 12,
        d17ex2set2reps: 0,
        d17ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d17ex3set1reps: 0,
        d17ex3set1weight: 0,
        set2goal: 12,
        d17ex3set2reps: 0,
        d17ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d17ex4set1reps: 0,
        d17ex4set1weight: 0,
        set2goal: 12,
        d17ex4set2reps: 0,
        d17ex4set2weight: 0,
        set3goal: 12,
        d17ex4set3reps: 0,
        d17ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d17ex5set1reps: 0,
        d17ex5set1weight: 0,
        set2goal: 12,
        d17ex5set2reps: 0,
        d17ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d17ex6set1reps: 0,
        d17ex6set1weight: 0,
        set2goal: 12,
        d17ex6set2reps: 0,
        d17ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d17ex7set1reps: 0,
        d17ex7set1weight: 0,
        set2goal: 12,
        d17ex7set2reps: 0,
        d17ex7set2weight: 0,
      },
    ],
    day18: [
      {
        name: "Deadlift",
        set1goal: 5,
        d18ex1set1reps: 0,
        d18ex1set1weight: 0,
        set2goal: 8,
        d18ex1set2reps: 0,
        d18ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d18ex2set1reps: 0,
        d18ex2set1weight: 0,
        set2goal: 12,
        d18ex2set2reps: 0,
        d18ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d18ex3set1reps: 0,
        d18ex3set1weight: 0,
        set2goal: 12,
        d18ex3set2reps: 0,
        d18ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d18ex4set1reps: 0,
        d18ex4set1weight: 0,
        set2goal: 12,
        d18ex4set2reps: 0,
        d18ex4set2weight: 0,
        set3goal: 12,
        d18ex4set3reps: 0,
        d18ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d18ex5set1reps: 0,
        d18ex5set1weight: 0,
        set2goal: 12,
        d18ex5set2reps: 0,
        d18ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d18ex6set1reps: 0,
        d18ex6set1weight: 0,
        set2goal: 12,
        d18ex6set2reps: 0,
        d18ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d18ex7set1reps: 0,
        d18ex7set1weight: 0,
        set2goal: 12,
        d18ex7set2reps: 0,
        d18ex7set2weight: 0,
      },
    ],
  },
  {
    planName: "Full-body",
    ref: true,
    type: "gym",
    numberOfDays: 3,
    day1: [
      {
        name: "Deadlift",
        set1goal: 5,
        d1ex1set1reps: 0,
        d1ex1set1weight: 0,
        set2goal: 8,
        d1ex1set2reps: 0,
        d1ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d1ex2set1reps: 0,
        d1ex2set1weight: 0,
        set2goal: 12,
        d1ex2set2reps: 0,
        d1ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d1ex3set1reps: 0,
        d1ex3set1weight: 0,
        set2goal: 12,
        d1ex3set2reps: 0,
        d1ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d1ex4set1reps: 0,
        d1ex4set1weight: 0,
        set2goal: 12,
        d1ex4set2reps: 0,
        d1ex4set2weight: 0,
        set3goal: 12,
        d1ex4set3reps: 0,
        d1ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d1ex5set1reps: 0,
        d1ex5set1weight: 0,
        set2goal: 12,
        d1ex5set2reps: 0,
        d1ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d1ex6set1reps: 0,
        d1ex6set1weight: 0,
        set2goal: 12,
        d1ex6set2reps: 0,
        d1ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d1ex7set1reps: 0,
        d1ex7set1weight: 0,
        set2goal: 12,
        d1ex7set2reps: 0,
        d1ex7set2weight: 0,
      },
    ],
    day2: [
      {
        name: "Deadlift",
        set1goal: 5,
        d2ex1set1reps: 0,
        d2ex1set1weight: 0,
        set2goal: 8,
        d2ex1set2reps: 0,
        d2ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d2ex2set1reps: 0,
        d2ex2set1weight: 0,
        set2goal: 12,
        d2ex2set2reps: 0,
        d2ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d2ex3set1reps: 0,
        d2ex3set1weight: 0,
        set2goal: 12,
        d2ex3set2reps: 0,
        d2ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d2ex4set1reps: 0,
        d2ex4set1weight: 0,
        set2goal: 12,
        d2ex4set2reps: 0,
        d2ex4set2weight: 0,
        set3goal: 12,
        d2ex4set3reps: 0,
        d2ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d2ex5set1reps: 0,
        d2ex5set1weight: 0,
        set2goal: 12,
        d2ex5set2reps: 0,
        d2ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d2ex6set1reps: 0,
        d2ex6set1weight: 0,
        set2goal: 12,
        d2ex6set2reps: 0,
        d2ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d2ex7set1reps: 0,
        d2ex7set1weight: 0,
        set2goal: 12,
        d2ex7set2reps: 0,
        d2ex7set2weight: 0,
      },
    ],
    day3: [
      {
        name: "Deadlift",
        set1goal: 5,
        d3ex1set1reps: 0,
        d3ex1set1weight: 0,
        set2goal: 8,
        d3ex1set2reps: 0,
        d3ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d3ex2set1reps: 0,
        d3ex2set1weight: 0,
        set2goal: 12,
        d3ex2set2reps: 0,
        d3ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d3ex3set1reps: 0,
        d3ex3set1weight: 0,
        set2goal: 12,
        d3ex3set2reps: 0,
        d3ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d3ex4set1reps: 0,
        d3ex4set1weight: 0,
        set2goal: 12,
        d3ex4set2reps: 0,
        d3ex4set2weight: 0,
        set3goal: 12,
        d3ex4set3reps: 0,
        d3ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d3ex5set1reps: 0,
        d3ex5set1weight: 0,
        set2goal: 12,
        d3ex5set2reps: 0,
        d3ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d3ex6set1reps: 0,
        d3ex6set1weight: 0,
        set2goal: 12,
        d3ex6set2reps: 0,
        d3ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d1ex7set1reps: 0,
        d3ex7set1weight: 0,
        set2goal: 12,
        d3ex7set2reps: 0,
        d3ex7set2weight: 0,
      },
    ],
    day4: [
      {
        name: "Deadlift",
        set1goal: 5,
        d4ex1set1reps: 0,
        d4ex1set1weight: 0,
        set2goal: 8,
        d4ex1set2reps: 0,
        d4ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d4ex2set1reps: 0,
        d4ex2set1weight: 0,
        set2goal: 12,
        d4ex2set2reps: 0,
        d4ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d4ex3set1reps: 0,
        d4ex3set1weight: 0,
        set2goal: 12,
        d4ex3set2reps: 0,
        d4ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d4ex4set1reps: 0,
        d4ex4set1weight: 0,
        set2goal: 12,
        d4ex4set2reps: 0,
        d4ex4set2weight: 0,
        set3goal: 12,
        d4ex4set3reps: 0,
        d4ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d4ex5set1reps: 0,
        d4ex5set1weight: 0,
        set2goal: 12,
        d4ex5set2reps: 0,
        d4ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d4ex6set1reps: 0,
        d4ex6set1weight: 0,
        set2goal: 12,
        d4ex6set2reps: 0,
        d4ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d4ex7set1reps: 0,
        d4ex7set1weight: 0,
        set2goal: 12,
        d4ex7set2reps: 0,
        d4ex7set2weight: 0,
      },
    ],
    day5: [
      {
        name: "Deadlift",
        set1goal: 5,
        d5ex1set1reps: 0,
        d5ex1set1weight: 0,
        set2goal: 8,
        d5ex1set2reps: 0,
        d5ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d5ex2set1reps: 0,
        d5ex2set1weight: 0,
        set2goal: 12,
        d5ex2set2reps: 0,
        d5ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d5ex3set1reps: 0,
        d5ex3set1weight: 0,
        set2goal: 12,
        d5ex3set2reps: 0,
        d5ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d5ex4set1reps: 0,
        d5ex4set1weight: 0,
        set2goal: 12,
        d5ex4set2reps: 0,
        d5ex4set2weight: 0,
        set3goal: 12,
        d5ex4set3reps: 0,
        d5ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d5ex5set1reps: 0,
        d5ex5set1weight: 0,
        set2goal: 12,
        d5ex5set2reps: 0,
        d5ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d5ex6set1reps: 0,
        d5ex6set1weight: 0,
        set2goal: 12,
        d5ex6set2reps: 0,
        d5ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d5ex7set1reps: 0,
        d5ex7set1weight: 0,
        set2goal: 12,
        d5ex7set2reps: 0,
        d5ex7set2weight: 0,
      },
    ],
    day6: [
      {
        name: "Deadlift",
        set1goal: 5,
        d6ex1set1reps: 0,
        d6ex1set1weight: 0,
        set2goal: 8,
        d6ex1set2reps: 0,
        d6ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d6ex2set1reps: 0,
        d6ex2set1weight: 0,
        set2goal: 12,
        d6ex2set2reps: 0,
        d6ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d6ex3set1reps: 0,
        d6ex3set1weight: 0,
        set2goal: 12,
        d6ex3set2reps: 0,
        d6ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d6ex4set1reps: 0,
        d6ex4set1weight: 0,
        set2goal: 12,
        d6ex4set2reps: 0,
        d6ex4set2weight: 0,
        set3goal: 12,
        d6ex4set3reps: 0,
        d6ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d6ex5set1reps: 0,
        d6ex5set1weight: 0,
        set2goal: 12,
        d6ex5set2reps: 0,
        d6ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d6ex6set1reps: 0,
        d6ex6set1weight: 0,
        set2goal: 12,
        d6ex6set2reps: 0,
        d6ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d6ex7set1reps: 0,
        d6ex7set1weight: 0,
        set2goal: 12,
        d6ex7set2reps: 0,
        d6ex7set2weight: 0,
      },
    ],
    day7: [
      {
        name: "Deadlift",
        set1goal: 5,
        d7ex1set1reps: 0,
        d7ex1set1weight: 0,
        set2goal: 8,
        d7ex1set2reps: 0,
        d7ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d7ex2set1reps: 0,
        d7ex2set1weight: 0,
        set2goal: 12,
        d7ex2set2reps: 0,
        d7ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d7ex3set1reps: 0,
        d7ex3set1weight: 0,
        set2goal: 12,
        d7ex3set2reps: 0,
        d7ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d7ex4set1reps: 0,
        d7ex4set1weight: 0,
        set2goal: 12,
        d7ex4set2reps: 0,
        d7ex4set2weight: 0,
        set3goal: 12,
        d7ex4set3reps: 0,
        d7ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d7ex5set1reps: 0,
        d7ex5set1weight: 0,
        set2goal: 12,
        d7ex5set2reps: 0,
        d7ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d7ex6set1reps: 0,
        d7ex6set1weight: 0,
        set2goal: 12,
        d7ex6set2reps: 0,
        d7ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d7ex7set1reps: 0,
        d7ex7set1weight: 0,
        set2goal: 12,
        d7ex7set2reps: 0,
        d7ex7set2weight: 0,
      },
    ],
    day8: [
      {
        name: "Deadlift",
        set1goal: 5,
        d8ex1set1reps: 0,
        d8ex1set1weight: 0,
        set2goal: 8,
        d8ex1set2reps: 0,
        d8ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d8ex2set1reps: 0,
        d8ex2set1weight: 0,
        set2goal: 12,
        d8ex2set2reps: 0,
        d8ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d8ex3set1reps: 0,
        d8ex3set1weight: 0,
        set2goal: 12,
        d8ex3set2reps: 0,
        d8ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d8ex4set1reps: 0,
        d8ex4set1weight: 0,
        set2goal: 12,
        d8ex4set2reps: 0,
        d8ex4set2weight: 0,
        set3goal: 12,
        d8ex4set3reps: 0,
        d8ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d8ex5set1reps: 0,
        d8ex5set1weight: 0,
        set2goal: 12,
        d8ex5set2reps: 0,
        d8ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d8ex6set1reps: 0,
        d8ex6set1weight: 0,
        set2goal: 12,
        d8ex6set2reps: 0,
        d8ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d8ex7set1reps: 0,
        d8ex7set1weight: 0,
        set2goal: 12,
        d8ex7set2reps: 0,
        d8ex7set2weight: 0,
      },
    ],
    day9: [
      {
        name: "Deadlift",
        set1goal: 5,
        d9ex1set1reps: 0,
        d9ex1set1weight: 0,
        set2goal: 8,
        d9ex1set2reps: 0,
        d9ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d9ex2set1reps: 0,
        d9ex2set1weight: 0,
        set2goal: 12,
        d9ex2set2reps: 0,
        d9ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d9ex3set1reps: 0,
        d9ex3set1weight: 0,
        set2goal: 12,
        d9ex3set2reps: 0,
        d9ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d9ex4set1reps: 0,
        d9ex4set1weight: 0,
        set2goal: 12,
        d9ex4set2reps: 0,
        d9ex4set2weight: 0,
        set3goal: 12,
        d9ex4set3reps: 0,
        d9ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d9ex5set1reps: 0,
        d9ex5set1weight: 0,
        set2goal: 12,
        d9ex5set2reps: 0,
        d9ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d9ex6set1reps: 0,
        d9ex6set1weight: 0,
        set2goal: 12,
        d9ex6set2reps: 0,
        d9ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d9ex7set1reps: 0,
        d9ex7set1weight: 0,
        set2goal: 12,
        d9ex7set2reps: 0,
        d9ex7set2weight: 0,
      },
    ],
  },
  {
    planName: "Full-body",
    ref: true,
    type: "gym",
    numberOfDays: 5,
    day1: [
      {
        name: "Deadlift",
        set1goal: 5,
        d1ex1set1reps: 0,
        d1ex1set1weight: 0,
        set2goal: 8,
        d1ex1set2reps: 0,
        d1ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d1ex2set1reps: 0,
        d1ex2set1weight: 0,
        set2goal: 12,
        d1ex2set2reps: 0,
        d1ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d1ex3set1reps: 0,
        d1ex3set1weight: 0,
        set2goal: 12,
        d1ex3set2reps: 0,
        d1ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d1ex4set1reps: 0,
        d1ex4set1weight: 0,
        set2goal: 12,
        d1ex4set2reps: 0,
        d1ex4set2weight: 0,
        set3goal: 12,
        d1ex4set3reps: 0,
        d1ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d1ex5set1reps: 0,
        d1ex5set1weight: 0,
        set2goal: 12,
        d1ex5set2reps: 0,
        d1ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d1ex6set1reps: 0,
        d1ex6set1weight: 0,
        set2goal: 12,
        d1ex6set2reps: 0,
        d1ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d1ex7set1reps: 0,
        d1ex7set1weight: 0,
        set2goal: 12,
        d1ex7set2reps: 0,
        d1ex7set2weight: 0,
      },
    ],
    day2: [
      {
        name: "Deadlift",
        set1goal: 5,
        d2ex1set1reps: 0,
        d2ex1set1weight: 0,
        set2goal: 8,
        d2ex1set2reps: 0,
        d2ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d2ex2set1reps: 0,
        d2ex2set1weight: 0,
        set2goal: 12,
        d2ex2set2reps: 0,
        d2ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d2ex3set1reps: 0,
        d2ex3set1weight: 0,
        set2goal: 12,
        d2ex3set2reps: 0,
        d2ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d2ex4set1reps: 0,
        d2ex4set1weight: 0,
        set2goal: 12,
        d2ex4set2reps: 0,
        d2ex4set2weight: 0,
        set3goal: 12,
        d2ex4set3reps: 0,
        d2ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d2ex5set1reps: 0,
        d2ex5set1weight: 0,
        set2goal: 12,
        d2ex5set2reps: 0,
        d2ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d2ex6set1reps: 0,
        d2ex6set1weight: 0,
        set2goal: 12,
        d2ex6set2reps: 0,
        d2ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d2ex7set1reps: 0,
        d2ex7set1weight: 0,
        set2goal: 12,
        d2ex7set2reps: 0,
        d2ex7set2weight: 0,
      },
    ],
    day3: [
      {
        name: "Deadlift",
        set1goal: 5,
        d3ex1set1reps: 0,
        d3ex1set1weight: 0,
        set2goal: 8,
        d3ex1set2reps: 0,
        d3ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d3ex2set1reps: 0,
        d3ex2set1weight: 0,
        set2goal: 12,
        d3ex2set2reps: 0,
        d3ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d3ex3set1reps: 0,
        d3ex3set1weight: 0,
        set2goal: 12,
        d3ex3set2reps: 0,
        d3ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d3ex4set1reps: 0,
        d3ex4set1weight: 0,
        set2goal: 12,
        d3ex4set2reps: 0,
        d3ex4set2weight: 0,
        set3goal: 12,
        d3ex4set3reps: 0,
        d3ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d3ex5set1reps: 0,
        d3ex5set1weight: 0,
        set2goal: 12,
        d3ex5set2reps: 0,
        d3ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d3ex6set1reps: 0,
        d3ex6set1weight: 0,
        set2goal: 12,
        d3ex6set2reps: 0,
        d3ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d1ex7set1reps: 0,
        d3ex7set1weight: 0,
        set2goal: 12,
        d3ex7set2reps: 0,
        d3ex7set2weight: 0,
      },
    ],
    day4: [
      {
        name: "Deadlift",
        set1goal: 5,
        d4ex1set1reps: 0,
        d4ex1set1weight: 0,
        set2goal: 8,
        d4ex1set2reps: 0,
        d4ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d4ex2set1reps: 0,
        d4ex2set1weight: 0,
        set2goal: 12,
        d4ex2set2reps: 0,
        d4ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d4ex3set1reps: 0,
        d4ex3set1weight: 0,
        set2goal: 12,
        d4ex3set2reps: 0,
        d4ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d4ex4set1reps: 0,
        d4ex4set1weight: 0,
        set2goal: 12,
        d4ex4set2reps: 0,
        d4ex4set2weight: 0,
        set3goal: 12,
        d4ex4set3reps: 0,
        d4ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d4ex5set1reps: 0,
        d4ex5set1weight: 0,
        set2goal: 12,
        d4ex5set2reps: 0,
        d4ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d4ex6set1reps: 0,
        d4ex6set1weight: 0,
        set2goal: 12,
        d4ex6set2reps: 0,
        d4ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d4ex7set1reps: 0,
        d4ex7set1weight: 0,
        set2goal: 12,
        d4ex7set2reps: 0,
        d4ex7set2weight: 0,
      },
    ],
    day5: [
      {
        name: "Deadlift",
        set1goal: 5,
        d5ex1set1reps: 0,
        d5ex1set1weight: 0,
        set2goal: 8,
        d5ex1set2reps: 0,
        d5ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d5ex2set1reps: 0,
        d5ex2set1weight: 0,
        set2goal: 12,
        d5ex2set2reps: 0,
        d5ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d5ex3set1reps: 0,
        d5ex3set1weight: 0,
        set2goal: 12,
        d5ex3set2reps: 0,
        d5ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d5ex4set1reps: 0,
        d5ex4set1weight: 0,
        set2goal: 12,
        d5ex4set2reps: 0,
        d5ex4set2weight: 0,
        set3goal: 12,
        d5ex4set3reps: 0,
        d5ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d5ex5set1reps: 0,
        d5ex5set1weight: 0,
        set2goal: 12,
        d5ex5set2reps: 0,
        d5ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d5ex6set1reps: 0,
        d5ex6set1weight: 0,
        set2goal: 12,
        d5ex6set2reps: 0,
        d5ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d5ex7set1reps: 0,
        d5ex7set1weight: 0,
        set2goal: 12,
        d5ex7set2reps: 0,
        d5ex7set2weight: 0,
      },
    ],
    day6: [
      {
        name: "Deadlift",
        set1goal: 5,
        d6ex1set1reps: 0,
        d6ex1set1weight: 0,
        set2goal: 8,
        d6ex1set2reps: 0,
        d6ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d6ex2set1reps: 0,
        d6ex2set1weight: 0,
        set2goal: 12,
        d6ex2set2reps: 0,
        d6ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d6ex3set1reps: 0,
        d6ex3set1weight: 0,
        set2goal: 12,
        d6ex3set2reps: 0,
        d6ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d6ex4set1reps: 0,
        d6ex4set1weight: 0,
        set2goal: 12,
        d6ex4set2reps: 0,
        d6ex4set2weight: 0,
        set3goal: 12,
        d6ex4set3reps: 0,
        d6ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d6ex5set1reps: 0,
        d6ex5set1weight: 0,
        set2goal: 12,
        d6ex5set2reps: 0,
        d6ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d6ex6set1reps: 0,
        d6ex6set1weight: 0,
        set2goal: 12,
        d6ex6set2reps: 0,
        d6ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d6ex7set1reps: 0,
        d6ex7set1weight: 0,
        set2goal: 12,
        d6ex7set2reps: 0,
        d6ex7set2weight: 0,
      },
    ],
    day7: [
      {
        name: "Deadlift",
        set1goal: 5,
        d7ex1set1reps: 0,
        d7ex1set1weight: 0,
        set2goal: 8,
        d7ex1set2reps: 0,
        d7ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d7ex2set1reps: 0,
        d7ex2set1weight: 0,
        set2goal: 12,
        d7ex2set2reps: 0,
        d7ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d7ex3set1reps: 0,
        d7ex3set1weight: 0,
        set2goal: 12,
        d7ex3set2reps: 0,
        d7ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d7ex4set1reps: 0,
        d7ex4set1weight: 0,
        set2goal: 12,
        d7ex4set2reps: 0,
        d7ex4set2weight: 0,
        set3goal: 12,
        d7ex4set3reps: 0,
        d7ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d7ex5set1reps: 0,
        d7ex5set1weight: 0,
        set2goal: 12,
        d7ex5set2reps: 0,
        d7ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d7ex6set1reps: 0,
        d7ex6set1weight: 0,
        set2goal: 12,
        d7ex6set2reps: 0,
        d7ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d7ex7set1reps: 0,
        d7ex7set1weight: 0,
        set2goal: 12,
        d7ex7set2reps: 0,
        d7ex7set2weight: 0,
      },
    ],
    day8: [
      {
        name: "Deadlift",
        set1goal: 5,
        d8ex1set1reps: 0,
        d8ex1set1weight: 0,
        set2goal: 8,
        d8ex1set2reps: 0,
        d8ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d8ex2set1reps: 0,
        d8ex2set1weight: 0,
        set2goal: 12,
        d8ex2set2reps: 0,
        d8ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d8ex3set1reps: 0,
        d8ex3set1weight: 0,
        set2goal: 12,
        d8ex3set2reps: 0,
        d8ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d8ex4set1reps: 0,
        d8ex4set1weight: 0,
        set2goal: 12,
        d8ex4set2reps: 0,
        d8ex4set2weight: 0,
        set3goal: 12,
        d8ex4set3reps: 0,
        d8ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d8ex5set1reps: 0,
        d8ex5set1weight: 0,
        set2goal: 12,
        d8ex5set2reps: 0,
        d8ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d8ex6set1reps: 0,
        d8ex6set1weight: 0,
        set2goal: 12,
        d8ex6set2reps: 0,
        d8ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d8ex7set1reps: 0,
        d8ex7set1weight: 0,
        set2goal: 12,
        d8ex7set2reps: 0,
        d8ex7set2weight: 0,
      },
    ],
    day9: [
      {
        name: "Deadlift",
        set1goal: 5,
        d9ex1set1reps: 0,
        d9ex1set1weight: 0,
        set2goal: 8,
        d9ex1set2reps: 0,
        d9ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d9ex2set1reps: 0,
        d9ex2set1weight: 0,
        set2goal: 12,
        d9ex2set2reps: 0,
        d9ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d9ex3set1reps: 0,
        d9ex3set1weight: 0,
        set2goal: 12,
        d9ex3set2reps: 0,
        d9ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d9ex4set1reps: 0,
        d9ex4set1weight: 0,
        set2goal: 12,
        d9ex4set2reps: 0,
        d9ex4set2weight: 0,
        set3goal: 12,
        d9ex4set3reps: 0,
        d9ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d9ex5set1reps: 0,
        d9ex5set1weight: 0,
        set2goal: 12,
        d9ex5set2reps: 0,
        d9ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d9ex6set1reps: 0,
        d9ex6set1weight: 0,
        set2goal: 12,
        d9ex6set2reps: 0,
        d9ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d9ex7set1reps: 0,
        d9ex7set1weight: 0,
        set2goal: 12,
        d9ex7set2reps: 0,
        d9ex7set2weight: 0,
      },
    ],
    day10: [
      {
        name: "Deadlift",
        set1goal: 5,
        d10ex1set1reps: 0,
        d10ex1set1weight: 0,
        set2goal: 8,
        d10ex1set2reps: 0,
        d10ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d10ex2set1reps: 0,
        d10ex2set1weight: 0,
        set2goal: 12,
        d10ex2set2reps: 0,
        d10ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d10ex3set1reps: 0,
        d10ex3set1weight: 0,
        set2goal: 12,
        d10ex3set2reps: 0,
        d10ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d10ex4set1reps: 0,
        d10ex4set1weight: 0,
        set2goal: 12,
        d10ex4set2reps: 0,
        d10ex4set2weight: 0,
        set3goal: 12,
        d10ex4set3reps: 0,
        d10ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d10ex5set1reps: 0,
        d10ex5set1weight: 0,
        set2goal: 12,
        d10ex5set2reps: 0,
        d10ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d10ex6set1reps: 0,
        d10ex6set1weight: 0,
        set2goal: 12,
        d10ex6set2reps: 0,
        d10ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d10ex7set1reps: 0,
        d10ex7set1weight: 0,
        set2goal: 12,
        d10ex7set2reps: 0,
        d10ex7set2weight: 0,
      },
    ],
    day11: [
      {
        name: "Deadlift",
        set1goal: 5,
        d11ex1set1reps: 0,
        d11ex1set1weight: 0,
        set2goal: 8,
        d11ex1set2reps: 0,
        d11ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d11ex2set1reps: 0,
        d11ex2set1weight: 0,
        set2goal: 12,
        d11ex2set2reps: 0,
        d11ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d11ex3set1reps: 0,
        d11ex3set1weight: 0,
        set2goal: 12,
        d11ex3set2reps: 0,
        d11ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d11ex4set1reps: 0,
        d11ex4set1weight: 0,
        set2goal: 12,
        d11ex4set2reps: 0,
        d11ex4set2weight: 0,
        set3goal: 12,
        d11ex4set3reps: 0,
        d11ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d11ex5set1reps: 0,
        d11ex5set1weight: 0,
        set2goal: 12,
        d11ex5set2reps: 0,
        d11ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d11ex6set1reps: 0,
        d11ex6set1weight: 0,
        set2goal: 12,
        d11ex6set2reps: 0,
        d11ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d11ex7set1reps: 0,
        d11ex7set1weight: 0,
        set2goal: 12,
        d11ex7set2reps: 0,
        d11ex7set2weight: 0,
      },
    ],
    day12: [
      {
        name: "Deadlift",
        set1goal: 5,
        d12ex1set1reps: 0,
        d12ex1set1weight: 0,
        set2goal: 8,
        d12ex1set2reps: 0,
        d12ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d12ex2set1reps: 0,
        d12ex2set1weight: 0,
        set2goal: 12,
        d12ex2set2reps: 0,
        d12ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d12ex3set1reps: 0,
        d12ex3set1weight: 0,
        set2goal: 12,
        d12ex3set2reps: 0,
        d12ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d12ex4set1reps: 0,
        d12ex4set1weight: 0,
        set2goal: 12,
        d12ex4set2reps: 0,
        d12ex4set2weight: 0,
        set3goal: 12,
        d12ex4set3reps: 0,
        d12ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d12ex5set1reps: 0,
        d12ex5set1weight: 0,
        set2goal: 12,
        d12ex5set2reps: 0,
        d12ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d12ex6set1reps: 0,
        d12ex6set1weight: 0,
        set2goal: 12,
        d12ex6set2reps: 0,
        d12ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d12ex7set1reps: 0,
        d12ex7set1weight: 0,
        set2goal: 12,
        d12ex7set2reps: 0,
        d12ex7set2weight: 0,
      },
    ],
    day13: [
      {
        name: "Deadlift",
        set1goal: 5,
        d13ex1set1reps: 0,
        d13ex1set1weight: 0,
        set2goal: 8,
        d13ex1set2reps: 0,
        d13ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d13ex2set1reps: 0,
        d13ex2set1weight: 0,
        set2goal: 12,
        d13ex2set2reps: 0,
        d13ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d13ex3set1reps: 0,
        d13ex3set1weight: 0,
        set2goal: 12,
        d13ex3set2reps: 0,
        d13ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d13ex4set1reps: 0,
        d13ex4set1weight: 0,
        set2goal: 12,
        d13ex4set2reps: 0,
        d13ex4set2weight: 0,
        set3goal: 12,
        d13ex4set3reps: 0,
        d13ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d13ex5set1reps: 0,
        d13ex5set1weight: 0,
        set2goal: 12,
        d13ex5set2reps: 0,
        d13ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d13ex6set1reps: 0,
        d13ex6set1weight: 0,
        set2goal: 12,
        d13ex6set2reps: 0,
        d13ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d13ex7set1reps: 0,
        d13ex7set1weight: 0,
        set2goal: 12,
        d13ex7set2reps: 0,
        d13ex7set2weight: 0,
      },
    ],
    day14: [
      {
        name: "Deadlift",
        set1goal: 5,
        d14ex1set1reps: 0,
        d14ex1set1weight: 0,
        set2goal: 8,
        d14ex1set2reps: 0,
        d14ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d14ex2set1reps: 0,
        d14ex2set1weight: 0,
        set2goal: 12,
        d14ex2set2reps: 0,
        d14ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d14ex3set1reps: 0,
        d14ex3set1weight: 0,
        set2goal: 12,
        d14ex3set2reps: 0,
        d14ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d14ex4set1reps: 0,
        d14ex4set1weight: 0,
        set2goal: 12,
        d14ex4set2reps: 0,
        d14ex4set2weight: 0,
        set3goal: 12,
        d14ex4set3reps: 0,
        d14ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d14ex5set1reps: 0,
        d14ex5set1weight: 0,
        set2goal: 12,
        d14ex5set2reps: 0,
        d14ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d14ex6set1reps: 0,
        d14ex6set1weight: 0,
        set2goal: 12,
        d14ex6set2reps: 0,
        d14ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d14ex7set1reps: 0,
        d14ex7set1weight: 0,
        set2goal: 12,
        d14ex7set2reps: 0,
        d14ex7set2weight: 0,
      },
    ],
    day15: [
      {
        name: "Deadlift",
        set1goal: 5,
        d15ex1set1reps: 0,
        d15ex1set1weight: 0,
        set2goal: 8,
        d15ex1set2reps: 0,
        d15ex1set2weight: 0,
      },
      {
        name: "Pendlay row",
        set1goal: 8,
        d15ex2set1reps: 0,
        d15ex2set1weight: 0,
        set2goal: 12,
        d15ex2set2reps: 0,
        d15ex2set2weight: 0,
      },
      {
        name: "Flat bench press",
        set1goal: 12,
        d15ex3set1reps: 0,
        d15ex3set1weight: 0,
        set2goal: 12,
        d15ex3set2reps: 0,
        d15ex3set2weight: 0,
      },
      {
        name: "Wide grip dips",
        set1goal: 12,
        d15ex4set1reps: 0,
        d15ex4set1weight: 0,
        set2goal: 12,
        d15ex4set2reps: 0,
        d15ex4set2weight: 0,
        set3goal: 12,
        d15ex4set3reps: 0,
        d15ex4set3weight: 0,
      },
      {
        name: "Smith shoulder press",
        set1goal: 12,
        d15ex5set1reps: 0,
        d15ex5set1weight: 0,
        set2goal: 12,
        d15ex5set2reps: 0,
        d15ex5set2weight: 0,
      },
      {
        name: "Wide grip upright row",
        set1goal: 12,
        d15ex6set1reps: 0,
        d15ex6set1weight: 0,
        set2goal: 12,
        d15ex6set2reps: 0,
        d15ex6set2weight: 0,
      },
      {
        name: "Back squat",
        set1goal: 12,
        d15ex7set1reps: 0,
        d15ex7set1weight: 0,
        set2goal: 12,
        d15ex7set2reps: 0,
        d15ex7set2weight: 0,
      },
    ],
  },
  {
    planName: "Treat yo self",
    ref: true,
    type: "crossfit",
    numberOfDays: 6,
    day1: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day2: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day3: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day4: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day5: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day6: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day7: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day8: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day9: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day10: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day11: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day12: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day13: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day14: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day15: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day16: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day17: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day18: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
  },
  {
    planName: "Treat yo self",
    ref: true,
    type: "crossfit",
    numberOfDays: 5,
    day1: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day2: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day3: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day4: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day5: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day6: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day7: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day8: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day9: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day10: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day11: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day12: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day13: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day14: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day15: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
  },
  {
    planName: "Treat yo self",
    ref: true,
    type: "crossfit",
    numberOfDays: 3,
    day1: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day2: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day3: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day4: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day5: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day6: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day7: [
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Air squats",
        set1goal: 40,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 300,
      },
      {
        name: "Push ups",
        set1goal: 30,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
      {
        name: "Run",
        set1goal: 200,
      },
      {
        name: "Strict pull ups",
        set1goal: 20,
      },
    ],
    day8: [
      {
        name: "Deadlift",
        set1goal: 30,
      },
      {
        name: "Box jump over",
        set1goal: 30,
      },
      {
        name: "Deadlift",
        set1goal: 20,
      },
      {
        name: "Box jump over",
        set1goal: 20,
      },
      {
        name: "Deadlift",
        set1goal: 10,
      },
      {
        name: "Box jump over",
        set1goal: 10,
      },
      {
        name: "Deadlift",
        set1goal: 15,
      },
      {
        name: "Box jump over",
        set1goal: 15,
      },
      {
        name: "Deadlift",
        set1goal: 12,
      },
      {
        name: "Box jump over",
        set1goal: 12,
      },
      {
        name: "Deadlift",
        set1goal: 9,
      },
      {
        name: "Box jump over",
        set1goal: 9,
      },
    ],
    day9: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
  },
  {
    planName: "Ice and Fire",
    ref: true,
    type: "crossfit",
    numberOfDays: 6,
    day1: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day2: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day3: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day4: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day5: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day6: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day7: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day8: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day9: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day10: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day11: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day12: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day13: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day14: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day15: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day16: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day17: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day18: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
  },
  {
    planName: "Ice and Fire",
    ref: true,
    type: "crossfit",
    numberOfDays: 5,
    day1: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day2: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day3: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day4: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day5: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day6: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day7: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day8: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day9: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day10: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day11: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day12: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day13: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day14: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day15: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
  },
  {
    planName: "Ice and Fire",
    ref: true,
    type: "crossfit",
    numberOfDays: 3,
    day1: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day2: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day3: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day4: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day5: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day6: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
    day7: [
      {
        name: "Strict hand push up",
        set1goal: 21,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Strict hand push up",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 15,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Power snatches",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 12,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 9,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
      {
        name: "Sandbag cleans",
        set1goal: 6,
      },
      {
        name: "Sled push",
        set1goal: 75,
      },
    ],
    day8: [
      {
        name: "Run",
        set1goal: 1200,
      },
      {
        name: "Kettlebell swing",
        set1goal: 63,
      },
      {
        name: "Pull ups",
        set1goal: 36,
      },
      {
        name: "Run",
        set1goal: 800,
      },
      {
        name: "Kettlebell swing",
        set1goal: 42,
      },
      {
        name: "Pull ups",
        set1goal: 24,
      },
      {
        name: "Run",
        set1goal: 400,
      },
      {
        name: "Kettlebell swing",
        set1goal: 21,
      },
      {
        name: "Pull ups",
        set1goal: 12,
      },
    ],
    day9: [
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 15,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 10,
      },
      {
        name: "Toes to bar",
        set1goal: 15,
      },
      {
        name: "Overhead squats",
        set1goal: 5,
      },
    ],
  },
  {
    planName: "Hatha yoga",
    ref: true,
    type: "yoga",
    numberOfDays: 6,
    day1: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day2: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day3: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day4: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day5: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day6: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day7: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day8: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day9: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day10: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day11: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day12: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day13: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day14: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day15: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day16: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day17: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day18: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
  },
  {
    planName: "Hatha yoga",
    ref: true,
    type: "yoga",
    numberOfDays: 5,
    day1: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day2: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day3: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day4: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day5: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day6: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day7: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day8: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day9: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day10: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day11: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day12: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day13: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day14: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day15: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
  },
  {
    planName: "Hatha yoga",
    ref: true,
    type: "yoga",
    numberOfDays: 3,
    day1: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day2: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day3: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day4: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day5: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day6: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
    day7: [
      {
        name: "Mountain pose - Tadasana",
      },
      {
        name: "Downward facing dog pose - Svanasana",
      },
      {
        name: "Tree pose - Vrikshasana",
      },
      {
        name: "Seated forward bend pose - Paschimottanasana",
      },
      {
        name: "Cobbler pose - Buddha Konasana",
      },
      {
        name: "Corpse pose - Shavasana",
      },
    ],
    day8: [
      {
        name: "Half-moon pose",
      },
      {
        name: "Hands-to-feet pose",
      },
      {
        name: "Awkward pose",
      },
      {
        name: "Eagle pose",
      },
      {
        name: "Standing head-to-knee pose",
      },
      {
        name: "Standing bow-pulling pose",
      },
      {
        name: "Balance stick pose",
      },
      {
        name: "Standing separate-leg Head-to-knee pose",
      },
      {
        name: "Tree pose",
      },
      {
        name: "Toe stand pose",
      },
      {
        name: "Corpse pose",
      },
      {
        name: "Wind-removing pose",
      },
      {
        name: "Birkram yoga sit-up pose",
      },
      {
        name: "Cobra pose",
      },
      {
        name: "Locust pose",
      },
      {
        name: "Full locust pose",
      },
      {
        name: "Floor bow pose",
      },
      {
        name: "Fixed firm pose",
      },
      {
        name: "Half tortoise pose",
      },
      {
        name: "Camel pose",
      },
      {
        name: "Rabbit pose",
      },
      {
        name: "Head to knee pose",
      },
      {
        name: "Stretching pose",
      },
      {
        name: "Spine twisting pose",
      },
    ],
    day9: [
      {
        name: "Child pose - Balasana",
      },
      {
        name: "Seated cat cow - Upavistha Bitilasana Marjaryasana",
      },
      {
        name: "Supported bridge pose - Setu Bandha Sarvangasana",
      },
      {
        name: "Reclining bound angle pose - Septa Buddha Konasana",
      },
      {
        name: "Thread the Needle Pose - Parsva Balasana",
      },
      {
        name: "Supported Forward Fold - Paschimottanasana",
      },
      {
        name: "Sleeping Pigeon Pose - Eka Pada Rajakapotasana",
      },
      {
        name: "Supine Spinal Twist - Jathara Parivartanasana",
      },
      {
        name: "Supported Fish Pose - Matsyasana",
      },
      {
        name: "Legs Up The Wall - Viparita Karani",
      },
    ],
  },
  {
    planName: "Love yoga",
    ref: true,
    type: "yoga",
    numberOfDays: 6,
    day1: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day2: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day3: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day4: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day5: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day6: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day7: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day8: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day9: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day10: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day11: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day12: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day13: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day14: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day15: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day16: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day17: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day18: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
  },
  {
    planName: "Love yoga",
    ref: true,
    type: "yoga",
    numberOfDays: 5,
    day1: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day2: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day3: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day4: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day5: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day6: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day7: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day8: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day9: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day10: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day11: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day12: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day13: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day14: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day15: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
  },
  {
    planName: "Love yoga",
    ref: true,
    type: "yoga",
    numberOfDays: 3,
    day1: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day2: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day3: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day4: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day5: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day6: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
    day7: [
      {
        name: "Plank pose - Kumbhakasana",
      },
      {
        name: "Four-limbed Staff Pose - Chaturanga Dandasana",
      },
      {
        name: "Upward-facing dog pose - Urdhva Mukha Svanasana",
      },
      {
        name: "Downward-facing dog pose - Adho Mukha Svanasana",
      },
    ],
    day8: [
      {
        name: "Ankle stretch",
      },
      {
        name: "Toe squat",
      },
      {
        name: "Butterfly",
      },
      {
        name: "Reclining twist",
      },
      {
        name: "Child pose",
      },
      {
        name: "Caterpillar",
      },
      {
        name: "Straddle (dragonfly)",
      },
      {
        name: "Sleeping swan",
      },
      {
        name: "Savasana",
      },
    ],
    day9: [
      {
        name: "Deep Breathing - Pranayama",
      },
      {
        name:
          "Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana",
      },
      {
        name: "Awkward pose - Utkatasana",
      },
      {
        name: "Eagle pose - Garurasana",
      },
      {
        name: "Standing head to knee pose - Dandayamana-Janushirasana",
      },
      {
        name: "Standing Bow Pose - Dandayamana-Dhanurasana",
      },
      {
        name: "Balancing stick pose - Tuladandasana",
      },
      {
        name:
          "Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana",
      },
      {
        name: "Triangle pose - Trikonasana",
      },
      {
        name:
          "Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana",
      },
      {
        name: "Tree pose - Tadasana",
      },
      {
        name: "Toe stand pose - Padangustasana",
      },
      {
        name: "Sit-up",
      },
    ],
  },
];

mongoose
  .connect("mongodb://localhost/iron-muscle-connection")
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
Template.insertMany(templates)
  .then((documents) => {
    console.log(`Success” ${documents.length} templates were added`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
