'use server';
import BasketDb from '@/models/basketDb';
import { basketDb } from '../basket/BasketDb';
const handleOrder = async (id) => {
  const order = await BasketDb.find({
    $and: [{ user_id: id }, { stauts: true }],
  }).populate(['user_id', 'product_id']);
  return { order: JSON.parse(JSON.stringify(order)) };
};
const handleOrders = async () => {
    const orders = await BasketDb.find().populate(['user_id', 'product_id']);
    return{orders:JSON.parse(JSON.stringify(orders))}
}
export { handleOrder, handleOrders };
