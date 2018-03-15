const mongoose = require('mongoose');
const _        = require('lodash');

let SubjectSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 3
  },
  subcode: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 3
  },
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 1,
    trim: true
  }
});

// Virtual for subject's full code
SubjectSchema
  .virtual('code')
  .get(function () {
    return this.department + this.subcode;
  });

// Virtual for subject's URL
SubjectSchema
  .virtual('url')
  .get(function () {
    return '/v1/subjects/' + this.code;
  });

SubjectSchema.methods.toJSON = function () {
  let subject = this;
  let subjectObject = subject.toObject({ virtuals: true});
  return _.pick(subjectObject, ['_id', 'code', 'name', 'url']);
};

let Subject = mongoose.model('Subject', SubjectSchema);
module.exports = {Subject};