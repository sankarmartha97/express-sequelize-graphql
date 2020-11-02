const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	const Team = sequelize.define('team', {
		name:  DataTypes.STRING,
    });
    
    Team.associate = (models) => {
        Team.belongsToMany(models.user, {
          through: 'member',
          foreignKey: {
            name: 'teamId',
            field: 'team_id',
          },
        });
        Team.belongsTo(models.user, {
          foreignKey: 'owner',
        });
    };

    return Team;
};