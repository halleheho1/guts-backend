const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HealthSchemas = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  accountnumber: { type: Number },
  firstname: { type: String },
  lastname: { type: String },
  gender: { type: String },
  birthdate: { type: Date },
  patientstatus: { type: String },
  admissiondate: { type: Date },
  dischargedate: { type: Date },
  number: { type: Number },
  street: { type: String },
  // unit: { type: Null },
  city: { type: String },
  // district: { type: Null },
  // region: { type: Null },
  postcode: { type: Number },
  insurername: { type: String },
  insuranceplan: { type: String },
  drg: { type: String },
  cpt: { type: Number },
  servicedate: { type: Date },
  daysorunits: { type: Number },
  charges: { type: String },
},
{ collection : 'Health' }
);

module.exports = mongoose.model('Health', HealthSchemas);
