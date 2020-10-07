const express = require('express');
const router = express();
const Template = require('../models/Template');
const User = require("../models/User");

// get all the templates
router.get('/', (req, res) => {
  Template.find()
    .then(templates => {
      res.status(200).json(templates);
    })
    .catch(error => {
      res.json(error);
    })
});

// get a specific template
router.get('/:id', (req, res) => {
  Template.findById(req.params.id)
    .then(template => {
      if (!template) {
        res.status(404).json(template);
      } else {
console.log("this is my template", template)
        res.status(200).json(template);
      }
    })
    .catch(error => {
      res.json(error);
    })
});

// delete a template
router.delete('/:id', (req, res) => {
  Template.findByIdAndDelete(req.params.id)
    .then(template => {
      res.status(200).json({ message: 'ok' });
    })
    .catch(error => {
      res.json(error);
    })
});
// create a new template and add it to the user
router.post('/', (req, res) => {
  
  const { templateID, userId } = req.body;
 Template.findById(templateID).then(template => {
   const {planName,numberOfDays,type, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14, day15, day16, day17, day18 } = template;
  
  Template.create({user_id:userId,planName,numberOfDays,type, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14, day15, day16, day17, day18 })
  .then(newTemplate => {
    User.findByIdAndUpdate(userId, {currentPlan:newTemplate},{new:true})
      .then(user => res.status(201).json(user))
      // console.log('this is a user', user)

  })
})

router.get('/currentTemplate/:templateId', (req, res) => {
  const templateId = req.params.templateId
  console.log(templateId, typeof templateId)
  Template.findById(templateId).then(template => {
    console.log(template)
  }).catch(err=> console.log(err))
}) 



})
  
// update a template
router.put('/:id', (req, res) => {
  const { title, description } = req.body;
  Template.findByIdAndUpdate(
    req.params.id,
    { title, description },
    { new: true }
  ).then(template => {
    res.status(200).json(template);
  })
    .catch(error => {
      res.json(error)
    })
})



module.exports = router;
