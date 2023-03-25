const { validateFullName, validateEmail, checkPassword } = require("./validateEmail&Pswd");

const express = require("express"),
      app = express(),
      mongoose = require("mongoose"),
      bcrypt = require("bcrypt"),
      bodyParser = require("body-parser");

const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Kranthi:Kranthi123@cluster0.mwe6apw.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  fullname: String, 
  email: String,
  password: String,
  joined: { type: Date, default: Date.now },
});

const User = mongoose.model("user", userSchema);

// Home Page
app.get("/", (req, res) => {
  res.send("Welcome to Assignment 6 - INFO6150.");
});

// Create new user
app.post("/user/create", async (req, res) => {

  try {

    let user = await User.findOne({ email: req.body.email });
    let passBool, emailBool, nameBool = false;

    if (user) {
      res.status(400).send({ message: "Email Address already exists." });
    } else {

      if (validateFullName(req.body.fullname)) {
        fullnameBool = true;
      } else {
        fullnameBool = false;
        res.status(400).send({ message: "Please enter valid full name!"});
      }

      if (validateEmail(req.body.email)) {
        // console.log("Proper email address");
        emailBool = true;
      } else {
        emailBool = false;
        res.status(400).send({ message: "Please input email address correctly!"});
      }

      if (checkPassword(req.body.password) ) {
        passBool = true;
        // console.log("Password is correct");
      } else {
        passBool = false;
        res.status(400).send({ message: "Please input password correctly!"});
      }

      if (passBool && emailBool) {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const innerResult = await User.create({
          fullname: req.body.fullname,
          email: req.body.email,
          password: hashedPassword,
          user_type: req.body.user_type
        });
        res.status(201).send(innerResult);
      }   
    }    
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error Occurred!"});
  }

});

// Update user details
app.put("/user/edit", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }
    if (req.body.fullname && validateFullName(req.body.fullname)) {
      user.fullname = req.body.fullname;
    } else {
      res.status(400).send({ message: "Please enter a valid full name" });
      return;
    }
    if (req.body.password && checkPassword(req.body.password)) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword;
    } else {
      res.status(400).send({ message: "Please enter a valid password" });
      return;
    }
    const result = await user.save();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error Occurred!" });
  }
});

// Get all users
app.get("/user/getAll", async (req, res) => {

  User.find({}, function (err, users) {
      users.forEach(user => delete user.password);
      const newResult = users.map(item => {
        return {
          id: item._id,
          fullname: item.fullname,
          email: item.email,
          password: item.password
        }
      })
      res.send(newResult);
  });
  
});

// Delete user
app.delete("/user/delete", async (req, res) => {

  const user = await User.findOne({email: req.body.email});

  if (user) {
    const passCompare = await bcrypt.compare(req.body.password, user.password);
    if (passCompare) {
      User.findByIdAndDelete(user._id)
        .then(item => {
          if (!item) {
            res.status(404).send({
              message: `Cannot delete User with email=${user.email}. User not found!`
            });
          } else {
            res.send({
              message: `User with email id ${user.email} was deleted successfully!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete User with email=" + user.email
          });
        });
    } else {
      res.status(404).send({
        message: `Password incorrect entered, please retry.`
      });
    }
  } else {
    res.status(404).send({
      message: `User was not found! Please check the email address.`
    });
  }
});

// Server config block
app.listen(8002, () => {
  console.log("Server started at port 8002");
});