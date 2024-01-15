'use server';
import Comment from '@/models/comments';
async function AllComment(product) {
  try {
    const comment = await Comment.find({ product_id: product._id }).populate([
      'user_id',
      'product_id',
    ]);
    return { comment: JSON.parse(JSON.stringify(comment)) };
  } catch (error) {
    console.error(error);
  }
}

export default AllComment;
