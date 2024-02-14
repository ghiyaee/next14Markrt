'use server';
import BasketDb from '@/models/basketDb';
const handleOrder = async (id) => {
  const order = await BasketDb.find({
    $and: [{ user_id: id }, { stauts: true }],
  }).populate(['user_id', 'product_id']);
  return { order: JSON.parse(JSON.stringify(order)) };
};
export default handleOrder;
