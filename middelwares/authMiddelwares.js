import { catchAsync } from "../helpers/catchAsync.js";

export const checkRegisterData = catchAsync(async (reg, res, next) => {
    const {email, password} = reg.body;
    
})