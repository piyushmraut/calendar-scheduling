import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "../config/http.config";

export const registerController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = req.body;
    return res.status(HTTPSTATUS.CREATED).json({
      message: "User created successfully",
    });
  }
);