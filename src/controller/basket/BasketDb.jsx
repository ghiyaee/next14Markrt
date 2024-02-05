'use server';
import BasketDb from '@/models/basketDb';
async function basketDb({ product, userConnect }) {
  try {
    const newProduct = new BasketDb({
      product_id: product._id,
      user_id: userConnect[0]._id,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error + 'error at save data to db');
  }
}
const handelUpdataBasket = async (id) => {
  try {
    const product = await BasketDb.findOneAndUpdate(
      { product_id: id },
      { $inc: { quantity: 1 } },
      { new: true }
    );
    return { quantity: JSON.parse(JSON.stringify(product)) };
  } catch (error) {
    console.log(error);
  }
};
const handelBasketDb = async ({ userConnect }) => {
  const basket = await BasketDb.find({ user_id: userConnect?._id }).populate([
    'user_id',
    'product_id',
  ]);
  console.log(`${basket} loaddb`);
  return { basket: JSON.parse(JSON.stringify(basket)) };
};
const handelDeleteBasketProduct = async (product) => {
  console.log(product);
  try {
    const del = await BasketDb.findOneAndDelete({ product_id: product.product_id ? product.product_id._id:  product._id });
    console.log(del);
    
  } catch (error) {
    console.log(error, 'ERROR DELETE FROM BASKETDB');
  }
};
export {
  basketDb,
  handelBasketDb,
  handelUpdataBasket,
  handelDeleteBasketProduct,
};
