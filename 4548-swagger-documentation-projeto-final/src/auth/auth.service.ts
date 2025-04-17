import jwt from "jsonwebtoken";
import { userService } from "../user/user.service";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export class AuthService {
  async login(username: string, password: string) {
    try {
      const user = await userService.findUserByUsername(username);

      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid username or password");
      }

      const token = jwt.sign(
        { id: user._id, username: user.username },
        JWT_SECRET as string,
        {
          expiresIn: "1h",
        }
      );
      return { token };
    } catch (error) {
      throw new Error(`Internal server error: ${error}`);
    }
  }
}

export const authService = new AuthService();
