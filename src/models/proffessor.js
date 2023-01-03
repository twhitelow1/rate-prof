import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Proffessor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Proffessor.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    school: DataTypes.STRING,
    department: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proffessor',
  });
  return Proffessor;
};