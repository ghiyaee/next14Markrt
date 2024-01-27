'use server';
import BasketDb from '@/models/basketDb';
import Login from './Login';
import LoginPage from '@/app/login/page';
async function basketDb({ product, userConnect, quantity }) {
  // console.log(product, userConnect, quantity);
  const productBasket = await BasketDb.findOne({
    user_id: userConnect._id,
    product_id: product._id,
  });
  if (productBasket) {
    await BasketDb.findOneAndUpdate(
      { product_id: product._id },
      { quantity: product.quantity + quantity }
    );
  } else {
    const newProduct = new BasketDb({
      user_id: userConnect._id,
      product_id: product._id,
      quantity: quantity,
    });
    await newProduct.save();
    // console.log(newProduct);
  }
}

const handelBasketDb = async ({ userConnect }) => {
  console.log(userConnect);
  const basket = await BasketDb.findOne({ user_id: userConnect?._id }).populate(
    ['user_id', 'product_id']
  );
  console.log(`${basket} loaddb`);
  return {basket:(JSON.parse(JSON.stringify(basket)))}
}
export { basketDb, handelBasketDb };
