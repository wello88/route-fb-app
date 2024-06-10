// connection.js
import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('mysql://uj7jvj3myly2vfgt:NrTav2UYWTZ6RpSM3sPm@bxzk6gtuvbfxgizmxkbb-mysql.services.clever-cloud.com:3306/bxzk6gtuvbfxgizmxkbb',
{
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
