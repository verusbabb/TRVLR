const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  created: {
    type: Date,
    default: Date.now,
  },

  userName: {
    type: String,
    index: { unique: true },
    trim: true,
    required: "Enter a user name",
  },

  password: {
    type: String,
    index: { unique: true },
    required: "Enter a password",
  },

  name: {
    firstName: {
      type: String,
      trim: true,
      required: "Enter a first name",
    },
    lastName: {
      type: String,
      trim: true,
      required: "Enter a last name",
    },
  },

  memberOf: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
});

UserSchema.pre("save", function (next) {
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
  // console.log("hi");
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
