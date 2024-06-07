const Hapi = require('@hapi/hapi');
const authRoutes = require('./routes/authRoutes');
const craftRoutes = require('./routes/craftRoutes');
const postCraft = require('./routes/postCraftRoutes');

const init = async () => {
    const server = Hapi.server({
        port: process.env.SERVER_PORT,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(authRoutes);
    server.route(craftRoutes);
    server.route(postCraft);


    await server.start();
    console.log(`Server running at ${server.info.uri}`);
};

init();