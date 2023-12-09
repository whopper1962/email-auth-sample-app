import { SigninUserService } from "@/services/SigninUserService";
import { SignupUserService } from "@/services/SignupUserService";
import { User } from "@/types/users";
import { NextFunction, Request, Response } from "express";

export class AuthController {
  static async signin(
    request: Request,
    response: Response<User[]>,
    next: NextFunction,
  ): Promise<void> {
    try {
      const members = await new SigninUserService().execute();
      response.json(members);
    } catch (e) {
      next(e);
    }
  }

  static async signup(
    request: Request,
    response: Response<User[]>,
    next: NextFunction,
  ): Promise<void> {
    try {
      const members = await new SignupUserService().execute();
      response.json(members);
    } catch (e) {
      next(e);
    }
  }
}
