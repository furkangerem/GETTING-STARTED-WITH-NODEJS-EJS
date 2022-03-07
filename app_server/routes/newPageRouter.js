let express = require("express");
const { redirect } = require("express/lib/response");
let router = express.Router();
let controller = require("../controller/newPageController");

router.use(function (req, res, next) {
  req.middleWareTestParam = "Hello MiddleWare";
  next();
});

router.get("/newPage", controller.index);
router.get("/newPage/Login", controller.loginPage);

module.exports = router;