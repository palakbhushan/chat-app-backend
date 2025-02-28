const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    port: process.env.PG_PORT,
    logging: false
});

const connectPostgres = async () => {
    try {
        await sequelize.authenticate();
        console.log("Postgres Connected Successfully");
    } catch (error) {
        console.error("Postgres Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = { sequelize, connectPostgres };
