'use server';
import BasketDb from '@/models/basketDb';
const handleOrder = async (id) => {
  try {
      const order = await BasketDb.find({
        $and: [{ user_id: id }, { status: true }],
      }).populate(['user_id', 'product_id']);
      return { order: JSON.parse(JSON.stringify(order)) };
  } catch (error) {
    console.log(error);
  }

};
const handleOrders = async () => {
  try {
     const orders = await BasketDb.find({status:true}).populate(['user_id', 'product_id']);
     return { orders: JSON.parse(JSON.stringify(orders)) };
  } catch (error) {
    console.log(error);
  }
   
}
const handleSendOrder = async (id) => {
  try {
      const sendOrder = await BasketDb.findOneAndUpdate(
        { _id: id },
        { sending: true }
      );
      return { orders: JSON.parse(JSON.stringify(sendOrder)) };
  } catch (error) {
    console.log(error);
  }

}
export { handleOrder, handleOrders, handleSendOrder };
