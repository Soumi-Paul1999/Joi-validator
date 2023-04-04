//for registeruser logic part

exports.registerUser = (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob,
      age: req.body.age,
      languages:req.body.languages
    };
    return res.status(201).json({
      message: "user was created",
      user,
    });
  } catch (error) {
    return res.send({ message: error.message });
  }
};
//for login user logic part

exports.loginUser = (req, res) => {
  try {
    return res.status(201).json({
      message: "user was loggedin",
    });
  } catch (error) {
    return res.send({ message: error.message });
  }
};
