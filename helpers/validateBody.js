export const validateBody = (schema) => {
  const func = (req,res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(404).send({message:error.message});
    }
    next();
  };

  return func;
};
