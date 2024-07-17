const Joi = require("joi");
const Books = require("../../../model/modelBooks");

module.exports.PostCreateBook = async (req, res, {}) => {
  try {
    const bodyFormat = Joi.object({
      title: Joi.string().max(255).required(),
      author: Joi.string().max(255).required(),
      genre: Joi.string().required(),
      year: Joi.number().integer().min(0).max(new Date().getFullYear()),
    });
    const body = req.body;
    const validate = bodyFormat.validate(body);
    if (validate.error) {
      return res.status(400).send({ message: validate?.error?.details[0]?.message });
    }

    await Books.create(body);
    return res.status(200).send({ message: "Book has been created" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Unable to create data" });
  }
};
