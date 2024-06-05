const postCraft = require('../models/postcraftModels');
const { nanoid } = require('nanoid');

async function createPostCraft(userId, title, urlImage, description) {
    const id = nanoid(11);

    const queryData = await postCraft.create({
        postId: id,
        userId: userId,
        title: title,
        URL_Image: urlImage,
        description: description,
        created_at: new Date()
    });

    if (queryData) {
        return queryData;
    } else {
        throw new Error('Failed to create post craft');
    }
}

async function deletePostCraft(postId) {
    const queryDelete = await postCraft.destroy({
        where: {
            postId: postId
        }
    });

    if (queryDelete) {
        return queryDelete;
    } else {
        throw new Error('Failed to delete post craft');
    }
}

module.exports = {createPostCraft, deletePostCraft};
