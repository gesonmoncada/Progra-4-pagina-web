const { ObjectId } = require('mongodb');

class Comment {
  constructor(db) {
    this.collection = db.collection('comments');
  }

  async addComment(postId, userId, content) {
    const comment = {
      postId: ObjectId(postId),
      userId: ObjectId(userId),
      content,
      createdAt: new Date()
    };
    await this.collection.insertOne(comment);
  }
}

module.exports = Comment;