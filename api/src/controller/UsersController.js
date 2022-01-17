const database = require('../models');

class UsersController {
  async create(req, res) {
    const user = req.body;

    try {
      const newUser = await database.User.create(user);

      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async list(req, res) {
    try {
      const users = await database.User.findAll();

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async search(req, res) {
    const { id } = req.params;

    try {
      const oneUser = await database.User.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(oneUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const newInfos = req.body;

    try {
      // achar usuario e alterar
      await database.User.update(newInfos, {
        where: { id: Number(id) },
      });

      // procurar usuario atualizado
      const newUser = await database.User.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await database.User.destroy({
        where: { id: Number(id) },
      });

      return res.status(200).json({
        message: `id ${id} deleted`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Fim CRUD
}

module.exports = new UsersController();
