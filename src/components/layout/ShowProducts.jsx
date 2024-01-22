'use server';
import Product from '@/models/products';
const handelAllProducts = async () => {
  try {
    const products = await Product.find();
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log(error);
  }
};
const handelProduct = async (id) => {
  try {
    const product = await Product.findOne({ _id: id });
    return { product: JSON.parse(JSON.stringify(product)) };
  } catch (error) {
    console.log(error);
  }
};

const handelEditProduct = async (data) => {
  console.log(data);
  try {
    const product = await Product.findOneAndUpdate(
      { _id: data.id },
      { $set: { price: data.price, countInStock: data.countInStock } }
    );
    if (!product) {
      return { msg: 'تغییرات اعمال نشد' };
    }
    return { msg: 'تغییرات اعمال شد' };
  } catch (error) {
    console.log(error);
  }
};
export { handelAllProducts, handelProduct, handelEditProduct };
