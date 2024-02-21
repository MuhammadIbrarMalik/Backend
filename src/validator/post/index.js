import Joi from "joi";

const postValidator = {
  create: (req, res, next) => {
    const schema = Joi.object({
      Tittle: Joi.string().min(3).max(95).required(),
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
      Tittle: Joi.string().min(3).max(95).required(),
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
export default postValidator;
