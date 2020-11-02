const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	const User = sequelize.define('user', {
		username:  DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });
    
    User.associate = (models) => {
        User.belongsToMany(models.team, {
          through: 'member',
          foreignKey: {
            name: 'userId',
            field: 'user_id',
          },
        });
        // N:M
        User.belongsToMany(models.channel, {
          through: 'channel_member',
          foreignKey: {
            name: 'userId',
            field: 'user_id',
          },
        });
    };

    return User;
};