const mongoose = require("mongoose");
const Template = require('../models/Template');
require('dotenv').config();

const templates = [
  {
  planName: "Push-Pull-Leg",
  type: "gym",
  numberOfDays: 3,
  day1: [
      {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Underhand pull-down',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Dumbbel one row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Skull crusher',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Cable hammer curls',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      }
        ],
  day2: [
      {
          name: 'Inclined bench press',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Flat dumbbell press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Dumbbell shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Arnold press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Skull crusher',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Underhand push down',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      }
        ],
  day3: [
      {
          name: 'Front squat',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Leg press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Glute ham raises',
          set1goal: 20,
          set1reps: 0,
          set1weight: 0,
      },
      {
          name: 'Walking lunges',
          set1goal: 20,
          set1reps: 0,
          set1weight: 0,
          set2goal: 20,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Standing calves',
          set1goal: 15,
          set1reps: 0,
          set1weight: 0,
          set2goal: 15,
          set2reps: 0,
          set2weight: 0,
      }
        ],
  day4: [
      {
        name: 'Deadlift',
        set1goal: 5,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'Underhand pull-down',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'Dumbbel one row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'Pendlay row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'Skull crusher',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
      },
      {
        name: 'Cable hammer curls',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
      }
      ],
  day5: [
      {
        name: 'Inclined bench press',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'Flat dumbbell press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
      },
      {
        name: 'Wide grip dips',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
      },
      {
        name: 'Dumbbell shoulder press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
      },
      {
        name: 'Arnold press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
      },
      {
        name: 'Skull crusher',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
      },
      {
        name: 'Underhand push down',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
      }
      ],
  day6: [
      {
        name: 'Front squat',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
      },
      {
        name: 'Leg press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
      },
      {
        name: 'Romanian deadlift',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
      },
      {
        name: 'Glute ham raises',
        set1goal: 20,
        set1reps: 0,
        set1weight: 0,
      },
      {
        name: 'Walking lunges',
        set1goal: 20,
        set1reps: 0,
        set1weight: 0,
        set2goal: 20,
        set2reps: 0,
        set2weight: 0,
      },
      {
        name: 'Standing calves',
        set1goal: 15,
        set1reps: 0,
        set1weight: 0,
        set2goal: 15,
        set2reps: 0,
        set2weight: 0,
      }
        ],
  day7:   [
    {
      name: 'Deadlift',
      set1goal: 5,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0
  },
  {
      name: 'Underhand pull-down',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
  },
  {
      name: 'Dumbbel one row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
  },
  {
      name: 'Pendlay row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
  },
  {
      name: 'Skull crusher',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
  },
  {
      name: 'Cable hammer curls',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
  }
  ],
  day8: [
  {
      name: 'Inclined bench press',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
  },
  {
      name: 'Flat dumbbell press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
  },
  {
      name: 'Wide grip dips',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
  },
  {
      name: 'Dumbbell shoulder press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
  },
  {
      name: 'Arnold press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
  },
  {
      name: 'Skull crusher',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
  },
  {
      name: 'Underhand push down',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
  }
  ],
  day9: [
  {
      name: 'Front squat',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
  },
  {
      name: 'Leg press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
  },
  {
      name: 'Romanian deadlift',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
  },
  {
      name: 'Glute ham raises',
      set1goal: 20,
      set1reps: 0,
      set1weight: 0,
  },
  {
      name: 'Walking lunges',
      set1goal: 20,
      set1reps: 0,
      set1weight: 0,
      set2goal: 20,
      set2reps: 0,
      set2weight: 0,
  },
  {
      name: 'Standing calves',
      set1goal: 15,
      set1reps: 0,
      set1weight: 0,
      set2goal: 15,
      set2reps: 0,
      set2weight: 0,
  }
  ]
  },
  {
  planName: "Push-Pull-Leg",
  type: "gym",
  numberOfDays: 5,
  day1: [
    {
        name: 'Deadlift',
        set1goal: 5,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Underhand pull-down',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Dumbbel one row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Pendlay row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Skull crusher',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Cable hammer curls',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    }
      ],
  day2: [
    {
        name: 'Inclined bench press',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Flat dumbbell press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Wide grip dips',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Dumbbell shoulder press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Arnold press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Skull crusher',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Underhand push down',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    }
      ],
  day3: [
    {
        name: 'Front squat',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Leg press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Romanian deadlift',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Glute ham raises',
        set1goal: 20,
        set1reps: 0,
        set1weight: 0,
    },
    {
        name: 'Walking lunges',
        set1goal: 20,
        set1reps: 0,
        set1weight: 0,
        set2goal: 20,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Standing calves',
        set1goal: 15,
        set1reps: 0,
        set1weight: 0,
        set2goal: 15,
        set2reps: 0,
        set2weight: 0,
    }
      ],
  day4: [
    {
      name: 'Bent over row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'T-Bar row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Close grip chin-up',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0,
        set3goal: 8,
        set3reps: 0,
        set3weight: 0
    },
    {
      name: 'Rack deadlift',
      set1goal: 5,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Barbell curls',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    },
    {
      name: 'Reverse grip cable curls',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    }
    ],
  day5: [
    {
      name: 'Declined bench press',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Inclined dumbbell press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Flat machine press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Seated Smith shoulder press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Wide grip upright row',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Close grip Smith bench press',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Overhead rope extension',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    }
    ],
  day6: [
    {
        name: 'Deadlift',
        set1goal: 5,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Underhand pull-down',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Dumbbel one row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Pendlay row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Skull crusher',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Cable hammer curls',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    }
      ],
  day7: [
    {
        name: 'Inclined bench press',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Flat dumbbell press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Wide grip dips',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Dumbbell shoulder press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Arnold press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Skull crusher',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Underhand push down',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    }
      ],
  day8: [
    {
        name: 'Front squat',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Leg press',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Romanian deadlift',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Glute ham raises',
        set1goal: 20,
        set1reps: 0,
        set1weight: 0,
    },
    {
        name: 'Walking lunges',
        set1goal: 20,
        set1reps: 0,
        set1weight: 0,
        set2goal: 20,
        set2reps: 0,
        set2weight: 0,
    },
    {
        name: 'Standing calves',
        set1goal: 15,
        set1reps: 0,
        set1weight: 0,
        set2goal: 15,
        set2reps: 0,
        set2weight: 0,
    }
      ],
  day9: [
    {
      name: 'Bent over row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'T-Bar row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Close grip chin-up',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0,
        set3goal: 8,
        set3reps: 0,
        set3weight: 0
    },
    {
      name: 'Rack deadlift',
      set1goal: 5,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Barbell curls',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    },
    {
      name: 'Reverse grip cable curls',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    }
    ],
  day10: [
    {
      name: 'Declined bench press',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Inclined dumbbell press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Flat machine press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Seated Smith shoulder press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Wide grip upright row',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Close grip Smith bench press',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Overhead rope extension',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    }
    ],
  day11: [
    {
      name: 'Deadlift',
      set1goal: 5,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Underhand pull-down',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Dumbbel one row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Pendlay row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Skull crusher',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    },
    {
      name: 'Cable hammer curls',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    }
    ],
  day12: [
    {
      name: 'Inclined bench press',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Flat dumbbell press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Wide grip dips',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    },
    {
      name: 'Dumbbell shoulder press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Arnold press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Skull crusher',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    },
    {
      name: 'Underhand push down',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    }
    ],
  day13: [
    {
      name: 'Front squat',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Leg press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    },
    {
      name: 'Romanian deadlift',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Glute ham raises',
      set1goal: 20,
      set1reps: 0,
      set1weight: 0,
    },
    {
      name: 'Walking lunges',
      set1goal: 20,
      set1reps: 0,
      set1weight: 0,
      set2goal: 20,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Standing calves',
      set1goal: 15,
      set1reps: 0,
      set1weight: 0,
      set2goal: 15,
      set2reps: 0,
      set2weight: 0,
    }
    ],
  day14: [
    {
      name: 'Bent over row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'T-Bar row',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0
      },
      {
      name: 'Close grip chin-up',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0,
      set3goal: 8,
      set3reps: 0,
      set3weight: 0
    },
    {
      name: 'Rack deadlift',
      set1goal: 5,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Barbell curls',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    },
    {
      name: 'Reverse grip cable curls',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    }
    ],
  day5: [
    {
      name: 'Declined bench press',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0
    },
    {
      name: 'Inclined dumbbell press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Flat machine press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Seated Smith shoulder press',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Wide grip upright row',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Close grip Smith bench press',
      set1goal: 8,
      set1reps: 0,
      set1weight: 0,
      set2goal: 8,
      set2reps: 0,
      set2weight: 0,
    },
    {
      name: 'Overhead rope extension',
      set1goal: 12,
      set1reps: 0,
      set1weight: 0,
      set2goal: 12,
      set2reps: 0,
      set2weight: 0,
      set3goal: 12,
      set3reps: 0,
      set3weight: 0
    }
    ]
  },
  {
  planName: "Push-Pull-Leg",
  type: "gym",
  numberOfDays: 6,
  day1: [
      {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Underhand pull-down',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Dumbbel one row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Skull crusher',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Cable hammer curls',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      }
        ],
  day2: [
      {
          name: 'Inclined bench press',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Flat dumbbell press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Dumbbell shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Arnold press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Skull crusher',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Underhand push down',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      }
        ],
  day3: [
      {
          name: 'Front squat',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Leg press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Glute ham raises',
          set1goal: 20,
          set1reps: 0,
          set1weight: 0,
      },
      {
          name: 'Walking lunges',
          set1goal: 20,
          set1reps: 0,
          set1weight: 0,
          set2goal: 20,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Standing calves',
          set1goal: 15,
          set1reps: 0,
          set1weight: 0,
          set2goal: 15,
          set2reps: 0,
          set2weight: 0,
      }
        ],
  day4: [
      {
        name: 'Bent over row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'T-Bar row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'Close grip chin-up',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0,
          set3goal: 8,
          set3reps: 0,
          set3weight: 0
      },
      {
        name: 'Rack deadlift',
        set1goal: 5,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'Barbell curls',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
      },
      {
        name: 'Reverse grip cable curls',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
      }
      ],
  day5: [
        {
          name: 'Declined bench press',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Inclined dumbbell press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Flat machine press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Seated Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Close grip Smith bench press',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Overhead rope extension',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        }
        ],
  day6: [
    {
        name: 'Back squat',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0,
        set3goal: 8,
        set3reps: 0,
        set3weight: 0
    },
      {
          name: 'Front squat',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0,
          set3goal: 8,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Laying leg curl',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Adductor',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Abductor',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Seated calves',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      }
        ],
  day7: [
    {
        name: 'Deadlift',
        set1goal: 5,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Underhand pull-down',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Dumbbel one row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Pendlay row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Skull crusher',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Cable hammer curls',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    }
      ],
  day8: [
      {
          name: 'Inclined bench press',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Flat dumbbell press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Dumbbell shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Arnold press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Skull crusher',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Underhand push down',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      }
        ],
  day9: [
      {
          name: 'Front squat',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Leg press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Glute ham raises',
          set1goal: 20,
          set1reps: 0,
          set1weight: 0,
      },
      {
          name: 'Walking lunges',
          set1goal: 20,
          set1reps: 0,
          set1weight: 0,
          set2goal: 20,
          set2reps: 0,
          set2weight: 0,
      },
      {
          name: 'Standing calves',
          set1goal: 15,
          set1reps: 0,
          set1weight: 0,
          set2goal: 15,
          set2reps: 0,
          set2weight: 0,
      }
        ],
  day10: [
      {
        name: 'Bent over row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'T-Bar row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'Close grip chin-up',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0,
          set3goal: 8,
          set3reps: 0,
          set3weight: 0
      },
      {
        name: 'Rack deadlift',
        set1goal: 5,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0
      },
      {
        name: 'Barbell curls',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
      },
      {
        name: 'Reverse grip cable curls',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
      }
      ],
  day11: [
        {
          name: 'Declined bench press',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Inclined dumbbell press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Flat machine press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Seated Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Close grip Smith bench press',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Overhead rope extension',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        }
        ],
  day12: [
    {
        name: 'Back squat',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0,
        set3goal: 8,
        set3reps: 0,
        set3weight: 0
    },
      {
          name: 'Front squat',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0,
          set3goal: 8,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Laying leg curl',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Adductor',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      },
      {
          name: 'Abductor',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
      },
      {
          name: 'Seated calves',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
      }
        ],
  day13: [
    {
        name: 'Deadlift',
        set1goal: 5,
        set1reps: 0,
        set1weight: 0,
        set2goal: 8,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Underhand pull-down',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Dumbbel one row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Pendlay row',
        set1goal: 8,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    },
    {
        name: 'Skull crusher',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0,
        set3goal: 12,
        set3reps: 0,
        set3weight: 0
    },
    {
        name: 'Cable hammer curls',
        set1goal: 12,
        set1reps: 0,
        set1weight: 0,
        set2goal: 12,
        set2reps: 0,
        set2weight: 0
    }
      ],
    day14: [
        {
            name: 'Inclined bench press',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
        },
        {
            name: 'Flat dumbbell press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
        },
        {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
        },
        {
            name: 'Dumbbell shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
        },
        {
            name: 'Arnold press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
        },
        {
            name: 'Skull crusher',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
        },
        {
            name: 'Underhand push down',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
        }
          ],
    day15: [
        {
            name: 'Front squat',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
        },
        {
            name: 'Leg press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
        },
        {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
        },
        {
            name: 'Glute ham raises',
            set1goal: 20,
            set1reps: 0,
            set1weight: 0,
        },
        {
            name: 'Walking lunges',
            set1goal: 20,
            set1reps: 0,
            set1weight: 0,
            set2goal: 20,
            set2reps: 0,
            set2weight: 0,
        },
        {
            name: 'Standing calves',
            set1goal: 15,
            set1reps: 0,
            set1weight: 0,
            set2goal: 15,
            set2reps: 0,
            set2weight: 0,
        }
          ],
    day16: [
        {
          name: 'Bent over row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'T-Bar row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Close grip chin-up',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0,
            set3goal: 8,
            set3reps: 0,
            set3weight: 0
        },
        {
          name: 'Rack deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Barbell curls',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Reverse grip cable curls',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        }
        ],
  day17: [
        {
          name: 'Declined bench press',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Inclined dumbbell press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Flat machine press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Seated Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Close grip Smith bench press',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0,
        },
        {
          name: 'Overhead rope extension',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        }
        ],
    day18: [
      {
          name: 'Back squat',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0,
          set3goal: 8,
          set3reps: 0,
          set3weight: 0
      },
        {
            name: 'Front squat',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0,
            set3goal: 8,
            set3reps: 0,
            set3weight: 0
        },
        {
            name: 'Laying leg curl',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
        },
        {
            name: 'Adductor',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
        },
        {
            name: 'Abductor',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
        },
        {
            name: 'Seated calves',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
        }
          ]
        },
      {
        planName: 'Full-body',
        type: 'gym',
        numberOfDays: 6,
        day1: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day2: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day3: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day4: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day5: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day6: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day7: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day8: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day9: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day10: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day11: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day12: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day13: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day14: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day15: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day16: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day17: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day18: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ]
      },
      {
        planName: 'Full-body',
        type: 'gym',
        numberOfDays: 3,
        day1: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day2: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day3: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day4: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day5: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day6: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day7: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day8: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
        day9: [
          {
            name: 'Deadlift',
            set1goal: 5,
            set1reps: 0,
            set1weight: 0,
            set2goal: 8,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Pendlay row',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Flat bench press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip dips',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0,
            set3goal: 12,
            set3reps: 0,
            set3weight: 0
          },
          {
            name: 'Smith shoulder press',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Wide grip upright row',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Back squat',
            set1goal: 12,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
          {
            name: 'Romanian deadlift',
            set1goal: 8,
            set1reps: 0,
            set1weight: 0,
            set2goal: 12,
            set2reps: 0,
            set2weight: 0
          },
        ],
      },
      {
      planName: 'Full-body',
      type: 'gym',
      numberOfDays: 5,
      day1: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day2: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day3: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day4: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day5: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day6: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day7: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day8: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day9: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day10: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day11: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day12: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day13: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day14: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
      day15: [
        {
          name: 'Deadlift',
          set1goal: 5,
          set1reps: 0,
          set1weight: 0,
          set2goal: 8,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Pendlay row',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Flat bench press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip dips',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0,
          set3goal: 12,
          set3reps: 0,
          set3weight: 0
        },
        {
          name: 'Smith shoulder press',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Wide grip upright row',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Back squat',
          set1goal: 12,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
        {
          name: 'Romanian deadlift',
          set1goal: 8,
          set1reps: 0,
          set1weight: 0,
          set2goal: 12,
          set2reps: 0,
          set2weight: 0
        },
      ],
    },
    {
      planName: 'Treat yo self',
      type: 'Crossfit',
      numberOfDays: 6,
      day1: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day2: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day3: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day4: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day5: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day6: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day7: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day8: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day9: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day10: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day11: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day12: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day13: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day14: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day15: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day16: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day17: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day18: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
    },
    {
      planName: 'Treat yo self',
      type: 'Crossfit',
      numberOfDays: 5,
      day1: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day2: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day3: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day4: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day5: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day6: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day7: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day8: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day9: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day10: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day11: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day12: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day13: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day14: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day15: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
    },
    {
      planName: 'Treat yo self',
      type: 'Crossfit',
      numberOfDays: 3,
      day1: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day2: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day3: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day4: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day5: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day6: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day7: [
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40 
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Air squats',
          set1goal: 40
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 300
        },
        {
          name: 'Push ups',
          set1goal: 30
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
        {
          name: 'Run',
          set1goal: 200
        },
        {
          name: 'Strict pull ups',
          set1goal: 20
        },
      ],
      day8: [
        {
          name: 'Deadlift',
          set1goal: 30
        },
        {
          name: 'Box jump over',
          set1goal: 30
        },
        {
          name: 'Deadlift',
          set1goal: 20
        },
        {
          name: 'Box jump over',
          set1goal: 20
        },
        {
          name: 'Deadlift',
          set1goal: 10
        },
        {
          name: 'Box jump over',
          set1goal: 10
        },
        {
          name: 'Deadlift',
          set1goal: 15
        },
        {
          name: 'Box jump over',
          set1goal: 15
        },
        {
          name: 'Deadlift',
          set1goal: 12
        },
        {
          name: 'Box jump over',
          set1goal: 12
        },
        {
          name: 'Deadlift',
          set1goal: 9
        },
        {
          name: 'Box jump over',
          set1goal: 9
        },
      ],
      day9: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
    },
    {
      planName: 'Ice and Fire',
      type: 'Crossfit',
      numberOfDays: 6,
      day1: [
        {
          name: 'Strict hand push up',
          set1goal: 21
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 6
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
      ],
      day2: [
        {
          name: 'Run',
          set1goal: 1200
        },
        {
          name: 'Kettlebell swing',
          set1goal: 63
        },
        {
          name: 'Pull ups',
          set1goal: 36
        },
        {
          name: 'Run',
          set1goal: 800
        },
        {
          name: 'Kettlebell swing',
          set1goal: 42
        },
        {
          name: 'Pull ups',
          set1goal: 24
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Kettlebell swing',
          set1goal: 21
        },
        {
          name: 'Pull ups',
          set1goal: 12
        },
      ],
      day3: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day4: [
        {
          name: 'Strict hand push up',
          set1goal: 21
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 6
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
      ],
      day5: [
        {
          name: 'Run',
          set1goal: 1200
        },
        {
          name: 'Kettlebell swing',
          set1goal: 63
        },
        {
          name: 'Pull ups',
          set1goal: 36
        },
        {
          name: 'Run',
          set1goal: 800
        },
        {
          name: 'Kettlebell swing',
          set1goal: 42
        },
        {
          name: 'Pull ups',
          set1goal: 24
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Kettlebell swing',
          set1goal: 21
        },
        {
          name: 'Pull ups',
          set1goal: 12
        },
      ],
      day6: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day7: [
        {
          name: 'Strict hand push up',
          set1goal: 21
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 6
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
      ],
      day8: [
        {
          name: 'Run',
          set1goal: 1200
        },
        {
          name: 'Kettlebell swing',
          set1goal: 63
        },
        {
          name: 'Pull ups',
          set1goal: 36
        },
        {
          name: 'Run',
          set1goal: 800
        },
        {
          name: 'Kettlebell swing',
          set1goal: 42
        },
        {
          name: 'Pull ups',
          set1goal: 24
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Kettlebell swing',
          set1goal: 21
        },
        {
          name: 'Pull ups',
          set1goal: 12
        },
      ],
      day9: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day10: [
        {
          name: 'Strict hand push up',
          set1goal: 21
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 6
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
      ],
      day11: [
        {
          name: 'Run',
          set1goal: 1200
        },
        {
          name: 'Kettlebell swing',
          set1goal: 63
        },
        {
          name: 'Pull ups',
          set1goal: 36
        },
        {
          name: 'Run',
          set1goal: 800
        },
        {
          name: 'Kettlebell swing',
          set1goal: 42
        },
        {
          name: 'Pull ups',
          set1goal: 24
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Kettlebell swing',
          set1goal: 21
        },
        {
          name: 'Pull ups',
          set1goal: 12
        },
      ],
      day12: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day13: [
        {
          name: 'Strict hand push up',
          set1goal: 21
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 6
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
      ],
      day14: [
        {
          name: 'Run',
          set1goal: 1200
        },
        {
          name: 'Kettlebell swing',
          set1goal: 63
        },
        {
          name: 'Pull ups',
          set1goal: 36
        },
        {
          name: 'Run',
          set1goal: 800
        },
        {
          name: 'Kettlebell swing',
          set1goal: 42
        },
        {
          name: 'Pull ups',
          set1goal: 24
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Kettlebell swing',
          set1goal: 21
        },
        {
          name: 'Pull ups',
          set1goal: 12
        },
      ],
      day15: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
      day16: [
        {
          name: 'Strict hand push up',
          set1goal: 21
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Strict hand push up',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 15
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Power snatches',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 12
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 9
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
        {
          name: 'Sandbag cleans',
          set1goal: 6
        },
        {
          name: 'Sled push',
          set1goal: 75
        },
      ],
      day17: [
        {
          name: 'Run',
          set1goal: 1200
        },
        {
          name: 'Kettlebell swing',
          set1goal: 63
        },
        {
          name: 'Pull ups',
          set1goal: 36
        },
        {
          name: 'Run',
          set1goal: 800
        },
        {
          name: 'Kettlebell swing',
          set1goal: 42
        },
        {
          name: 'Pull ups',
          set1goal: 24
        },
        {
          name: 'Run',
          set1goal: 400
        },
        {
          name: 'Kettlebell swing',
          set1goal: 21
        },
        {
          name: 'Pull ups',
          set1goal: 12
        },
      ],
      day18: [
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 15
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 10
        },
        {
          name: 'Toes to bar',
          set1goal: 15
        },
        {
          name: 'Overhead squats',
          set1goal: 5
        },
      ],
    },
    {
    planName: 'Ice and Fire',
    type: 'Crossfit',
    numberOfDays: 5,
    day1: [
      {
        name: 'Strict hand push up',
        set1goal: 21
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 6
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
    ],
    day2: [
      {
        name: 'Run',
        set1goal: 1200
      },
      {
        name: 'Kettlebell swing',
        set1goal: 63
      },
      {
        name: 'Pull ups',
        set1goal: 36
      },
      {
        name: 'Run',
        set1goal: 800
      },
      {
        name: 'Kettlebell swing',
        set1goal: 42
      },
      {
        name: 'Pull ups',
        set1goal: 24
      },
      {
        name: 'Run',
        set1goal: 400
      },
      {
        name: 'Kettlebell swing',
        set1goal: 21
      },
      {
        name: 'Pull ups',
        set1goal: 12
      },
    ],
    day3: [
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 15
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 10
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 5
      },
    ],
    day4: [
      {
        name: 'Strict hand push up',
        set1goal: 21
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 6
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
    ],
    day5: [
      {
        name: 'Run',
        set1goal: 1200
      },
      {
        name: 'Kettlebell swing',
        set1goal: 63
      },
      {
        name: 'Pull ups',
        set1goal: 36
      },
      {
        name: 'Run',
        set1goal: 800
      },
      {
        name: 'Kettlebell swing',
        set1goal: 42
      },
      {
        name: 'Pull ups',
        set1goal: 24
      },
      {
        name: 'Run',
        set1goal: 400
      },
      {
        name: 'Kettlebell swing',
        set1goal: 21
      },
      {
        name: 'Pull ups',
        set1goal: 12
      },
    ],
    day6: [
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 15
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 10
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 5
      },
    ],
    day7: [
      {
        name: 'Strict hand push up',
        set1goal: 21
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 6
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
    ],
    day8: [
      {
        name: 'Run',
        set1goal: 1200
      },
      {
        name: 'Kettlebell swing',
        set1goal: 63
      },
      {
        name: 'Pull ups',
        set1goal: 36
      },
      {
        name: 'Run',
        set1goal: 800
      },
      {
        name: 'Kettlebell swing',
        set1goal: 42
      },
      {
        name: 'Pull ups',
        set1goal: 24
      },
      {
        name: 'Run',
        set1goal: 400
      },
      {
        name: 'Kettlebell swing',
        set1goal: 21
      },
      {
        name: 'Pull ups',
        set1goal: 12
      },
    ],
    day9: [
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 15
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 10
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 5
      },
    ],
    day10: [
      {
        name: 'Strict hand push up',
        set1goal: 21
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 6
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
    ],
    day11: [
      {
        name: 'Run',
        set1goal: 1200
      },
      {
        name: 'Kettlebell swing',
        set1goal: 63
      },
      {
        name: 'Pull ups',
        set1goal: 36
      },
      {
        name: 'Run',
        set1goal: 800
      },
      {
        name: 'Kettlebell swing',
        set1goal: 42
      },
      {
        name: 'Pull ups',
        set1goal: 24
      },
      {
        name: 'Run',
        set1goal: 400
      },
      {
        name: 'Kettlebell swing',
        set1goal: 21
      },
      {
        name: 'Pull ups',
        set1goal: 12
      },
    ],
    day12: [
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 15
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 10
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 5
      },
    ],
    day13: [
      {
        name: 'Strict hand push up',
        set1goal: 21
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 6
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
    ],
    day14: [
      {
        name: 'Run',
        set1goal: 1200
      },
      {
        name: 'Kettlebell swing',
        set1goal: 63
      },
      {
        name: 'Pull ups',
        set1goal: 36
      },
      {
        name: 'Run',
        set1goal: 800
      },
      {
        name: 'Kettlebell swing',
        set1goal: 42
      },
      {
        name: 'Pull ups',
        set1goal: 24
      },
      {
        name: 'Run',
        set1goal: 400
      },
      {
        name: 'Kettlebell swing',
        set1goal: 21
      },
      {
        name: 'Pull ups',
        set1goal: 12
      },
    ],
    day15: [
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 15
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 10
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 5
      },
    ],
  },
  {
    planName: 'Ice and Fire',
    type: 'Crossfit',
    numberOfDays: 3,
    day1: [
      {
        name: 'Strict hand push up',
        set1goal: 21
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 6
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
    ],
    day2: [
      {
        name: 'Run',
        set1goal: 1200
      },
      {
        name: 'Kettlebell swing',
        set1goal: 63
      },
      {
        name: 'Pull ups',
        set1goal: 36
      },
      {
        name: 'Run',
        set1goal: 800
      },
      {
        name: 'Kettlebell swing',
        set1goal: 42
      },
      {
        name: 'Pull ups',
        set1goal: 24
      },
      {
        name: 'Run',
        set1goal: 400
      },
      {
        name: 'Kettlebell swing',
        set1goal: 21
      },
      {
        name: 'Pull ups',
        set1goal: 12
      },
    ],
    day3: [
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 15
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 10
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 5
      },
    ],
    day4: [
      {
        name: 'Strict hand push up',
        set1goal: 21
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 6
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
    ],
    day5: [
      {
        name: 'Run',
        set1goal: 1200
      },
      {
        name: 'Kettlebell swing',
        set1goal: 63
      },
      {
        name: 'Pull ups',
        set1goal: 36
      },
      {
        name: 'Run',
        set1goal: 800
      },
      {
        name: 'Kettlebell swing',
        set1goal: 42
      },
      {
        name: 'Pull ups',
        set1goal: 24
      },
      {
        name: 'Run',
        set1goal: 400
      },
      {
        name: 'Kettlebell swing',
        set1goal: 21
      },
      {
        name: 'Pull ups',
        set1goal: 12
      },
    ],
    day6: [
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 15
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 10
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 5
      },
    ],
    day7: [
      {
        name: 'Strict hand push up',
        set1goal: 21
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Strict hand push up',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 15
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Power snatches',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 12
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 9
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
      {
        name: 'Sandbag cleans',
        set1goal: 6
      },
      {
        name: 'Sled push',
        set1goal: 75
      },
    ],
    day8: [
      {
        name: 'Run',
        set1goal: 1200
      },
      {
        name: 'Kettlebell swing',
        set1goal: 63
      },
      {
        name: 'Pull ups',
        set1goal: 36
      },
      {
        name: 'Run',
        set1goal: 800
      },
      {
        name: 'Kettlebell swing',
        set1goal: 42
      },
      {
        name: 'Pull ups',
        set1goal: 24
      },
      {
        name: 'Run',
        set1goal: 400
      },
      {
        name: 'Kettlebell swing',
        set1goal: 21
      },
      {
        name: 'Pull ups',
        set1goal: 12
      },
    ],
    day9: [
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 15
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 10
      },
      {
        name: 'Toes to bar',
        set1goal: 15
      },
      {
        name: 'Overhead squats',
        set1goal: 5
      },
    ],
  },
  {
    planName: 'Hatha yoga',
    type: 'yoga',
    numberOfDays: 6,
    day1: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day2: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day3: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day4: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day5: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day6: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day7: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day8: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day9: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day10: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day11: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day12: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day13: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day14: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day15: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day16: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day17: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day18: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
  },
  {
    planName: 'Hatha yoga',
    type: 'yoga',
    numberOfDays: 5,
    day1: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day2: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day3: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day4: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day5: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day6: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day7: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day8: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day9: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day10: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day11: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day12: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day13: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day14: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day15: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ]
  },
  {
    planName: 'Hatha yoga',
    type: 'yoga',
    numberOfDays: 3,
    day1: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day2: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day3: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day4: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day5: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day6: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
    day7: [
      {
        name: 'Mountain pose - Tadasana'
      },
      {
        name: 'Downward facing dog pose - Svanasana'
      },
      {
        name: 'Tree pose - Vrikshasana'
      },
      {
        name: 'Seated forward bend pose - Paschimottanasana'
      },
      {
        name: 'Cobbler pose - Buddha Konasana'
      },
      {
        name: 'Corpse pose - Shavasana'
      }
    ],
    day8: [
      {
        name: 'Half-moon pose'
      },
      {
        name: 'Hands-to-feet pose'
      },
      {
        name: 'Awkward pose'
      },
      {
        name: 'Eagle pose'
      },
      {
        name: 'Standing head-to-knee pose'
      },
      {
        name: 'Standing bow-pulling pose'
      },
      {
        name: 'Balance stick pose'
      },
      {
        name: 'Standing separate-leg Head-to-knee pose'
      },
      {
        name: 'Tree pose'
      },
      {
        name: 'Toe stand pose'
      },
      {
        name: 'Corpse pose'
      },
      {
        name: 'Wind-removing pose'
      },
      {
        name: 'Birkram yoga sit-up pose'
      },
      {
        name: 'Cobra pose'
      },
      {
        name: 'Locust pose'
      },
      {
        name: 'Full locust pose'
      },
      {
        name: 'Floor bow pose'
      },
      {
        name: 'Fixed firm pose'
      },
      {
        name: 'Half tortoise pose'
      },
      {
        name: 'Camel pose'
      },
      {
        name: 'Rabbit pose'
      },
      {
        name: 'Head to knee pose'
      },
      {
        name: 'Stretching pose'
      },
      {
        name: 'Spine twisting pose'
      }
    ],
    day9: [
      {
        name: 'Child pose - Balasana'
      },
      {
        name: 'Seated cat cow - Upavistha Bitilasana Marjaryasana'
      },
      {
        name: 'Supported bridge pose - Setu Bandha Sarvangasana'
      },
      {
        name: 'Reclining bound angle pose - Septa Buddha Konasana'
      },
      {
        name: 'Thread the Needle Pose - Parsva Balasana'
      },
      {
        name: 'Supported Forward Fold - Paschimottanasana'
      },
      {
        name: 'Sleeping Pigeon Pose - Eka Pada Rajakapotasana'
      },
      {
        name: 'Supine Spinal Twist - Jathara Parivartanasana'
      },
      {
        name: 'Supported Fish Pose - Matsyasana'
      },
      {
        name: 'Legs Up The Wall - Viparita Karani'
      }
    ],
  },
  {
    planName: 'Love yoga',
    type: 'yoga',
    numberOfDays: 6,
    day1: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day2: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day3: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day4: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day5: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day6: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day7: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day8: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day9: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day10: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day11: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day12: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day13: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day14: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day15: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day16: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day17: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day18: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
  },
  {
    planName: 'Love yoga',
    type: 'yoga',
    numberOfDays: 5,
    day1: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day2: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day3: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day4: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day5: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day6: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day7: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day8: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day9: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day10: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day11: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day12: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day13: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day14: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day15: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
  },
  {
    planName: 'Love yoga',
    type: 'yoga',
    numberOfDays: 3,
    day1: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day2: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day3: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day4: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day5: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day6: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
    day7: [
      {
        name: 'Plank pose - Kumbhakasana'
      },
      {
        name: 'Four-limbed Staff Pose - Chaturanga Dandasana'
      },
      {
        name: 'Upward-facing dog pose - Urdhva Mukha Svanasana'
      },
      {
        name: 'Downward-facing dog pose - Adho Mukha Svanasana' 
      }
    ],
    day8: [
      {
        name: 'Ankle stretch'
      },
      {
        name: 'Toe squat'
      },
      {
        name: 'Butterfly'
      },
      {
        name: 'Reclining twist'
      },
      {
        name: 'Child pose'
      },
      {
        name: 'Caterpillar'
      },
      {
        name: 'Straddle (dragonfly)'
      },
      {
        name: 'Sleeping swan'
      },
      {
        name: 'Savasana'
      }
    ],
    day9: [
      {
        name: 'Deep Breathing - Pranayama'
      },
      {
        name: 'Half moon with hands to feet pose - Ardha-Chandrasana with Padahastasana'
      },
      {
        name: 'Awkward pose - Utkatasana'
      },
      {
        name: 'Eagle pose - Garurasana'
      },
      {
        name: 'Standing head to knee pose - Dandayamana-Janushirasana'
      },
      {
        name: 'Standing Bow Pose - Dandayamana-Dhanurasana'
      },
      {
        name: 'Balancing stick pose - Tuladandasana'
      },
      {
        name: 'Standing separate leg stretching pose - Dandayamana-Bibhaktapada-Paschimotthanasana'
      },
      {
        name: 'Triangle pose - Trikonasana'
      },
      {
        name: 'Standing Separate Leg Head to Knee Pose - Dandayamana-Bibhaktapada-Janushirasana'
      },
      {
        name: 'Tree pose - Tadasana'
      },
      {
        name: 'Toe stand pose - Padangustasana'
      },
      {
        name: 'Sit-up'
      }
    ],
  }
]

mongoose
  .connect("mongodb://localhost/iron-muscle-connection")
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));
Template.insertMany(templates)
  .then((documents) => {
    console.log(`Success” ${documents.length} templates were added`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));