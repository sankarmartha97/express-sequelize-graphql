const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	const Channel = sequelize.define('channel', {
        name:  DataTypes.STRING,
        public: DataTypes.BOOLEAN,
    });
    
    Channel.associate = (models) => {
        // 1:M
        Channel.belongsTo(models.team, {
          foreignKey: {
            name: 'teamId',
            field: 'team_id',
          },
        });
        // N:M
        Channel.belongsToMany(models.user, {
          through: 'channel_member',
          foreignKey: {
            name: 'channelId',
            field: 'channel_id',
          },
        });
      };

    return Channel;
};