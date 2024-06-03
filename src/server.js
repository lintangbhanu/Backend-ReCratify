const Hapi = require('@hapi/hapi');
const authRoutes = require('./routes/authRoutes');
const craftRoutes = require('./routes/craftRoutes');
const postCraft = require('./routes/postCraftRoutes');



const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(authRoutes);
    server.route(craftRoutes);
    server.route(postCraft);


    await server.start();
    console.log(`Server running at ${server.info.uri}`);
};

init();