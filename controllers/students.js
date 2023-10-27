const { saveStudent } = require("../services/students");

exports.createNewStudent = async function (req, res) {
  try {
    const { lastName, firstName } = req.body;

    if (lastName == null || firstName == null) {
      res.status(400);
      throw new Error("Bad request");
    }

    // save to the DB
    await saveStudent({ lastName, firstName }).catch((e) => {
      res.status(400);
      throw e;
    });

    // send response
    res.json({
      ok: true,
    });
  } catch (e) {
    res.json({
      ok: false,
      message: e.message,
    });
  }
};
