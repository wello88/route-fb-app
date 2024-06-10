import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";


export const PostModel = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
          }
        });
        
        PostModel.associate = function(models) {
          PostModel.belongsTo(models.User, { as: 'author', foreignKey: 'authorId' });
          PostModel.hasMany(models.Comment, { as: 'comments', foreignKey: 'postId' });
        };
        
        export default PostModel;
    // PostModel.sync({ alter: true });
