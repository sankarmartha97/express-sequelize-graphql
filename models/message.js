const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	const Message = sequelize.define('message', {
		text:  DataTypes.STRING,
    });
    
    Message.associate = (models) => {
        // 1:M
        Message.belongsTo(models.channel, {
          foreignKey: {
            name: 'channelId',
            field: 'channel_id',
          },
        });
        Message.belongsTo(models.user, {
          foreignKey: {
            name: 'userId',
            field: 'user_id',
          },
        });
    };

    return Message;
};