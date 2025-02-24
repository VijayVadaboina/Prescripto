import jwt from "jsonwebtoken";
//user authentication middleware
const authUser = async (req, res, next) => {
  try {
    // const { token } = req.headers;
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized Login",
      });
    }
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decoded.id;
    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
