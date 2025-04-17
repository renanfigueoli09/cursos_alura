import User from "./user.schema";
import bcrypt from "bcrypt";

export class UserService {
  public async createUser(user: any) {
    const saltOrRounds = 10;
    user.password = await bcrypt.hash(user.password, saltOrRounds);
    await User.create(user);

    return "User created successfully";
  }

  public async findUserByUsername(username: string) {
    try {
      const user = await User.findOne({ username: username });
      return user;
    } catch (error) {
      throw new Error("Error finding user");
    }
  }
}

export const userService = new UserService();
