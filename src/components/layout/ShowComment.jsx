'use server';
import Comment from '@/models/comments';
const handelAllComment = async () => {
  try {
    const resAll = await Comment.find().populate(['user_id', 'product_id']);
    return { res:JSON.parse(JSON.stringify(resAll))};
  } catch (error) {
    console.log(error);
  }
};
const handelMsg = async (id) => {
  try {
    await Comment.findOneAndUpdate(
      { _id: id },
      { show_comment: true }
    );
      const newComment = await Comment.find().populate([
        'user_id',
        'product_id',
      ]);
      return { res: JSON.parse(JSON.stringify(newComment)) };
  } catch (error) {
    console.log(error);
  }
};

const handelDeleteComment = async (id) => {
  try {
    const comment = await Comment.findOneAndDelete({ _id: id });
    const newComment = await Comment.find().populate(['user_id', 'product_id']);
    return { newComment: JSON.parse(JSON.stringify(newComment)) };
  } catch (error) {
    console.log(error);
  }
  
}

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
export {
  handelMsg,
  handelAllComment,
  handelDeleteComment,
  AllComment,
  CommentNew,
};
