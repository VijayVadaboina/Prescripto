import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      res.json({
        success: false,
        message: "Not authorized Login",
      });
    }
    const token_decoded = jwt.verify(atoken, process.env.JWT_SECRET);
    if (
      token_decoded !==
      process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
    ) {
      res.json({
        success: false,
        message: "Not authorized Login",
      });
    }
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authAdmin;
