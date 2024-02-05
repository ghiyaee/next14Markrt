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
  const basket = await BasketDb.find({ user_id: userConnect?._id }).populate(
    ['user_id', 'product_id']
  );
  console.log(`${basket} loaddb`);
  return { basket: JSON.parse(JSON.stringify(basket)) };
};
export { basketDb, handelBasketDb, handelUpdataBasket };

// try {
//   const productBasket = await BasketDb.find({
//     user_id: userConnect[0]._id,
//     product_id: product._id,
//   });
//   console.log(productBasket);
//   if (productBasket) {
//     await BasketDb.findOneAndUpdate(
//       { product_id: product._id },
//       { quantity: product.quantity + Number(quantity) }
//     );
//   } else {
//     const newProduct = new BasketDb({
//       product_id: product._id,
//       user_id: userConnect[0]._id,
//       quantity: quantity,
//     });
//     await newProduct.save();
//     console.log(newProduct);
//   }
// } catch (error) {
//   console.log(error + 'error basketdb');
// }
