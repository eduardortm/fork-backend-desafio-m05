const ChargeRegistrationValidation = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    console.log(error.details[0]);
    return res
      .status(400)
      .json({ message: error.message, details: error.details[0].path[0] });
  }
};

module.exports = ChargeRegistrationValidation;
