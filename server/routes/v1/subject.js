const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');

const {Subject}  = require('./../../models/subject');
const {mongoose} = require('./../../db/mongoose');

router.post('/', (req, res) => {
  let subject = new Subject({
    department: req.body.department,
    subcode: req.body.subcode,
    name: req.body.name
  });

  subject.save().then((doc) => {
    res.status(201).send(doc);
  }).catch((error) => res.status(400).send(error));
});

router.get('/', (req, res) => {
  Subject.find().then((subjects) => {
    res.status(200).send({subjects});
  }).catch((error) => res.status(400).send(error));
});

module.exports = router;