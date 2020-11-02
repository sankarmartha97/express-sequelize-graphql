export default {
    Mutation: {
        createChannel: async (parent, args, {models}) => {
            try {
                await models.channel.create(args);
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
    }
}