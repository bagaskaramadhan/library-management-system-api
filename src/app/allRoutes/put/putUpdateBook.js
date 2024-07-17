const Joi = require("joi");
const Books = require("../../../model/modelBooks");

module.exports.PutUpdateBook = async (req, res, {}) => {
  try {
    const id = req.params.id;
    const bodyFormat = Joi.object({
      title: Joi.string().max(255),
      author: Joi.string().max(255),
      genre: Joi.string().max(255),
      year: Joi.number(),
    });
    const body = req.body;

    const validate = bodyFormat.validate(body);
    if (validate.error) {
      return res.status(400).send({ message: validate?.error?.details[0]?.message });
    }

    const checkId = await Books.findOne({ where: { id } });
    if (!checkId) {
      return res.status(404).send({ message: "Data not found" });
    }

    const newBody = {
      title: body.title || checkId.title,
      author: body.author || checkId.author,
      genre: body.genre || checkId.genre,
      year: body.year || checkId.year,
      updated_at: Date.now(),
    };
    await Books.update(newBody, { where: { id } });
    return res.status(200).send({ message: "Book has been updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Unable to update data" });
  }
};
