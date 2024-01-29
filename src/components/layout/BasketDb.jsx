'use server';
import BasketDb from '@/models/basketDb';
async function basketDb({ product, userConnect, quantity }) {
  // console.log(product);
  try {
    const productBasket = await BasketDb.findOne({
      user_id: userConnect[0]._id,
      product_id: product._id,
    });
    console.log(productBasket);
    if (productBasket) {
      await BasketDb.findOneAndUpdate(
        { product_id: product._id },
        { quantity: product.quantity  + Number(quantity)  }
      );
    } else {
      const newProduct = new BasketDb({
        product_id: product._id,
        user_id: userConnect[0]._id,
        quantity: quantity,
      });
      await newProduct.save();
    }
  } catch (error) {
    console.log(error + 'error baslketdb');
  }
}

const handelUpdataBasket = async (id) => {
  try {
    const product = await BasketDb.findOneAndUpdate(
      { product_id: id },
      { $inc:{quantity:1}},
      { new: true }
    );
    return { quantity: JSON.parse(JSON.stringify(product)) };
  } catch (error) {
    console.log(error);
  }
}
const handelBasketDb = async ({ userConnect }) => {
  console.log(userConnect);
  const basket = await BasketDb.findOne({ user_id: userConnect?._id }).populate(
    ['user_id', 'product_id']
  );
  console.log(`${basket} loaddb`);
  return { basket: JSON.parse(JSON.stringify(basket)) };
};
export { basketDb, handelBasketDb, handelUpdataBasket };