import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    professorId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    text: DataTypes.STRING,
    reviewer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};