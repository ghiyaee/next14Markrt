'use server';
import BasketDb from '@/models/basketDb';
const handleOrder = async (id) => {
  const order = await BasketDb.find({
    $and: [{ user_id: id }, { status: true }],
  }).populate(['user_id', 'product_id']);
  return { order: JSON.parse(JSON.stringify(order)) };
};
const handleOrders = async () => {
    const orders = await BasketDb.find().populate(['user_id', 'product_id']);
    return{orders:JSON.parse(JSON.stringify(orders))}
}
const handleSendOrder = async (id) => {
  const sendOrder =await BasketDb.findOneAndUpdate({ _id: id }, { sending: true });
   return { orders: JSON.parse(JSON.stringify(sendOrder)) };
}
export { handleOrder, handleOrders, handleSendOrder };
