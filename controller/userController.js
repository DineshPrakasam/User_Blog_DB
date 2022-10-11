import user from "../models/userModel.js";

export async function createUser(req, res, next) {
  try {
    const data = req.body;

    const existUser = await user.find({ phoneNumber: data.phoneNumber });

    if (existUser.length === 0) {
      const userData = await user.create({
        name: data.name,
        dob: data.dob,
        phoneNumber: data.phoneNumber,
        assembly: data.assembly,
        role: data.role,
      });

      res.status(201).json({
        status: "Created",
        message: "Submitted Successfully...!",
        userData,
      });
    } else {
      res.status(208).json({
        status: "Failed",
        message: "Phone Number Already Exist...!",
        existUser,
      });
    }
  } catch (error) {
    next(error);
  }
}

export async function getAllUsers(req, res, next) {
  try {
    const userData = await user.find();
    res.status(201).json({
      status: "Success",
      message: "Succss",
      userData,
    });
  } catch (error) {
    next(error);
  }
}
