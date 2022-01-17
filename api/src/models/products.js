const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.Images, {
        foreignKey: 'products_id',
      });
      Products.belongsTo(models.User, {
        foreignKey: 'seller_id',
      });
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Products',
    }
  );
  return Products;
};
