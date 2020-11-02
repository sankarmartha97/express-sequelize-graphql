// export default {
//     Query: {
//         hi: (parent, args, context, info) => 'hi',
//     },
// };

const resolvers = {
    Query: {
    hi: (parent, args, context, info) => 'hi',
}}

module.exports = resolvers;