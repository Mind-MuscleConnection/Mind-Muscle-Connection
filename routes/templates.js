const express = require('express');
const router = express();
const Template = require('../models/Template');

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
// create a new template
router.post('/', (req, res) => {
  const { title, description } = req.body;
  Template.create({
    title,
    description,
  })
    .then(template => {
      res.status(201).json(template);
    })
    .catch(error => {
      res.json(error);
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
