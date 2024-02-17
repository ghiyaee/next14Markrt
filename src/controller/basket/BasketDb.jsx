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
const handelAddUpdataBasket = async (product) => {
  try {
    const products = await BasketDb.findOneAndUpdate(
      {
        product_id: product.product_id ? product.product_id?._id : product._id,
      },
      { $inc: { quantity: 1 } },
      { new: true }
    );
    return { quantity: JSON.parse(JSON.stringify(product)) };
  } catch (error) {
    console.log(error);
  }
};

const handelDecUpdataBasket = async (product) => {
  try {
    const products = await BasketDb.findOneAndUpdate(
      {
        product_id: product.product_id ? product.product_id?._id : product._id,
      },
      { $inc: { quantity: -1 } },
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
  try {
    const del = await BasketDb.findOneAndDelete({
      product_id: product.product_id ? product.product_id._id : product._id,
    });
  } catch (error) {
    console.log(error, 'ERROR DELETE FROM BASKETDB');
  }
};
const handleUpdateBasket = async (cartItem, tax, productTotal) => {
  let id;
  if (cartItem.length === 1 && cartItem[0]?.product_id?._id) {
    id = cartItem[0].product_id._id;
  } else if (cartItem.length === 1) {
    id = cartItem[0]._id;
  } else if (cartItem.length > 1) {
    const ids = cartItem
      .map((item) => (item.product_id ? item.product_id._id : item._id))
      .reduce((acc, id) => acc.concat(id), []);
    const query = { product_id: { $in: ids } };
    await BasketDb.updateMany(query, {
      $set: { tax: tax, productTotal: productTotal, status: true },
    });
  } else {
    console.error('ID not found for cartItem', cartItem);
    return;
  }
  const product = await BasketDb.findOneAndUpdate(
    { product_id: id },
    { tax: tax, productTotal: productTotal, status: true }
  );
};
export {
  basketDb,
  handelBasketDb,
  handelAddUpdataBasket,
  handelDeleteBasketProduct,
  handelDecUpdataBasket,
  handleUpdateBasket,
};
