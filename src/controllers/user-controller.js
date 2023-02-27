import { Usuario } from "../model/User.js";
import User from "../mongodb/models/user.js";

export class UserController {
  async signUp(req, res) {
    const user = new Usuario(req.body);

    if (!user.username || !user.avatar) {
      res.status(400).send("Todos os campos são obrigatórios!");
      return;
    }

    const newUser = await User.create({
      username: user.username,
      avatar: user.avatar,
    });
    res.status(200).send("OK deu tudo certo");
  }
}
