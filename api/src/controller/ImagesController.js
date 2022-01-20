const database = require('../models');

class ImagesController {
  async create(req, res) {
    const { productsId } = req.params;

    const listFiles = await database.Images.findAll({
      where: { products_id: Number(productsId) },
    });

    if (listFiles.length <= 4) {

        const filesProducts = [];

        for (const file of req.files) {
          const { productsId } = req.params;

          const uploadsFiles = await database.Images.create({
            type: file.mimetype,
            name: file.originalname,
            data: file.destination,
            products_id: productsId,
          });

          if (!uploadsFiles) {
            const result = {
              status: 404,
              filename: file.originalname,
              message: 'Con not upload sucess',
            };

            filesProducts.push(result);
          } else {
            const result = {
              status: 200,
              filename: file.originalname,
              message: ' upload sucess',
              file: uploadsFiles.originalname,
            };

            filesProducts.push(result);
          }
        }

        return res.status(200).json(filesProducts);

    } else {

      return res.status(500).json({
        message: `id ${productsId} já possui as 5 Imagens`,
      });

    }
  }
  /**
  const { productsId } = req.params;


} */

  async searchImages(req, res) {
    const { productsId } = req.params;

    try {
      const listFiles = await database.Images.findAll({
        where: { products_id: Number(productsId) },
      });

      console.log(listFiles.length);

      return res.status(200).json(listFiles);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    const { productsId } = req.params;

    try {
      await database.Images.destroy({
        where: {
          products_id: Number(productsId),
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

module.exports = new ImagesController();
