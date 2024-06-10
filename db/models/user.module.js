import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";


export const userModel = sequelize.define('user',{

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
// sequelize.sync({alter : true})
userModel.associate = function(models) {
    userModel.hasMany(models.Post, { as: 'posts', foreignKey: 'authorId' });
    userModel.hasMany(models.Comment, { as: 'comments', foreignKey: 'userId' });
};
export default userModel;
// userModel.sync({ alter: true });

