const { Storage } = require('@google-cloud/storage');
const { bucket } = require('../../config/bucketconf');
const { createPostCraft } = require('../../services/postcraftServices');

const uploadHandler = async (request, h) => {
    const { payload } = request;
    const file = payload.file;
    const { userId, title, description } = payload;

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
};

module.exports = uploadHandler;
