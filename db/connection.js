// connection.js
import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('facebook','root','', 
{
    host:"localhost",
    dialect: 'mysql'
});

export const connectdb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection successfully.');
    } catch (error) {
        console.log(error);
    }
};

connectdb();
