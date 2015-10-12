'use strict';

module.exports = function (sequelize, DataTypes) {
    var Handyman = sequelize.define('Handyman', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1
        },
        name: {
            type: DataTypes.STRING(200)
        },
        category: {
            type: DataTypes.STRING(50)
        },
        phone: {
            type: DataTypes.STRING(100)
        },
        facebookPage: {
            type: DataTypes.STRING(100)
        },
        city: {
            type: DataTypes.TEXT()
        },
        address: {
            type: DataTypes.STRING(200)
        },
        latitude: {
            type: DataTypes.STRING(20)
        },
        longitude: {
            type: DataTypes.STRING(20)
        },
        email: {
            type: DataTypes.STRING(50)
        },
        description: {
            type: DataTypes.TEXT()
        }
    }, {
        tableName: 'handyman',
        paranoid: true
    });

    return Handyman;
};
