import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";


export const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});
Comment.associate = function (models) {
    Comment.belongsTo(models.Post, { as: 'post', foreignKey: 'postId' })
    Comment.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
}
    export default Comment;
    Comment.sync({ alter: true });






