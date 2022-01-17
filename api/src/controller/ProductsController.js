const database = require('../models');

class ProductsController {
  async create(req, res) {
    const { sellerId } = req.params;
    const Product = { ...req.body, seller_id: Number(sellerId) };

    try {
      const newProduct = await database.Products.create(Product);

      return res.status(200).json(newProduct);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async list(req, res) {
    try {
      const listProducts = await database.Products.findAll();

      return res.status(200).json(listProducts);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async search(req, res) {
    const { sellerId } = req.params;

    try {
      const Products = await database.Products.findAll({
        where: { seller_id: Number(sellerId) },
      });

      return res.status(200).json(Products);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    const { sellerId, productsId } = req.params;
    const newsInfos = req.body;

    try {
      await database.Products.update(newsInfos, {
        where: {
          id: Number(productsId),
          seller_id: Number(sellerId),
        },
      });

      /** Achava e retornava o produto atualizado
      const prodNew = await database.Products.findOne({
        where: {
          id: Number(productsId),
        },
      });
      */
      return res
        .status(200)
        .json({ message: `ID:${productsId}, alterado com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    const { sellerId, productsId } = req.params;

    try {
      await database.Products.destroy({
        where: {
          id: Number(productsId),
          seller_id: Number(sellerId),
        },
      });

      return res.status(200).json({
        message: `id ${productsId} deleted`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new ProductsController();
