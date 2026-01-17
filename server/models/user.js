const mongoose = require("mongoose");
// User Schema
const userSchema = mongoose.Schema({
name:{
    required : true,
    type : String,
    trim: true,
},
email: {
  required: true,
  type: String,
  trim: true,
  unique: true,
  validate: {
    validator: (value) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
      return value.match(re);
    },
    message: "Please enter a valid email address",
  },
},

password:{
    required : true,
    type : String,
},
});

// User Schema connvert into model
//  and this mmodel eccept tow perametter now
//  1st is the name of schema = user schema | collection is named user
//  2nd schema itself object
const User = mongoose.model("User", userSchema);
module.exports = User;
