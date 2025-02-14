const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema({
  title: { type: String, required: true, maxlength: 255 },
  company: { type: String, required: true, maxlength: 64 },
  companyWebsite: { type: String, required: true },
  location: { type: String, required: true },
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
  createdAt: { type: Date, default: Date.now, required: true },
})

module.exports = mongoose.model('Portfolio', portfolioSchema)
