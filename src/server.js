const Hapi = require('@hapi/hapi');
const authRoutes = require('./routes/authRoutes');
const craftRoutes = require('./routes/craftRoutes');


const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(authRoutes);
    server.route(craftRoutes);

    await server.start();
    console.log(`Server running at ${server.info.uri}`);
};

init();