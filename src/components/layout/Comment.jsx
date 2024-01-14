'use server';
import Comment from '@/models/comments.js';
async function CommentNew(data) {
  try {
    const comment = new Comment({
      text: data.text,
      user_id: data.userConnect[0]._id,
      product_id: data.product._id,
    });
    await comment.save();
    console.log('Comment saved successfully');
    return {
      success: 'نظرشماثبت شد بعدازتاییدنمایش داده خواهدشد',
    };
  } catch (error) {
    console.log(error);
  }
}
export default CommentNew;
