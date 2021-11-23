const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  savedGames: [{
    id: Number,
    title: String,
    onWishList: Boolean,
  }],

  userCreated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.encryptPassword = async function (newUserData) {
newUserData.password = await bcrypt.hash(newUserData.password, 10);
return newUserData;
};

UserSchema.methods.comparePassword = async function (loginPw) {
  console.log(this.password)
  console.log(loginPw)
  return bcrypt.compareSync(loginPw, this.password)
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
