const User = require("./user");

const simpan = async (req, res, next) => {
  const { name, gold, green, blue, orange } = req.body;

  const createuser = new User({
    name,
    gold,
    blue,
    green,
    orange,
  });

  let result;
  try {
    result = await createuser.save();
  } catch (err) {
    console.log(err);
    throw (err)
  }

  res.status(200).json({ user: result.toObject({ getters: true }) });
};

exports.simpan = simpan;
