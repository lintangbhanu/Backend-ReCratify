const postCraft = require('../models/postcraftModels');
const { nanoid } = require('nanoid');


async function createPostCraft(userId, title, urlImage, description) {
    const id = nanoid(11);


    // Insert data into the postCraft table
    const queryData = await postCraft.create({
        postId: id,
        userId: userId,
        title: title,
        URL_Image: urlImage,
        description: description,
        created_at: new Date()
    });

    // Check if query was successful
    if (queryData) {
        return queryData;
    } else {
        throw new Error('Failed to create post craft');
    }
}

module.exports = {
    createPostCraft,
};
