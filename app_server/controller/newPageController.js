let path = require("path");

module.exports.index = function (req, res) {
  console.log(req.middleWareTestParam);
  // res.sendFile(path.join(__dirname, "../../index.html"));
  // EJS ile dosya yazacağımız için artık yukarıdakine ihtiyacımız kalmadı. Bundan böyle,
  let fruits = ["Apple", "Watermelon", "Lemon", "Strawberry"];
  res.render("computer", { message: "Hello EJS World", fruits: fruits });
};

module.exports.loginPage = function (req, res) {
  res.sendFile(path.join(__dirname, "../../login.html"));
};
