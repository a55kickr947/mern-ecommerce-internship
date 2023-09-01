const asyncHandler = require("./asyncHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const CustomError = require("../errors/CustomError");

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({
      success: false,
      status: "logout",
      message: "Session Expired! Please Login Again!",
    });
  }
  const data = jwt.verify(token, process.env.JWT_SECRET);
  if (!data) {
    res.clearCookie("access_token", { httpOnly: true, expires: new Date(0) });
    res.status(401).send("Session Expired. Login Again!");
  }

  req.user = await User.findById(data.userId).select("-password");
  if (!req.user) throw new CustomError(400, false, "User was not found");

  next();
});

module.exports = protect;
