const { bucket } = require('../../config/bucketconf');
const { createPostCraft } = require('../../services/postcraftServices');
const verifyToken = require('../../middleware/authentication');

const uploadHandler = async (request, h) => {
    try {
        const userData = await verifyToken(request);
        if (!userData) {
            return h.response({
                status: 'fail',
                message: 'Invalid or missing token please re-login'
            }).code(401);
        }

        const { payload } = request;
        const file = payload.file;
        const { title, description } = payload;
        const userId = userData.id;

        if (!file) {
            return h.response({ error: 'No file uploaded' }).code(400);
        }

        const filename = `${Date.now()}_${file.hapi.filename}`;
        const gcsFile = bucket.file(filename);
        const stream = gcsFile.createWriteStream({
            metadata: {
                contentType: file.hapi.headers['content-type'],
            },
        });

        return new Promise((resolve, reject) => {
            file.pipe(stream)
                .on('finish', async () => {
                    try {
                        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;
                        console.log('File uploaded to Google Cloud Storage:', publicUrl);

                        console.log('Saving URL to MySQL...');
                        const newPost = await createPostCraft(userId, title, publicUrl, description);

                        resolve(h.response({
                            message: 'File uploaded successfully',
                            data: {
                                postId: newPost.postId,
                                userId,
                                title,
                                URL_Image: publicUrl,
                                description,
                            },
                        }).code(201));
                    } catch (error) {
                        console.error('Error during file upload or database operation:', error.message);
                        reject(h.response({ error: error.message }).code(500));
                    }
                })
                .on('error', (err) => {
                    console.error('File stream error:', err);
                    reject(h.response({ error: err.message }).code(500));
                });
        });
    } catch (error) {
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = uploadHandler;
