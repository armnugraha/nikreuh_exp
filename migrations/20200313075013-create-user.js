'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            username: {
                unique: true,
                type: Sequelize.STRING
            },
            email: {
                unique: true,
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.INTEGER
            },
            birth: {
                type: Sequelize.DATEONLY
            },
            height: {
                type: Sequelize.INTEGER
            },
            weight: {
                type: Sequelize.INTEGER
            },
            role_id: {
                type: Sequelize.INTEGER
                // references: { model: 'roles', key: 'id' }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW')
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users')
    }
}
