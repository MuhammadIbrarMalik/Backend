import Joi from "joi";

const commentValidator = {
  create: (req, res, next) => {
    const schema = Joi.object({
      Description: Joi.string().min(3).max(950).required(),
    });
    const response = schema.validate(req.body);
    if (response.error) {
      return res
        .status(400)
        .json({ message: "bad data", error: response.error });
    }
    next();
  },
  update: (req, res, next) => {
    const schema = Joi.object({
      Description: Joi.string().min(3).max(950).required(),
    });
    const response = schema.validate(req.body);
    if (response.error) {
      return res
        .status(400)
        .json({ message: "bad data", error: response.error });
    }
    next();
  },
};
export default commentValidator;
