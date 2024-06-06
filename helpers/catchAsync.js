export const catchAsync = (fn) => (reg, res, next) => {fn(reg, res, next).catch((error) => next(error));
};
