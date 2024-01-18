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
      return { res: 'تاییدشد' };
  } catch (error) {
    console.log(error);
  }
};


export { handelMsg, handelAllComment };
