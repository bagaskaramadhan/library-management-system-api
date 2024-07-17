const Books = require("../../../model/modelBooks");

module.exports.GetAllBooks = async (req, res, {}) => {
  try {
    const result = await Books.findAll()
    return res.status(200).send(result);
  } catch (err) {
    console.log(err)
    return res.status(500).send({ message: "Unable to fetch data" });
  }
};
